import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertMenuPrint.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import DessertMenuPrintArea from './components/DessertMenuPrintArea.jsx'
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


export default function DessertMenuPrint(){

    const [front, setFront] = useState(true)    
    const [allDesserts, setAllDesserts] = useState([])
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [lastCoffeeSequenceLine1, setLastCoffeeSequenceLine1] = useState(1)
    const [dessertsFormatting, setDessertsFormatting] = useState([])
    const [pageMarginRight, setPageMarginRight] = useState(0)
    const [pageMarginRightBack, setPageMarginRightBack] = useState(0)
    const [dessertItemMarginsTopBottom, setDessertItemMarginsTopBottom] = useState(0)
    const [dessertDrinkCategories, setDessertDrinkCategories] = useState([])
    const [categoriesMarginTop, setCategoriesMarginTop] = useState(0)

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


    function toggleFront(){
        setFront(prev=>!prev)
    }


    function printPage(){
        if(navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")){
            alert(`
WARNING: 

Printing from Safari Browser is not supported.
Please switch to a different browser to proceed.
`)
            return
        }else{
            window.print()
        }
    }












    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red'}}
            >
                        <div style={{width:'100%'}} className='no-print'>
                            <ManagerNavbar page='dessert' />
                        </div>                                
                        <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>menu manager</div>
                        <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>dessert &gt; print</div>
                        <div className='main-menu' style={{paddingBottom:'0'}}>




                            <div style={{   
                                            textAlign:'center',
                                            display:'flex',
                                            flexDirection:'column',
                                            alignItems:'center',
                                            width:'100%'}}>

                            
                                <div>
                                    
                                    {                            
                                        <div    className='no-print' 
                                                style={{display:'flex',
                                                        gap:'10px',
                                                        alignItems:'center'}}>
                                            <span>front</span>
                                            <span>
                                                {front ? 
                                                                <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                                onClick={toggleFront} />
                                                : 
                                                                <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                                onClick={toggleFront} />
                                                }
                                            </span>
                                            <span>back</span>
                                        </div> 
                                    }
                                </div>  

                                <div    className='no-print print-btn' 
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div>

                            <br className='no-print'/>

<div style={{display:'flex'}}>
    <DessertMenuPrintArea 
                            frontView={front}
                            dessertItemMarginsTopBottom={dessertItemMarginsTopBottom}
                            pageMarginRight={pageMarginRight}
                            pageMarginRightBack={pageMarginRightBack}
                            categoriesMarginTop={categoriesMarginTop}
    />

    <DessertMenuPrintArea 
                            frontView={front}
                            dessertItemMarginsTopBottom={dessertItemMarginsTopBottom}
                            pageMarginRight={pageMarginRight}
                            pageMarginRightBack={pageMarginRightBack}
                            categoriesMarginTop={categoriesMarginTop}
    />
</div>
                            <br className='no-print'/>

                            <div style={{   
                                            textAlign:'center',
                                            display:'flex',
                                            flexDirection:'column',
                                            alignItems:'center',
                                            width:'100%'}}>

                            
                                <div>
                                    
                                    {                            
                                        <div    className='no-print' 
                                                style={{display:'flex',
                                                        gap:'10px',
                                                        alignItems:'center'}}>
                                            <span>front</span>
                                            <span>
                                                {front ? 
                                                                <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                                onClick={toggleFront} />
                                                : 
                                                                <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                                onClick={toggleFront} />
                                                }
                                            </span>
                                            <span>back</span>
                                        </div> 
                                    }
                                </div>  

                                <div    className='no-print print-btn' 
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div>

                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>






                        
                        </div>








                    <br className='no-print'/>
            </div>{/* .manager-page-wrapper */}
        </>
    )
}