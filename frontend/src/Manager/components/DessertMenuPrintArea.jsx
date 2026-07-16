import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import '../Manager.css'
import '../DessertMenuFormat.css'
import '../DessertDrinksUpdate.css'
// import ManagerNavbar from './components/ManagerNavbar.jsx'

import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function DessertMenuPrintArea({  frontView,
                                                dessertItemMarginsTopBottom,
                                                pageMarginRight,
                                                pageMarginRightBack,
                                                categoriesMarginTop
                                            }){

    // const [frontView, setFrontView] = useState(true)
    const [allDesserts, setAllDesserts] = useState([])
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [dessertDrinkCategories, setDessertDrinkCategories] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [lastCoffeeSequenceLine1, setLastCoffeeSequenceLine1] = useState(1)
    const [dessertsFormatting, setDessertsFormatting] = useState([])
    // const [pageMarginRight, setPageMarginRight] = useState(0)
    // const [pageMarginRightBack, setPageMarginRightBack] = useState(0)
    // const [categoriesMarginTop, setCategoriesMarginTop] = useState(0)
    // const [dessertItemMarginsTopBottom, setDessertItemMarginsTopBottom] = useState(0)
    useEffect(()=>{ 
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


    return(
        <>


                        {
                            frontView ?  
                            <>
                            
                                <div    className='dessert-menu-format-front'
                                        style={{width:'5.5in',
                                                position:'relative',
                                                height:'8.5in',
                                                border:'none',
                                                paddingLeft:'6mm',
                                                paddingRight:'6mm',
                                                paddingTop:'6mm',
                                                }} 
                                        // style={{backgroundImage:'url("scan-dessert-menu-front.jpg")',backgroundSize:'5.5in 8.5in'}}
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        lineHeight:'1',
                                                        display:'block',
                                                        paddingLeft:'0',
                                                        cursor:'default',
                                                        fontSize:'55px'}}>olea</span>
                                        
                                        <div style={{borderTop:'1px solid #888'}} />







                                        <div className='dessert-menu-front-content'
                                                style={{paddingRight:`${pageMarginRight + 0}px`,
                                                        paddingLeft:'0'}}
                                                // style={{paddingRight:'83px'}}
                                                >








                                            {allDesserts.map(data=>{
                                                return (
                                                    <div    key={data._id}
                                                            style={{margin:`${dessertItemMarginsTopBottom}px 0`}} 
                                                            className='dessert dessert-item'>
                                                        <span className='dessert-name-print'>{data.name}</span>
                                                        {data.allergiesAbbreviated &&   <span className='dessert-allergies-print'>
                                                                                            &nbsp;({data.allergiesAbbreviated})
                                                                                        </span>}
                                                        <span className='dessert-description-print'>&nbsp;{data.description}</span>
                                                        <span className='dessert-price-print'>&nbsp;{data.price}</span>
                                                        
                                                    </div>
                                                )
                                            })}
                                            
                                            <br/>
                                            
                                            
                                            {
                                                (allCoffees.length > 0) && <>
                                                    <div className='dessert-item'>                                    
                                                        <span className='dessert-menu-heading-print'>
                                                            coffee
                                                        </span>
                                                        &nbsp;
                                                        <span className='dessert-price-print' style={{fontStyle:'italic'}}>
                                                            (decaffeinated available)
                                                        </span><br/>


                                                                                    {allCoffees.map(data=>{
                                                                                        return(
                                                                                            <span key={data._id}>
                                                                                                {data.sequence <= lastCoffeeSequenceLine1 && 
                                                                                                
                                                                                                <span>
                                                                                                    <span className='dessert-description-print'>{data.name} </span> 
                                                                                                    <span className='dessert-price-print'>{data.price}</span> 
                                                                                                        {data.sequence != allCoffees.length
                                                                                                            && ' / '
                                                                                                        }
                                                                                                    
                                                                                                </span>
                                                                                                }
                                                                                            </span>
                                                                                        )
                                                                                    })}<br/>
                                                                                    {allCoffees.map(data=>{
                                                                                        return(
                                                                                            <span key={data._id}>
                                                                                                {data.sequence > lastCoffeeSequenceLine1 && 
                                                                                                
                                                                                                <span>
                                                                                                    <span className='dessert-description-print'>{data.name} </span> 
                                                                                                    <span className='dessert-price-print'>{data.price}</span> 
                                                                                                        {data.sequence != allCoffees.length
                                                                                                            && ' / '
                                                                                                        }
                                                                                                    
                                                                                                </span>
                                                                                                }
                                                                                            </span>
                                                                                        )
                                                                                    })}<br/>

                                                    </div>
                                                
                                                
                                                </> 
                                            }



                                            




                                            <br/>

                                            <div className='dessert-item'>                                    
                                                <span className='dessert-menu-heading-print'>
                                                    organic-artisan whole leaf tea
                                                </span>
                                                &nbsp;
                                                <span className='dessert-price-print' style={{fontStyle:'italic'}}>
                                                    (pouch)
                                                </span>
                                                <span className='dessert-price-print'>
                                                    {teaPrice ? ` ${teaPrice}` : ''}
                                                </span>

                                            
                                            
                                                <br/>
                                            
                                            
                                                
                                                <span   className='dessert-price-print'
                                                        style={{fontStyle:'normal'}}>
                                                    black &nbsp;
                                                </span>
                                                                            {allTeas.filter(item=>item.type == 'black').map(data=>{
                                                                                return(
                                                                                    <span key={data._id}>
                                                                                        <span className='dessert-description-print'>{data.name} 
                                                                                            {data.sequence != allTeas.filter(item=>item.type == 'black').length
                                                                                                && ', '
                                                                                            }
                                                                                        </span>
                                                                                    </span>
                                                                                )
                                                                            })}
                                                
                                                <br/>
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                <span   className='dessert-price-print'
                                                        style={{fontStyle:'normal'}}>
                                                    green &nbsp;
                                                </span>
                                                                            {allTeas.filter(item=>item.type == 'green').map(data=>{
                                                                                return(
                                                                                    <span key={data._id}>
                                                                                        <span className='dessert-description-print'>{data.name} 
                                                                                            {data.sequence != allTeas.filter(item=>item.type == 'green').length
                                                                                                && ', '
                                                                                            }
                                                                                        </span>
                                                                                    </span>
                                                                                )
                                                                            })}
                                            
                                            
                                            </div>                                    
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            <span className='dessert-price-print'>
                                                <span style={{fontStyle:'normal'}}>herbal</span>
                                                <span style={{fontStyle:'italic'}}> (caffeine free)</span>
                                                &nbsp;
                                            </span>
                                                                        {allTeas.filter(item=>item.type == 'herbal').map(data=>{
                                                                            return(
                                                                                <span key={data._id}>
                                                                                    <span className='dessert-description-print'>{data.name} 
                                                                                        {data.sequence != allTeas.filter(item=>item.type == 'herbal').length
                                                                                            && ', '
                                                                                        }
                                                                                    </span>
                                                                                </span>
                                                                            )
                                                                        })}
                                        
                                            <br/>










                                        </div>
                                    </div>












                                    <div className='dessert-footer-print' style={{position:'absolute',bottom:'6mm',width:'calc(5.5in - 12mm)'}}>
                                        <div className='dessert-menu-front-content' style={{paddingLeft:'0'}}>
                                            jessica delgado, pastry chef
                                        </div>
                                        <div style={{borderTop:'1px solid #888',marginTop:'3px'}} />
                                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>

                                                <div className='dessert-menu-front-content' style={{paddingLeft:'0'}}>
                                                    please alert your server if you have any special dietary requirements<br/>
                                                    <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                                </div>
                                                <img    src='qr-dessert.png' 
                                                        className='qr'
                                                        width='29px' 
                                                        height='29px' 
                                                />
                                            </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            
                                <div    className='dessert-menu-format-front' 
                                        style={{width:'5.5in',
                                                position:'relative',
                                                border:'none',
                                                height:'8.5in',
                                                paddingTop:'6mm',
                                                paddingLeft:'6mm',
                                                paddingRight:'6mm',
                                                
                                                }}
                                        // style={{backgroundImage:'url("scan-dessert-menu-back.jpg"),',color:'red',backgroundSize:'5.5in 8.5in'}}
                                        
                                >

                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        lineHeight:'1',
                                                        display:'block',
                                                        paddingLeft:'0',
                                                        cursor:'default',
                                                        fontSize:'55px'}}>olea</span>
                                        <div style={{borderTop:'1px solid #888'}} />







                                        <div className='dessert-menu-front-content'
                                                style={{paddingRight:`${pageMarginRightBack + 0}px`,
                                                        paddingLeft:'0'
                                                        // color:'red',
                                                        
                                                    }}
                                                // style={{paddingRight:'83px'}}
                                                >






                                            {dessertDrinkCategories.map(data=>{
                                                return (
                                                    <div key={data} style={{lineHeight:'1.4'}}>
                                                        {allDessertDrinks.map(drink=>{
                                                            return (
                                                                    <div key={drink._id}>
                                                                        {drink.category == data && 
                                                                            <div className='dessert-drinks-default-font-print'
                                                                            // style={{fontFamily:'serif'}}
                                                                            
                                                                            >
                                                                                {drink.sequence == 1 && <div style={{marginTop:categoriesMarginTop}} className='dessert-menu-heading-print'>{drink.category}</div>}
                                                                                <div style={{display:'flex',width:'100%',paddingRight:'2ch',gap:'10px',justifyContent:'space-between'}}>
                                                                                    <div className='dessert-drink-left'>
                                                                                        {drink.category == 'dessert cocktails' && 
                                                                                            <span style={{marginRight:'3px',fontSize:'10px',position:'relative',bottom:'1px'}}>&#9679;</span> 
                                                                                        }
                                                                                        {drink.preDescription && <span>{drink.preDescription} </span>}
                                                                                        <span className='dessert-drink-name-print' 
                                                                                        // style={{fontWeight:'900'}}
                                                                                        
                                                                                        >{drink.name} </span>
                                                                                        <span>{drink.postDescription}</span>                                                                                    
                                                                                    </div>                                                                                    
                                                                                    <div    className='dessert-drink-right dessert-price-print'
                                                                                            style={{textAlign:'left',
                                                                                                    // fontWeight:'900',
                                                                                                    width:'15px'}}
                                                                                    >
                                                                                        {drink.price}
                                                                                    </div>                                                                                    
                                                                                </div>
                                                                            </div>                                                                        
                                                                        }
                                                                    </div>

                                                                
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            










                                        </div>
                                    </div>












                                    <div className='dessert-footer' style={{position:'absolute',
                                                                            bottom:'6mm',
                                                                            left:'6mm'}}>
                                        <div style={{borderTop:'1px solid #888',width:'calc(5.5in - 12mm)'}} />
                                    </div>
                                </div>
                            
                            </>
                        }







            
        </>
    )
}