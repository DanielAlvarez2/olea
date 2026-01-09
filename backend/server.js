const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Special = require('./models/Special.js')
const Dessert = require('./models/Dessert.js')
const Coffee = require('./models/Coffee.js')
const Tea = require('./models/Tea.js')
const Pixel = require('./models/Pixel.js')
const SpecialsFormat = require('./models/SpecialsFormat.js')


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

app.post('/api/specials', async(req,res)=>{
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
        console.log(`
            Added to Database: 
             - ${req.body.name}`)
        res.json(`
            Added to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/desserts', async(req,res)=>{
    try{
        const maxSequence = await Dessert.findOne().sort({sequence:-1})
        await Dessert.create({
            menu: req.body.menu,
            section: req.body.section,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            allergiesAbbreviated: req.body.allergiesAbbreviated,
            allergiesComplete: req.body.allergiesComplete,
            sequence: maxSequence ? maxSequence.sequence + 1 : 1
        })
        console.log(`
            Added to Database: 
             - ${req.body.name}`)
        res.json(`
            Added to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/coffees', async(req,res)=>{
    try{
        const maxSequence = await Coffee.findOne().sort({sequence:-1})
        await Coffee.create({
            menu: req.body.menu,
            section: req.body.section,
            name: req.body.name,
            price: req.body.price,
            sequence: maxSequence ? maxSequence.sequence + 1 : 1
        })
        console.log(`
            Added to Database: 
             - ${req.body.name}`)
        res.json(`
            Added to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/teas', async(req,res)=>{
    try{
        const maxSequence = await Tea.findOne({type:req.body.type}).sort({sequence:-1})
        await Tea.create({
            menu: req.body.menu,
            section: req.body.section,
            type: req.body.type,
            name: req.body.name,
            sequence: maxSequence ? maxSequence.sequence + 1 : 1
        })
        console.log(`
            Added to Database: 
             - ${req.body.name}`)
        res.json(`
            Added to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/specials/delete/:id', async(req,res)=>{
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
             - ${target.name}`)
        res.json(`
            Deleted from Database:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/desserts/delete/:id', async(req,res)=>{
    try{
        const target = await Dessert.findById(req.params.id)
        const maxSequence = await Dessert.findOne().sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Dessert.findOneAndUpdate({sequence: i},{sequence: i-1})
        }
        await Dessert.findByIdAndDelete(req.params.id)
        console.log(`
            Deleted from Database:
             - ${target.name}`)
        res.json(`
            Deleted from Database:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/coffees/delete/:id', async(req,res)=>{
    try{
        const target = await Coffee.findById(req.params.id)
        const maxSequence = await Coffee.findOne().sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Coffee.findOneAndUpdate({sequence: i},{sequence: i-1})
        }
        await Coffee.findByIdAndDelete(req.params.id)
        console.log(`
            Deleted from Database:
             - ${target.name}`)
        res.json(`
            Deleted from Database:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/specials/archive/:id', async(req,res)=>{
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
        await Special.findByIdAndUpdate(req.params.id,{sequence: 0})
        console.log(`
            Archived:
             - ${target.name}`)
        res.json(`
            Archived:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/desserts/archive/:id', async(req,res)=>{
    try{
        const target = await Dessert.findById(req.params.id)
        const maxSequence = await Dessert.findOne().sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Dessert.findOneAndUpdate({sequence: i},{sequence: i-1})
        }
        await Dessert.findByIdAndUpdate(req.params.id,{sequence: 0})
        console.log(`
            Archived:
             - ${target.name}`)
        res.json(`
            Archived:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/specials/unarchive/:id', async(req,res)=>{
    try{
        const target = await Special.findById(req.params.id)
        const maxSequence = await Special.findOne({section:target.section}).sort({sequence:-1})
        await Special.findByIdAndUpdate(req.params.id, {sequence: maxSequence.sequence + 1})
        console.log(`
            UNarchived:
             - ${target.name}`)
        res.json(`
            UNarchived:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/desserts/unarchive/:id', async(req,res)=>{
    try{
        const target = await Dessert.findById(req.params.id)
        const maxSequence = await Dessert.findOne().sort({sequence:-1})
        await Dessert.findByIdAndUpdate(req.params.id, {sequence: maxSequence.sequence + 1})
        console.log(`
            UNarchived:
             - ${target.name}`)
        res.json(`
            UNarchived:
             - ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/specials/move-up/:id', async(req,res)=>{
    try{
        const target= await Special.findById(req.params.id)
        await Special.findOneAndUpdate({
            $and:[
                {section: target.section},
                {sequence: target.sequence - 1}
            ]
        },{sequence: target.sequence})
        await Special.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
        console.log(`
            Moved Up:
            ${target.name}`)
        res.json(`
            Moved Up:
            ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/desserts/move-up/:id', async(req,res)=>{
    try{
        const target= await Dessert.findById(req.params.id)
        await Dessert.findOneAndUpdate({sequence: target.sequence - 1},{sequence: target.sequence})
        await Dessert.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
        console.log(`
            Moved Up:
            ${target.name}`)
        res.json(`
            Moved Up:
            ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/coffees/move-up/:id', async(req,res)=>{
    try{
        const target= await Coffee.findById(req.params.id)
        await Coffee.findOneAndUpdate({sequence: target.sequence - 1},{sequence: target.sequence})
        await Coffee.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
        console.log(`
            Moved Up:
            ${target.name}`)
        res.json(`
            Moved Up:
            ${target.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/coffees/move-down/:id', async(req,res)=>{
    try{
        const target= await Coffee.findById(req.params.id)
        await Coffee.findOneAndUpdate({sequence: target.sequence + 1},{sequence: target.sequence})
        await Coffee.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
        console.log(`
            Moved Down:
            ${target.name}`)
        res.json(`
            Moved Down:
            ${target.name}`)       
    }catch(err){
        console.log(err)
    }
})

app.put('/api/desserts/move-down/:id', async(req,res)=>{
    try{
        const target= await Dessert.findById(req.params.id)
        await Dessert.findOneAndUpdate({sequence: target.sequence + 1},{sequence: target.sequence})
        await Dessert.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
        console.log(`
            Moved Down:
            ${target.name}`)
        res.json(`
            Moved Down:
            ${target.name}`)
       
    }catch(err){
        console.log(err)
    }
})

app.put('/api/specials/move-down/:id', async(req,res)=>{
    try{
        const target= await Special.findById(req.params.id)
        await Special.findOneAndUpdate({
            $and:[
                {section: target.section},
                {sequence: target.sequence + 1}
            ]
        },{sequence: target.sequence})
        await Special.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
        console.log(`
            Moved Down:
            ${target.name}`)
        res.json(`
            Moved Down:
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

app.get('/api/desserts', async(req,res)=>{
    try{
        const allDesserts = await Dessert.find().sort({sequence:1})
        res.json(allDesserts)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/coffees', async(req,res)=>{
    try{
        const allCoffees = await Coffee.find().sort({sequence:1})
        res.json(allCoffees)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/teas', async(req,res)=>{
    try{
        const allTeas = await Tea.find().sort({sequence:1})
        res.json(allTeas)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/specials/:id', async(req,res)=>{
    try{
        const special = await Special.findById(req.params.id)
        console.log(special)
        res.json(special) 
    }catch(err){
        console.log(err)
    }
})

app.put('/api/specials/:id', async(req,res)=>{
    try{
        await Special.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            allergiesAbbreviated: req.body.allergiesAbbreviated,
            allergiesComplete: req.body.allergiesComplete,
            description: req.body.description,
            price: req.body.price
        })
        console.log(`
            Updated to Database: 
             - ${req.body.name}`)
        res.json(`
            Updated to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/desserts/:id', async(req,res)=>{
    try{
        await Dessert.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            allergiesAbbreviated: req.body.allergiesAbbreviated,
            allergiesComplete: req.body.allergiesComplete,
            description: req.body.description,
            price: req.body.price
        })
        console.log(`
            Updated to Database: 
             - ${req.body.name}`)
        res.json(`
            Updated to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/coffees/:id', async(req,res)=>{
    try{
        await Coffee.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            price: req.body.price
        })
        console.log(`
            Updated to Database: 
             - ${req.body.name}`)
        res.json(`
            Updated to Database: 
             - ${req.body.name}`)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/formats/specials', async(req,res)=>{ 
    try{
        let allFormats = await SpecialsFormat.find()
        if (allFormats.length == 0){
            await SpecialsFormat.create({
                pageMarginsLeftRight: 0,
                menuItemMarginsTopBottom: 0,
                doubleSided: false,
                letterPaper: true,
                showLegalText: true
            })
            allFormats = await SpecialsFormat.find()
        }
        console.log(allFormats)
        res.json(allFormats)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/increasePageMargins', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        console.log(allFormats[0])
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMarginsLeftRight: allFormats[0].pageMarginsLeftRight + 1})
        res.json('page margins increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/decreasePageMargins', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        console.log(allFormats[0])
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMarginsLeftRight: allFormats[0].pageMarginsLeftRight - 1})
        res.json('page margins decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/increaseMenuItemMargins', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        console.log(allFormats[0])
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {menuItemMarginsTopBottom: allFormats[0].menuItemMarginsTopBottom + 1})
        res.json('menu item margins increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/decreaseMenuItemMargins', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        console.log(allFormats[0])
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {menuItemMarginsTopBottom: allFormats[0].menuItemMarginsTopBottom - 1})
        res.json('menu item margins increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/togglePaperSize', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {letterPaper: !allFormats[0].letterPaper}
        )
        res.json('paper size changed')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/toggleLegalText', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {showLegalText: !allFormats[0].showLegalText}
        )
        res.json('paper size changed')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/specials/toggleDoubleSided', async(req,res)=>{
    try{
        const allFormats = await SpecialsFormat.find()
        await SpecialsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {doubleSided: !allFormats[0].doubleSided}
        )
        res.json('double sided changed')
    }catch(err){
        console.log(err)
    }
})
