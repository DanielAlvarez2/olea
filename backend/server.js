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
            section: req.body.section,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
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
        await Special.findByIdAndDelete(req.params.id)
        console.log('Item Deleted from Database')
        res.json('Item Deleted from Database')
    }catch(err){
        console.log(err)
    }
})

app.get('/api/special', async(req,res)=>{
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