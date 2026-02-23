const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Special = require('./models/Special.js')
const WineBTG = require('./models/WineBTG.js')
const Beer = require('./models/Beer.js')
const Sparkling = require('./models/Sparkling.js')
const Red = require('./models/Red.js')
const White = require('./models/White.js')
const Rosé = require('./models/Rosé.js')
const Spirit = require('./models/Spirit.js')
const Dessert = require('./models/Dessert.js')
const DinnerMenuItem = require('./models/DinnerMenuItem.js')
const DessertDrink = require('./models/DessertDrink.js')
const NonAlcoholicDrink = require('./models/NonAlcoholicDrink.js')
const Sherry = require('./models/Sherry.js')
const Sangria = require('./models/Sangria.js')
const CraftDrink = require('./models/CraftDrink.js')
const Coffee = require('./models/Coffee.js')
const Tea = require('./models/Tea.js')
const TeaPrice = require('./models/TeaPrice.js')
const Pixel = require('./models/Pixel.js')
const SpecialsFormat = require('./models/SpecialsFormat.js')
const DessertsFormat = require('./models/DessertsFormat.js')
const DinnerFormat = require('./models/DinnerFormat.js')
const TakeoutFormat = require('./models/TakeoutFormat.js')
const TastingMenuPricing = require('./models/TastingMenuPricing.js')


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

