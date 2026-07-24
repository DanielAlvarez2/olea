import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import DessertMenuPrintArea from './components/DessertMenuPrintArea.jsx'

import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function DessertMenuFormat(){

    const [frontView, setFrontView] = useState(true)
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
    },[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'


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

    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         // color:'red'
                    //         }}
            >
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; format</div>
                    <div className='main-menu' style={{paddingBottom:'0',display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>






<DessertMenuPrintArea 
                        frontView={frontView}
                        dessertItemMarginsTopBottom={dessertItemMarginsTopBottom}
                        pageMarginRight={pageMarginRight}
                        pageMarginRightBack={pageMarginRightBack}
                        categoriesMarginTop={categoriesMarginTop}
/>


<div>

                            <br className='no-print'/>
                                                  
                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            background:'#eee',
                                            padding:'0 10px',
                                            justifyContent:'center',
                                            // border:'1px solid green',
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
                                                    background:'#eee',
                                                    padding:'0 10px',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
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
                                                    background:'#eee',
                                                    padding:'0 10px',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={frontView ? decreasePageMarginRight : decreasePageMarginRightBack} /></span>
                                        <span>page margin: right &#8592;</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={frontView ? increasePageMarginRight : increasePageMarginRightBack} /></span>
                                    </div>
                                
                            <br className='no-print'/>
</div>


                    </div>



            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}