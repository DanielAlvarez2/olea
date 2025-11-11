const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Special = require('./models/Special.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

console.log(''); //SEMICOLON REQUIRED BEFORE IIFE!!!
(async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected')
    }catch(err){
        console.log(err)      
    }
})()

const PORT = process.env.PORT || 1436
app.listen(PORT, ()=> console.log(`Server Listening on Port: ${PORT}`))

app.post('/api/special', async(req,res)=>{
    try{
        const maxSequence = await Special.findOne({section:req.body.section}).sort({sequence:-1})
        await Special.create({
            menu: req.body.menu,
            section: req.body.section,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            allergiesAbbreviated: req.body.allergiesAbbreviated,
            allergiesComplete: req.body.allergiesComplete,
            sequence: maxSequence ? maxSequence.sequence + 1 : 1
        })
        console.log(`Added to Database: ${req.body.name}`)
        res.json(`Added to Database: ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/special/:id', async(req,res)=>{
    try{
        const target = await Special.findById(req.params.id)
        const maxSequence = await Special.findOne({section: target.section}).sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Special.findOneAndUpdate({
                $and:[
                    {section: target.section},
                    {sequence: i}
                ]
            },{sequence: i-1})
        }
        await Special.findByIdAndDelete(req.params.id)
        console.log(`
            Deleted from Database:
            ${target.name}`)
        res.json(`
            Deleted from Database:
            ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/specials', async(req,res)=>{
    try{
        const allSpecials = await Special.find().sort({sequence:1})
        res.json(allSpecials)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/special/:id', async(req,res)=>{
    try{
        const special = await Special.findById(req.params.id)
        console.log(special)
        res.json(special) 
    }catch(err){
        console.log(err)
    }
})

app.put('/api/special/:id', async(req,res)=>{
    try{
        await Special.findByIdAndUpdate({_id:req.params.id},{
            section: req.body.section,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
        console.log(`Update to Database: ${req.body.name}`)
        res.json(`Updated to Database: ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

// app.put('/api/archiveItem/:id', async(req,res)=>{
//     try{
//         console.log(`/api/archiveItem/${req.params.id}`)
//     }catch(err){
//         console.log(err)
//     }
// })