app.post('/api/sangria', async(req,res)=>{
    try{
        const maxSequence = await Sangria.findOne().sort({sequence:-1})
        await Sangria.create({
            name: req.body.name,
            description: req.body.description,
            glassPrice: req.body.glassPrice,
            pitcherPrice: req.body.pitcherPrice,
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

app.post('/api/drinks', async(req,res)=>{
    try{
        const maxSequence = await CraftDrink.findOne().sort({sequence:-1})
        await CraftDrink.create({
            name: req.body.name,
            description: req.body.description,
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

app.post('/api/non-alcoholic-drinks', async (req,res)=>{
    try{
        await NonAlcoholicDrink.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
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

app.post('/api/beer', async (req,res)=>{
    try{
        await Beer.create({
            section: req.body.section,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
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

app.post('/api/sherries', async (req,res)=>{
    try{
        await Sherry.create({
            grapes: req.body.grapes,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
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

app.post('/api/sparkling', async (req,res)=>{
    try{
        await Sparkling.create({
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price
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

app.post('/api/white', async(req,res)=>{
    try{
        const existingCategoryItem = await White.findOne({category:req.body.category.trim()})
        const maxCategorySequence = await White.findOne().sort({categorySequence:-1})
        
        await White.create({
            category:req.body.category.trim(),
            categorySequence: existingCategoryItem  ? existingCategoryItem.categorySequence 
                                                    : maxCategorySequence ? maxCategorySequence.categorySequence + 1 : 1, 
            grapes: req.body.grapes.trim(),
            name: req.body.name.trim(),
            vintage: req.body.vintage.trim(),
            description: req.body.description.trim(),
            price: req.body.price.trim(),
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

app.post('/api/red', async(req,res)=>{
    try{
        const existingCategoryItem = await Red.findOne({category:req.body.category.trim()})
        const maxCategorySequence = await Red.findOne().sort({categorySequence:-1})
        
        await Red.create({
            category:req.body.category.trim(),
            categorySequence: existingCategoryItem  ? existingCategoryItem.categorySequence 
                                                    : maxCategorySequence ? maxCategorySequence.categorySequence + 1 : 1, 
            grapes: req.body.grapes.trim(),
            name: req.body.name.trim(),
            vintage: req.body.vintage.trim(),
            description: req.body.description.trim(),
            price: req.body.price.trim(),
            halfBottlePrice: req.body.halfBottlePrice.trim(),
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

app.post('/api/rose', async (req,res)=>{
    try{
        await Rosé.create({
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price
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

app.post('/api/wines-btg', async(req,res)=>{
    try{
        await WineBTG.create({
            menu: req.body.menu,
            section: req.body.section,
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price
        })
        console.log(`
            Added to Database:
             - ${req.body.name}
            `)
        res.json(`
            Added to Database:
             - ${req.body.name}
            `)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/dinner-menu-items', async(req,res)=>{
    try{
        const maxSequence = await DinnerMenuItem.findOne({section:req.body.section}).sort({sequence:-1})
        await DinnerMenuItem.create({
                                        menu: req.body.menu,
                                        section: req.body.section,
                                        name: req.body.name,
                                        description: req.body.description,
                                        descriptionIntro: req.body.descriptionIntro,
                                        postDescription: req.body.postDescription,
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

app.delete('/api/drinks/:id', async(req,res)=>{
    try{
        const target = await CraftDrink.findById(req.params.id)
        const maxSequence = await CraftDrink.findOne().sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await CraftDrink.findOneAndUpdate({sequence: i},{sequence: i-1})
        }
        await CraftDrink.findByIdAndDelete(req.params.id)
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

app.delete('/api/sangria/delete/:id', async(req,res)=>{
    try{
        const target = await Sangria.findById(req.params.id)
        const maxSequence = await Sangria.findOne().sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Sangria.findOneAndUpdate({sequence: i},{sequence: i-1})
        }
        await Sangria.findByIdAndDelete(req.params.id)
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

app.delete('/api/non-alcoholic-drinks/:id', async(req,res)=>{
    try{
        const target = await NonAlcoholicDrink.findById(req.params.id)
        await NonAlcoholicDrink.findByIdAndDelete(req.params.id)
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

app.delete('/api/beer/:id', async(req,res)=>{
    try{
        const target = await Beer.findById(req.params.id)
        await Beer.findByIdAndDelete(req.params.id)
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

app.delete('/api/sherries/:id', async(req,res)=>{
    try{
        const target = await Sherry.findById(req.params.id)
        await Sherry.findByIdAndDelete(req.params.id)
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

app.delete('/api/sparkling/:id', async(req,res)=>{
    try{
        const target = await Sparkling.findById(req.params.id)
        await Sparkling.findByIdAndDelete(req.params.id)
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

app.delete('/api/rose/:id', async(req,res)=>{
    try{
        const target = await Rosé.findById(req.params.id)
        await Rosé.findByIdAndDelete(req.params.id)
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

app.delete('/api/wines-btg/:id', async(req,res)=>{
    try{
        const target = await WineBTG.findById(req.params.id)
        await WineBTG.findByIdAndDelete(req.params.id)
        console.log(`
            Deleted from Database:
             - ${target.name}
            `)
        res.json(`
            Deleted from Database:
             - ${target.name}
            `)
    }catch(err){
        console.log(err)
    }
})

app.delete('/api/dinner-menu-items/delete/:id', async(req,res)=>{
    try{
        const target = await DinnerMenuItem.findById(req.params.id)
        const maxSequence = await DinnerMenuItem.findOne({section: target.section}).sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await DinnerMenuItem.findOneAndUpdate({
                $and:[
                    {section: target.section},
                    {sequence: i}
                ]
            },{sequence: i-1})
        }
        await DinnerMenuItem.findByIdAndDelete(req.params.id)
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

app.delete('/api/dessert-drinks/delete/:id', async(req,res)=>{
    try{
        const target = await DessertDrink.findById(req.params.id)
        const maxSequence = await DessertDrink.findOne({category:target.category}).sort({sequence:-1})
        const maxCategorySequenceDrink = await DessertDrink.findOne().sort({categorySequence:-1})
        const maxCategorySequence = maxCategorySequenceDrink.categorySequence

        console.log('target.sequence: ' + target.sequence)
        console.log('target.categorySequence: '+ target.categorySequence)
        console.log('maxCategorySequence: '+ maxCategorySequence)
        console.log('maxSequence.sequence: '+ maxSequence.sequence)

        if(target.sequence == 1 
            && target.categorySequence != maxCategorySequence 
            && target.sequence == maxSequence.sequence) {
                console.log('***fire***')
                for (let i=target.categorySequence+1;i<=maxCategorySequence;i++){
                    console.log('i: '+i)
                    await DessertDrink.updateMany({categorySequence:i},{$set:{categorySequence:i-1}})
                }
        }else{
            console.log('target.sequence: '+target.sequence)
            console.log('maxSequence.sequence: '+maxSequence.sequence)
            for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
                await DessertDrink.findOneAndUpdate({category:target.category,sequence: i},{$set:{sequence: i-1}})
            }
        }
        await DessertDrink.findByIdAndDelete(req.params.id)
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

app.delete('/api/spirits/:id', async(req,res)=>{
    try{
        const target = await Spirit.findById(req.params.id)
        const maxCategorySequenceDrink = await Spirit.findOne().sort({categorySequence:-1})
        const maxCategorySequence = maxCategorySequenceDrink.categorySequence

        console.log('target.sequence: ' + target.sequence)
        console.log('target.categorySequence: '+ target.categorySequence)
        console.log('maxCategorySequence: '+ maxCategorySequence)


        if(await Spirit.find({categorySequence: target.categorySequence}).length == 1 
            && target.categorySequence != maxCategorySequence 
        ) {
                console.log('***fire***')
                for (let i=target.categorySequence+1;i<=maxCategorySequence;i++){
                    console.log('i: '+i)
                    await Spirit.updateMany({categorySequence:i},{$set:{categorySequence:i-1}})
                }
        }
        await Spirit.findByIdAndDelete(req.params.id)
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

app.delete('/api/white/:id', async(req,res)=>{
    try{
        const target = await White.findById(req.params.id)
        const maxCategorySequenceWhite = await White.findOne().sort({categorySequence:-1})
        const maxCategorySequence = maxCategorySequenceWhite.categorySequence

        if(await White.find({categorySequence: target.categorySequence}).length == 1 
            && target.categorySequence != maxCategorySequence 
        ) {
                for (let i=target.categorySequence+1;i<=maxCategorySequence;i++){
                    await White.updateMany({categorySequence:i},{$set:{categorySequence:i-1}})
                }
        }
        await White.findByIdAndDelete(req.params.id)
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

app.delete('/api/red/:id', async(req,res)=>{
    try{
        const target = await Red.findById(req.params.id)
        const maxCategorySequenceRed = await Red.findOne().sort({categorySequence:-1})
        const maxCategorySequence = maxCategorySequenceRed.categorySequence

        if(await Red.find({categorySequence: target.categorySequence}).length == 1 
            && target.categorySequence != maxCategorySequence 
        ) {
                for (let i=target.categorySequence+1;i<=maxCategorySequence;i++){
                    await Red.updateMany({categorySequence:i},{$set:{categorySequence:i-1}})
                }
        }
        await Red.findByIdAndDelete(req.params.id)
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

app.delete('/api/teas/delete/:id', async(req,res)=>{
    try{
        const target = await Tea.findById(req.params.id)
        const maxSequence = await Tea.findOne({type:target.type}).sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await Tea.findOneAndUpdate({type:target.type,sequence: i},{sequence: i-1})
        }
        await Tea.findByIdAndDelete(req.params.id)
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

app.put('/api/dinner-menu-items/archive/:id', async(req,res)=>{
    try{
        const target = await DinnerMenuItem.findById(req.params.id)
        const maxSequence = await DinnerMenuItem.findOne({section: target.section}).sort({sequence:-1})
        for (let i = target.sequence + 1; i <= maxSequence.sequence; i++){
            await DinnerMenuItem.findOneAndUpdate({
                $and:[
                    {section: target.section},
                    {sequence: i}
                ]
            },{sequence: i-1})
        }
        await DinnerMenuItem.findByIdAndUpdate(req.params.id,{sequence: 0})
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

app.put('/api/dinner-menu-items/unarchive/:id', async(req,res)=>{
    try{
        const target = await DinnerMenuItem.findById(req.params.id)
        const maxSequence = await DinnerMenuItem.findOne({section:target.section}).sort({sequence:-1})
        await DinnerMenuItem.findByIdAndUpdate(req.params.id, {sequence: maxSequence.sequence + 1})
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

app.put('/api/sangria/move-up/:id', async(req,res)=>{
    try{
        const target= await Sangria.findById(req.params.id)
        await Sangria.findOneAndUpdate({sequence: target.sequence - 1},{sequence: target.sequence})
        await Sangria.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
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

app.put('/api/drinks/move-up/:id', async(req,res)=>{
    try{
        const target= await CraftDrink.findById(req.params.id)
        await CraftDrink.findOneAndUpdate({sequence: target.sequence - 1},{sequence: target.sequence})
        await CraftDrink.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
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

app.put('/api/dinner-menu-items/move-up/:id', async(req,res)=>{
    try{
        const target= await DinnerMenuItem.findById(req.params.id)
        await DinnerMenuItem.findOneAndUpdate({
            $and:[
                {section: target.section},
                {sequence: target.sequence - 1}
            ]
        },{sequence: target.sequence})
        await DinnerMenuItem.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
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

app.put('/api/dessert-drinks/move-up/:id', async(req,res)=>{
    try{
        const target= await DessertDrink.findById(req.params.id)
        await DessertDrink.findOneAndUpdate({category:target.category,sequence: target.sequence - 1},{sequence: target.sequence})
        await DessertDrink.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
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

app.put('/api/dessert-drinks/move-category-up/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await DessertDrink.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await DessertDrink.updateMany(
            {categorySequence: +req.params.sequence - 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await DessertDrink.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence - 1}}
        )
        console.log(`
            Moved Category Up`)
        res.json(`
            Moved Category Up`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/spirits/move-category-up/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await Spirit.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await Spirit.updateMany(
            {categorySequence: +req.params.sequence - 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await Spirit.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence - 1}}
        )
        console.log(`
            Moved Category Up`)
        res.json(`
            Moved Category Up`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/spirits/move-category-down/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await Spirit.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await Spirit.updateMany(
            {categorySequence:+req.params.sequence + 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await Spirit.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence + 1}}
        )
        console.log(`
            Moved Category Down`)
        res.json(`
            Moved Category Down`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/white/move-category-up/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await White.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await White.updateMany(
            {categorySequence: +req.params.sequence - 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await White.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence - 1}}
        )
        console.log(`
            Moved Category Up`)
        res.json(`
            Moved Category Up`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/white/move-category-down/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await White.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await White.updateMany(
            {categorySequence:+req.params.sequence + 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await White.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence + 1}}
        )
        console.log(`
            Moved Category Down`)
        res.json(`
            Moved Category Down`)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/dessert-drinks/move-category-down/:sequence', async(req,res)=>{
    try{
        console.log(req.params.sequence)
        await DessertDrink.updateMany(
            {categorySequence:req.params.sequence},
            {$set:{categorySequence:0}}
        )
        await DessertDrink.updateMany(
            {categorySequence:+req.params.sequence + 1},
            {$set:{categorySequence:req.params.sequence}}
        )
        await DessertDrink.updateMany(
            {categorySequence:0},
            {$set:{categorySequence: +req.params.sequence + 1}}
        )
        console.log(`
            Moved Category Down`)
        res.json(`
            Moved Category Down`)
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

app.put('/api/teas/move-up/:id', async(req,res)=>{
    try{
        const target= await Tea.findById(req.params.id)
        await Tea.findOneAndUpdate({type:target.type, sequence: target.sequence - 1},{sequence: target.sequence})
        await Tea.findByIdAndUpdate(req.params.id,{sequence: target.sequence - 1})
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

app.put('/api/teas/move-down/:id', async(req,res)=>{
    try{
        const target= await Tea.findById(req.params.id)
        await Tea.findOneAndUpdate({type:target.type, sequence: target.sequence + 1},{sequence: target.sequence})
        await Tea.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
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

app.put('/api/dessert-drinks/move-down/:id', async(req,res)=>{
    try{
        const target= await DessertDrink.findById(req.params.id)
        await DessertDrink.findOneAndUpdate({category:target.category,sequence: target.sequence + 1},{sequence: target.sequence})
        await DessertDrink.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
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

app.put('/api/sangria/move-down/:id', async(req,res)=>{
    try{
        const target= await Sangria.findById(req.params.id)
        await Sangria.findOneAndUpdate({sequence: target.sequence + 1},{sequence: target.sequence})
        await Sangria.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
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

app.put('/api/drinks/move-down/:id', async(req,res)=>{
    try{
        const target= await CraftDrink.findById(req.params.id)
        await CraftDrink.findOneAndUpdate({sequence: target.sequence + 1},{sequence: target.sequence})
        await CraftDrink.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
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

app.put('/api/dinner-menu-items/move-down/:id', async(req,res)=>{
    try{
        const target= await DinnerMenuItem.findById(req.params.id)
        await DinnerMenuItem.findOneAndUpdate({
            $and:[
                {section: target.section},
                {sequence: target.sequence + 1}
            ]
        },{sequence: target.sequence})
        await DinnerMenuItem.findByIdAndUpdate(req.params.id,{sequence: target.sequence + 1})
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

app.get('/api/drinks', async(req,res)=>{
    try{
        const allDrinks = await CraftDrink.find().sort({sequence:1})
        res.json(allDrinks)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/sangria', async(req,res)=>{
    try{
        const allSangrias = await Sangria.find().sort({sequence:1})
        res.json(allSangrias)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/beer', async(req,res)=>{
    try{
        const allBeers = await Beer.find().sort({price:1})
        res.json(allBeers)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/sherries', async(req,res)=>{
    try{
        allSherries = await Sherry.find().sort({price:1})
        res.json(allSherries)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/sparkling', async(req,res)=>{
    try{
        allSparkling = await Sparkling.find().sort({price:1})
        res.json(allSparkling)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/rose', async(req,res)=>{
    try{
        allRosé = await Rosé.find().sort({price:1})
        res.json(allRosé)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/non-alcoholic-drinks', async(req,res)=>{
    try{
        const allNonAlcoholicDrinks = await NonAlcoholicDrink.find().sort({price:1})
        res.json(allNonAlcoholicDrinks)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/wines-btg', async(req,res)=>{
    try{
        const allWinesBTG = await WineBTG.find().sort({price:1})
        res.json(allWinesBTG)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/dinner-menu-items', async(req,res)=>{
    try{
        const allDinnerMenuItems = await DinnerMenuItem.find().sort({sequence:1})
        res.json(allDinnerMenuItems)
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

app.get('/api/dessert-drinks', async(req,res)=>{
    try{
        const allDessertDrinks = await DessertDrink.find().sort({sequence:1})
        res.json(allDessertDrinks)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/spirits', async(req,res)=>{
    try{
        const allSpirits = await Spirit.find().sort({price:1})
        res.json(allSpirits)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/spirit-categories', async(req,res)=>{
    try{
        const allSpiritCategories = await Spirit.find().sort({categorySequence:1})
        res.json(allSpiritCategories)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/white', async(req,res)=>{
    try{
        const allWhites = await White.find().sort({price:1})
        res.json(allWhites)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/white-categories', async(req,res)=>{
    try{
        const allWhiteCategories = await White.find().sort({categorySequence:1})
        res.json(allWhiteCategories)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/red', async(req,res)=>{
    try{
        const allReds = await Red.find().sort({price:1})
        res.json(allReds)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/red-categories', async(req,res)=>{
    try{
        const allRedCategories = await Red.find().sort({categorySequence:1})
        res.json(allRedCategories)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/dessert-drink-categories', async(req,res)=>{
    try{
        const allDessertDrinkCategories = await DessertDrink.find().sort({categorySequence:1})
        res.json(allDessertDrinkCategories)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/dessert-drinks', async(req,res)=>{
    try{
        const maxSequence = await DessertDrink.findOne({category:req.body.category.trim()})
                                                .sort({sequence:-1})
        const existingCategoryItem = await DessertDrink.findOne({category:req.body.category.trim()})
        const maxCategorySequence = await DessertDrink.findOne().sort({categorySequence:-1})
        
        await DessertDrink.create({
            menu: req.body.menu,
            section: req.body.section,
            category:req.body.category.trim(),
            categorySequence: existingCategoryItem  ? existingCategoryItem.categorySequence 
                                                    : maxCategorySequence ? maxCategorySequence.categorySequence + 1 : 1, 
            name: req.body.name.trim(),
            preDescription: req.body.preDescription.trim(),
            postDescription: req.body.postDescription.trim(),
            price: req.body.price.trim(),
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

app.post('/api/spirits', async(req,res)=>{
    try{
        const existingCategoryItem = await Spirit.findOne({category:req.body.category.trim()})
        const maxCategorySequence = await Spirit.findOne().sort({categorySequence:-1})
        
        await Spirit.create({
            category:req.body.category.trim(),
            categorySequence: existingCategoryItem  ? existingCategoryItem.categorySequence 
                                                    : maxCategorySequence ? maxCategorySequence.categorySequence + 1 : 1, 
            name: req.body.name.trim(),
            price: req.body.price.trim(),
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



app.get('/api/coffees', async(req,res)=>{
    try{
        const allCoffees = await Coffee.find().sort({sequence:1})
        res.json(allCoffees)
    }catch(err){
        console.log(err)
    }
})

app.post('/api/teas/create-price', async(req,res)=>{
    try{
        await TeaPrice.create({
            price: req.body.price
        })
        console.log(`
            Added to Database: 
             - Tea Price: ${req.body.price}`)
        res.json(`
            Added to Database: 
             - Tea Price: ${req.body.price}`)        
    }catch(err){
        console.log(err)
    }
})

app.put('/api/teas/update-price', async(req,res)=>{
    try{
        const currentTeaPrice = await TeaPrice.findOne()
        await TeaPrice.findByIdAndUpdate({_id:currentTeaPrice._id},{
            price: req.body.price
        })
        console.log(`
            Updated in Database: 
             - New Tea Price: ${req.body.price}`)
        res.json(`
            Updated in Database: 
             - New Tea Price: ${req.body.price}`)        
    }catch(err){
        console.log(err)
    }
})


app.get('/api/teas/price', async(req,res)=>{
    try{
        const teaPrice = await TeaPrice.findOne()
        if (teaPrice){
            res.json(teaPrice.price)
        }else{
            res.json('')
        } 
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

app.put('/api/sangria/:id', async(req,res)=>{
    try{
        await Sangria.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            description: req.body.description,
            glassPrice: req.body.glassPrice,
            pitcherPrice: req.body.pitcherPrice,
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

app.put('/api/drinks/:id', async(req,res)=>{
    try{
        await CraftDrink.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
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

app.put('/api/spirits/:id', async(req,res)=>{
    try{
        await Spirit.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            price: req.body.price,
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

app.put('/api/beer/:id', async(req,res)=>{
    try{
        await Beer.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
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

app.put('/api/non-alcoholic-drinks/:id', async(req,res)=>{
    try{
        await NonAlcoholicDrink.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
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

app.put('/api/sherries/:id', async(req,res)=>{
    try{
        await Sherry.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
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

app.put('/api/sparkling/:id', async(req,res)=>{
    try{
        await Sparkling.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
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

app.put('/api/white/:id', async(req,res)=>{
    try{
        await White.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price,
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

app.put('/api/red/:id', async(req,res)=>{
    try{
        await Red.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price,
            halfBottlePrice: req.body.halfBottlePrice,
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

app.put('/api/rose/:id', async(req,res)=>{
    try{
        await Rosé.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
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

app.put('/api/wines-btg/:id', async(req,res)=>{
    try{
        console.log(`req.body: ${req.body}`)
        await WineBTG.findByIdAndUpdate({_id:req.params.id},{
            grapes: req.body.grapes,
            name: req.body.name,
            vintage: req.body.vintage,
            description: req.body.description,
            price: req.body.price
        })
        console.log(`
            Updated to Database:
             - ${req.body.name}
            `)
        res.json(`
            Updated to Database:
             - ${req.body.name}
            `)
    }catch(err){
        console.log(err)
    }
})
app.put('/api/dinner-menu-items/:id', async(req,res)=>{
    try{
        await DinnerMenuItem.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name,
            allergiesAbbreviated: req.body.allergiesAbbreviated,
            allergiesComplete: req.body.allergiesComplete,
            descriptionIntro: req.body.descriptionIntro,
            description: req.body.description,
            postDescription: req.body.postDescription,
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

app.get('/api/tasting-menu-prices', async(req,res)=>{ 
    try{
        let currentPrices = await TastingMenuPricing.find()
        console.log('currentPrices = '+ currentPrices)
        if (currentPrices.length == 0){
            await TastingMenuPricing.create({
                tastingMenuPrice: 0,
                winePairingPrice: 0,
            })
            currentPrices = await TastingMenuPricing.find()
        }        
        console.log(currentPrices)
        res.json(currentPrices)
    }catch(err){
        console.log(err)
    }
})

app.put('/api/tasting-menu-prices/update', async(req,res)=>{
    try{
        let currentPrices = await TastingMenuPricing.find()
        await TastingMenuPricing.findByIdAndUpdate({_id:currentPrices[0]._id},{
                                                        tastingMenuPrice: req.body.tastingMenuPrice 
                                                                            ? req.body.tastingMenuPrice 
                                                                            : currentPrices[0].tastingMenuPrice,
                                                        winePairingPrice: req.body.winePairingPrice
                                                                            ? req.body.winePairingPrice
                                                                            : currentPrices[0].winePairingPrice
        })
        currentPrices = await TastingMenuPricing.find()
        res.json(currentPrices)
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

app.put('/api/dessert-drinks/:id', async(req,res)=>{
    try{
        await DessertDrink.findByIdAndUpdate({_id:req.params.id},{
            name: req.body.name.trim(),
            
            postDescription: req.body.postDescription.trim(),
            preDescription: req.body.preDescription.trim(),
            price: req.body.price.trim()
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

app.put('/api/teas/:id', async(req,res)=>{
    try{
        await Tea.findByIdAndUpdate({_id:req.params.id},{
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

app.get('/api/formats/desserts', async(req,res)=>{ 
    try{
        let allFormats = await DessertsFormat.find()
        if (allFormats.length == 0){
            await DessertsFormat.create({
                pageMarginRight: 0,
                pageMarginRightBack: 0,
                dessertItemMarginsTopBottom: 0,
                categoriesMarginTop: 0
            })
            allFormats = await DessertsFormat.find()
        }
        console.log(allFormats)
        res.json(allFormats)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/formats/dinner', async(req,res)=>{ 
    try{
        let allFormats = await DinnerFormat.find()
        if (allFormats.length == 0){
            await DinnerFormat.create({
                pageMargin: 0,
                dinnerItemMarginsTopBottom: 0,
                dinnerItemMarginsLeftRight: 0
            })
            allFormats = await DinnerFormat.find()
        }
        console.log(allFormats)
        res.json(allFormats)
    }catch(err){
        console.log(err)
    }
})

app.get('/api/formats/takeout', async(req,res)=>{ 
    try{
        let allFormats = await TakeoutFormat.find()
        if (allFormats.length == 0){
            await TakeoutFormat.create({
                pageMargin: 0,
                takeoutItemMarginsTopBottom: 0,
                takeoutItemMarginsLeftRight: 0
            })
            allFormats = await TakeoutFormat.find()
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

app.put('/api/formats/dinner/decreasePageMargin', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMargin: allFormats[0].pageMargin - 1})
        res.json('page margin decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/dinner/increasePageMargin', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMargin: allFormats[0].pageMargin + 1})
        res.json('page margin increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/decreasePageMargin', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMargin: allFormats[0].pageMargin - 1})
        res.json('takeout page margin decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/increasePageMargin', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMargin: allFormats[0].pageMargin + 1})
        res.json('takeout page margin increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/desserts/decreasePageMarginRightBack', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMarginRightBack: allFormats[0].pageMarginRightBack - 1})
        res.json('page margin back decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/desserts/increasePageMarginRight', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMarginRight: allFormats[0].pageMarginRight + 1})
        res.json('page margin increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/desserts/increasePageMarginRightBack', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {pageMarginRightBack: allFormats[0].pageMarginRightBack + 1})
        res.json('page margin back increased')
    }catch(err){
        console.log(err)
    }
})


app.put('/api/formats/desserts/decreaseDessertItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dessertItemMarginsTopBottom: allFormats[0].dessertItemMarginsTopBottom - 1})
        res.json('dessert item margins decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/dinner/decreaseDinnerItemMarginsLeftRight', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dinnerItemMarginsLeftRight: allFormats[0].dinnerItemMarginsLeftRight - 1})
        res.json('dinner item margins left/right decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/dinner/increaseDinnerItemMarginsLeftRight', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dinnerItemMarginsLeftRight: allFormats[0].dinnerItemMarginsLeftRight + 1})
        res.json('dinner item margins left/right increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/dinner/decreaseDinnerItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dinnerItemMarginsTopBottom: allFormats[0].dinnerItemMarginsTopBottom - 1})
        res.json('dinner item margins top/bottom decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/dinner/increaseDinnerItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await DinnerFormat.find()
        console.log(allFormats[0])
        await DinnerFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dinnerItemMarginsTopBottom: allFormats[0].dinnerItemMarginsTopBottom + 1})
        res.json('dinner item margins top/bottom increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/decreaseTakeoutItemMarginsLeftRight', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {takeoutItemMarginsLeftRight: allFormats[0].takeoutItemMarginsLeftRight - 1})
        res.json('takeout item margins left/right decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/increaseTakeoutItemMarginsLeftRight', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {takeoutItemMarginsLeftRight: allFormats[0].takeoutItemMarginsLeftRight + 1})
        res.json('takeout item margins left/right increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/decreaseTakeoutItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {takeoutItemMarginsTopBottom: allFormats[0].takeoutItemMarginsTopBottom - 1})
        res.json('takeout item margins top/bottom decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/takeout/increaseTakeoutItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await TakeoutFormat.find()
        console.log(allFormats[0])
        await TakeoutFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {takeoutItemMarginsTopBottom: allFormats[0].takeoutItemMarginsTopBottom + 1})
        res.json('takeout item margins top/bottom increased')
    }catch(err){
        console.log(err)
    }
})


app.put('/api/formats/desserts/decreaseCategoriesMarginTop', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {categoriesMarginTop: allFormats[0].categoriesMarginTop - 1})
        res.json('dessert drinks categories margin top decreased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/desserts/increaseCategoriesMarginTop', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {categoriesMarginTop: allFormats[0].categoriesMarginTop + 1})
        res.json('dessert drinks categories margin top increased')
    }catch(err){
        console.log(err)
    }
})

app.put('/api/formats/desserts/increaseDessertItemMarginsTopBottom', async(req,res)=>{
    try{
        const allFormats = await DessertsFormat.find()
        console.log(allFormats[0])
        await DessertsFormat.findByIdAndUpdate( allFormats[0]._id,
                                                {dessertItemMarginsTopBottom: allFormats[0].dessertItemMarginsTopBottom + 1})
        res.json('dessert item margins increased')
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
