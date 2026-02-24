import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './WineListFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function WineListFormat(){

    const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([])
    const [beer, setBeer] = useState([])
    const [sherries, setSherries] = useState([])
    const [drinks, setDrinks] = useState([])
    const [sangrias, setSangrias] = useState([])
    const [winesBTG, setWinesBTG] = useState([])
    const [sparkling, setSparkling] = useState([])
    const [rosé, setRosé] = useState([])
    const [white, setWhite] = useState([])
    const [whiteCategories, setWhiteCategories] = useState([])
    const [red, setRed] = useState([])
    const [redCategories, setRedCategories] = useState([])
    const [spirits, setSpirits] = useState([])
    const [spiritCategories, setSpiritCategories] = useState([])

    const [frontView, setFrontView] = useState(true)
    const [page1, setPage1] =useState(true)
    const [allDesserts, setAllDesserts] = useState([])
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [dessertDrinkCategories, setDessertDrinkCategories] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [lastCoffeeSequenceLine1, setLastCoffeeSequenceLine1] = useState(1)
    const [dessertsFormatting, setDessertsFormatting] = useState([])
    const [pageMarginRight, setPageMarginRight] = useState(0)
    const [pageMarginRightBack, setPageMarginRightBack] = useState(0)
    const [categoriesMarginTop, setCategoriesMarginTop] = useState(0)
    const [dessertItemMarginsTopBottom, setDessertItemMarginsTopBottom] = useState(0)
    useEffect(()=>{ 
                getDessertsFormatting()
                getDesserts()
                getDessertDrinks()
                getDessertDrinkCategories()
                getTeaPrice()
                getTeas()
                getCoffees()

                getWinesBTG()
                getSparkling()
                getRosé()
                getWhite()
                getWhiteCategories()
                getRed()
                getRedCategories()
                getSpirits()
                getSpiritCategories()
                getSangrias()
                getNonAlcoholicDrinks()
                getBeer()
                getDrinks()
                getSherries()
    },[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getSherries(){
        fetch(`${BASE_URL}/api/sherries`)
            .then(res=>res.json())
            .then(json=>setSherries(json))
            .catch(err=>console.log(err))
    }

    function getDrinks(){
        try{
            fetch(`${BASE_URL}/api/drinks`)
                .then(res=>res.json())
                .then(json=>setDrinks(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getBeer(){
        fetch(`${BASE_URL}/api/beer`)
            .then(res=>res.json())
            .then(json=>setBeer(json))
            .catch(err=>console.log(err))
    }

    function getNonAlcoholicDrinks(){
        fetch(`${BASE_URL}/api/non-alcoholic-drinks`)
            .then(res=>res.json())
            .then(json=>setNonAlcoholicDrinks(json))
            .catch(err=>console.log(err))
    }

    function getSangrias(){
        try{
            fetch(`${BASE_URL}/api/sangria`)
                .then(res=>res.json())
                .then(json=>setSangrias(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getRed(){
        try{
            fetch(`${BASE_URL}/api/red`)
                .then(res=>res.json())
                .then(json=>{
                    setRed(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getRedCategories(){
        try{
            fetch(`${BASE_URL}/api/red-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let redCategories = new Set()
                    json.forEach(wine=>redCategories.add(wine.category))
                    setRedCategories([...redCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getWhite(){
        try{
            fetch(`${BASE_URL}/api/white`)
                .then(res=>res.json())
                .then(json=>{
                    setWhite(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getWhiteCategories(){
        try{
            fetch(`${BASE_URL}/api/white-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let whiteCategories = new Set()
                    json.forEach(drink=>whiteCategories.add(drink.category))
                    setWhiteCategories([...whiteCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
                    
    function getSpirits(){
        try{
            fetch(`${BASE_URL}/api/spirits`)
                .then(res=>res.json())
                .then(json=>{
                    setSpirits(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getSpiritCategories(){
        try{
            fetch(`${BASE_URL}/api/spirit-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let spiritCategories = new Set()
                    json.forEach(drink=>spiritCategories.add(drink.category))
                    setSpiritCategories([...spiritCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }



    function getRosé(){
        fetch(`${BASE_URL}/api/rose`)
            .then(res=>res.json())
            .then(json=>setRosé(json))
            .catch(err=>console.log(err))
    }

    function getSparkling(){
        fetch(`${BASE_URL}/api/sparkling`)
            .then(res=>res.json())
            .then(json=>setSparkling(json))
            .catch(err=>console.log(err))
    }

    function getWinesBTG(){
        fetch(`${BASE_URL}/api/wines-btg`)
            .then(res=>res.json())
            .then(json=>setWinesBTG(json))
            .catch(err=>console.log(err))
    }


    function getDessertDrinks(){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDessertDrinks(json)
                    // console.log(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getDessertDrinkCategories(){
        try{
            fetch(`${BASE_URL}/api/dessert-drink-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let dessertDrinkCategories = new Set()
                    json.forEach(drink=>dessertDrinkCategories.add(drink.category))
                    setDessertDrinkCategories([...dessertDrinkCategories])
                    // console.log([...dessertDrinkCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function getDessertsFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/desserts`)
                .then(res=>res.json())
                .then(json=>{
                    setDessertsFormatting(json[0])
                    setPageMarginRight(json[0].pageMarginRight)
                    setPageMarginRightBack(json[0].pageMarginRightBack)
                    setCategoriesMarginTop(json[0].categoriesMarginTop)
                    setDessertItemMarginsTopBottom(json[0].dessertItemMarginsTopBottom)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getTeas(){
        try{
            fetch(`${BASE_URL}/api/teas`)
                .then(res=>res.json())
                .then(json=>setAllTeas(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getCoffees(){
        try{
            let coffeeArray = []
            let line1 = []
            let line2 = []
            let midpoint
            let finalCoffeeSequenceLine1
            let midpointCoffeeCharsLine1 = []
            let midpointCoffeeCharsLine2 = []
            fetch(`${BASE_URL}/api/coffees`)
                .then(res=>res.json())
                .then(json=>{
                    setAllCoffees(json)
                    json.forEach(coffee=>{
                                    const coffeeName = coffee.name.split('')
                                    const coffeePrice = coffee.price.split('')
                                    for (let i=0;i<coffeeName.length;i++){
                                        coffeeArray.push(coffee.sequence)
                                    }
                                    for (let i=0;i<coffeePrice.length;i++){
                                        coffeeArray.push(coffee.sequence)
                                    }
                                })
                    midpoint = Math.floor(coffeeArray.length/2)
                    finalCoffeeSequenceLine1 = coffeeArray[midpoint]
                    for (let i=0;i<=midpoint;i++){
                        line1.push(coffeeArray[i])
                    }
                    for (let i=midpoint+1;i<coffeeArray.length;i++){
                        line2.push(coffeeArray[i])
                    }
                    for(let i=0;i<line1.length;i++){
                        if (line1[i] == finalCoffeeSequenceLine1) midpointCoffeeCharsLine1.push(finalCoffeeSequenceLine1)
                    }
                    for(let i=0;i<line2.length;i++){
                        if (line2[i] == finalCoffeeSequenceLine1) midpointCoffeeCharsLine2.push(finalCoffeeSequenceLine1)
                    }
                    
                    if(midpointCoffeeCharsLine1 < midpointCoffeeCharsLine2) finalCoffeeSequenceLine1 = finalCoffeeSequenceLine1 - 1
                    setLastCoffeeSequenceLine1(finalCoffeeSequenceLine1)
                    })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    function getTeaPrice(){
        fetch(`${BASE_URL}/api/teas/price`)
            .then(res=>res.json())
            .then(json=>setTeaPrice(json))
            .catch(err=>console.log(err))
    }

    function getDesserts(){
        try{
            fetch(`${BASE_URL}/api/desserts`)
                .then(res=>res.json())
                .then(json=>setAllDesserts(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseDessertItemMarginsTopBottom(){
        if (dessertItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreaseDessertItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseCategoriesMarginTop(){
        if (categoriesMarginTop <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreaseCategoriesMarginTop`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increaseCategoriesMarginTop(){
        fetch(`${BASE_URL}/api/formats/desserts/increaseCategoriesMarginTop`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increaseDessertItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/desserts/increaseDessertItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMarginRight(){
        if (pageMarginRight <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreasePageMarginRight`,{method:'PUT'})
        .then(()=>getDessertsFormatting())
        .catch(err=>console.log(err))
    }

    function decreasePageMarginRightBack(){
        if (pageMarginRightBack <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreasePageMarginRightBack`,{method:'PUT'})
        .then(()=>getDessertsFormatting())
        .catch(err=>console.log(err))
    }
    
    function increasePageMarginRight(){
        fetch(`${BASE_URL}/api/formats/desserts/increasePageMarginRight`,{method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increasePageMarginRightBack(){
        fetch(`${BASE_URL}/api/formats/desserts/increasePageMarginRightBack`,{method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }


    function toggleFrontView(){
        setFrontView(prev=>!prev)
    }

    function togglePage1(){
        setPage1(prev=>!prev)
    }

    return(
        <>
            <div    className='manager-page-wrapper' 
                    style={{border:'1px solid red',
                            // zoom:'0.75'
                            // color:'red'
                            }}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; format</div>
                    <div className='main-menu'>





                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            fontFamily:'FuturaLight',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span>page 1</span>
                                    {page1  ?   <span><FaToggleOff  style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={togglePage1}/></span> 
                                                
                                                : 
                                                    <span><FaToggleOn   style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={togglePage1}/></span>    
                                    }  
                                <span>page 2</span>
                            </div>

                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span>front</span>
                                    {frontView  ?   <span><FaToggleOff  style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFrontView}/></span> 
                                                
                                                : 
                                                    <span><FaToggleOn   style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFrontView}/></span>    
                                    }  
                                <span>back</span>
                            </div>

                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={frontView  ? decreaseDessertItemMarginsTopBottom
                                                                                        : decreaseCategoriesMarginTop
                                                                    } /></span>
                                        {
                                            frontView   ? <span>menu item margins<br/>top & bottom &#8597;</span>
                                                        : <span>categories<br/>margin top &#8593;</span>
                                        }
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={frontView  ? increaseDessertItemMarginsTopBottom
                                                                                        : increaseCategoriesMarginTop
                                                                    } /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={frontView ? decreasePageMarginRight : decreasePageMarginRightBack} /></span>
                                        <span>page margin: right &#8592;</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={frontView ? increasePageMarginRight : increasePageMarginRightBack} /></span>
                                    </div>
                                
                            <br/>
























                        {page1 ? 
                                <>
                            {frontView ?                            
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                border:'1px solid black',
                                                background:'white'}}>


                                    p1 front
                                    <div    className='specials-h1 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        wine by the glass
                                    </div>
                                   
                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Cava
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Cava').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        White
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'White').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Rosé
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Rosé').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Red
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Red').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}






















                            
                                    <div className='specials-h1' >cava & champagne</div>

                                    {sparkling.map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>
                                            </div>
                                        )
                                    })}












                                    <div className='specials-h1'>rosé</div>

                                    {rosé.map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>

                                            </div>
                                        )
                                    })}










                                    <div className='specials-h1'>white</div>


                                    {whiteCategories.map(x=>{
                                        return(
                                            <div key={x}>
                                                {x}
                                                {white.filter(item=>item.category == x).map(data=>{
                                                    return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>

                                            </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}

















                                    <div className='specials-h1'>red</div>


                                    {redCategories.map(x=>{
                                        return(
                                            <div key={x}>
                                                {x}
                                                {red.filter(item=>item.category == x).map(data=>{
                                                    return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>

                                            </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}












                                </div>
                            :
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                background:'white',
                                                border:'1px solid black'}} >
                                    p1 back<br/>
                                    

                                                                <div className='specials-h1' style={{marginBottom:'0'}}>sangría</div>
                                                               
                                    
                                                                {sangrias.map(data=>{
                                                                    return(
                                                                        <div key={data._id} className='special'>
                                                                            
                                                                        
                                                                            <span className='name'>{data.name} </span>
                                                                            <span> {data.description}</span> (glass/pitcher) {data.glassPrice} / {data.pitcherPrice}
                                                                            
                                                                                
                                                                        
                                                                        
                                                                        </div>
                                                                    )
                                                                })}
                                    
                                    















                            <div className='specials-h1' style={{marginBottom:'20px'}}>non-alcoholic drinks</div>
                           
                            {nonAlcoholicDrinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                        
                                    </div>
                                )
                            })}




















                        <div className='specials-h1' style={{marginBottom:'0'}}>beer</div>
                            

                        

                            {beer.filter(item=>item.section == 'DRAFT').length != 0 && 
                                <div className='specials-h2 specials-update-heading'>DRAFT</div>}
                            {beer.filter(item=>item.section == 'DRAFT').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 

                                    </div>
                                )
                            })}










                            {beer.filter(item=>item.section == 'CAN').length != 0 && 
                                <div className='specials-h2 specials-update-heading'>CAN</div>}
                            {beer.filter(item=>item.section == 'CAN').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 

                                    </div>
                                )
                            })}











                            {beer.filter(item=>item.section == 'BOTTLE').length != 0 && 
                                <div className='specials-h2 specials-update-heading'>BOTTLE</div>}
                            {beer.filter(item=>item.section == 'BOTTLE').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 

                                    </div>
                                )
                            })}





















                            <div className='specials-h1' style={{marginBottom:'0'}}>craft drinks</div>

                            {drinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                    
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span> / {data.price}
                                                                        

                                    </div>
                                )
                            })}




















                            <div className='specials-h1' style={{marginBottom:'20px'}}>
                                Jerez, Sanlúcar de Barrameda
                            </div>
                            
                            {sherries.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 

                                    </div>
                                )
                            })}







                                </div>
                            }
                                </>
                                :
                                <>
                                {
                            frontView ?                            
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                border:'1px solid black',
                                                background:'white'}}>


                                    p2 front<br/>
                                    

                                    {spiritCategories.map(x=>{
                                        return(
                                            <div key={x}>
                                                {x}
                                                {spirits.filter(item=>item.category == x).map(data=>{
                                                    return(
                                                        <div key={data.name}>
                                                            {data.name} / {data.price.toString().includes('.') ? data.price.toFixed(2) : data.price}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                    

                                </div>
                            :
                                <div style={{width:'14in',height:'8.5in',background:'white',border:'1px solid black'}}    
                                        
                                >
                                    p2 back<br/>
                                    amaro / beer-cocktails-wines-spirits
                                </div>
                                }
                                </>
                        }



                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}