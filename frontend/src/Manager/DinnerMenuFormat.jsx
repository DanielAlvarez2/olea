import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function DinnerMenuFormat(){

    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
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
                getDinnerMenuItems()
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

    function getDinnerMenuItems(){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDinnerMenuItems(json)
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



    return(
        <>
            <div    className='manager-page-wrapper' 
                    style={{border:'1px solid red',
                            // color:'red'
                            }}>
                <ManagerNavbar page='dinner' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dinner &gt; format</div>
                    <div className='main-menu'>






                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseDessertItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseDessertItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreasePageMarginRight} /></span>
                                        <span>page margin: right</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increasePageMarginRight} /></span>
                                    </div>
                                
                            <br/>




                                <div    className='dinner-menu-format' 
                                        style={{width:'8.5in',
                                                background:'white',
                                                padding:'38px 50px',
                                                // backgroundImage:'url(scan-dinner-menu.jpg)',
                                                backgroundSize:'8.5in 14in',
                                                color:'red',
                                                height:'14in',
                                                border:'1px solid black'}} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        color:'red',
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:'37px'}} />







                                        <div className='dessert-menu-front-content'
                                                style={{paddingRight:`${pageMarginRight + 20}px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >

                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'cured meats').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.description && <br/>}
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}















                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                            </div>

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>












                                    <div className='dessert-footer'>
                                        <div className='dessert-menu-front-content'>
                                            jessica delgado, pastry chef
                                        </div>
                                        <hr style={{marginTop:'5px'}}/>
                                        <div className='dessert-menu-front-content'>
                                            please alert your server if you have any special dietary requirements<br/>
                                            <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                        </div>
                                    </div>
                                </div>



                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}