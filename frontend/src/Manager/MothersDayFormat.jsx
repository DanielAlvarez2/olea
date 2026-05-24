import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import './MothersDayFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";



export default function MothersDayFormat(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [dinnerFormatting, setDinnerFormatting] = useState([])
    const [mothersDayFormatting, setMothersDayFormatting] = useState([])
    const [mothersDayPageMargin, setMothersDayPageMargin] = useState(0)
    const [mothersDayItemMarginsTopBottom, setMothersDayItemMarginsTopBottom] = useState(0)
    const [mothersDayItemMarginsLeftRight, setMothersDayItemMarginsLeftRight] = useState(0)
    useEffect(()=>{ 
                getDinnerMenuItems()
    },[])
    useEffect(()=>getMothersDayFormatting())
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getAnnualEventsMenuItems(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    const event = "Mother's Day"

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0].MothersDay))
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

    function getAnnualEventsMenuItems(){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items`)
                .then(res=>res.json())
                .then(json=>setAllAnnualEventsMenuItems(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getMothersDayFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/mothers-day`)
                .then(res=>res.json())
                .then(json=>{
                    setMothersDayFormatting(json[0])
                    setMothersDayPageMargin(json[0].pageMargin)
                    setMothersDayItemMarginsTopBottom(json[0].mothersDayItemMarginsTopBottom)
                    setMothersDayItemMarginsLeftRight(json[0].mothersDayItemMarginsLeftRight)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseMothersDayItemMarginsLeftRight(){
        if (mothersDayItemMarginsLeftRight <= 0) return
        fetch(`${BASE_URL}/api/formats/mothers-day/decreaseItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getMothersDayFormatting())
            .catch(err=>console.log(err))
    }

    function increaseMothersDayItemMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/mothers-day/increaseItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getMothersDayFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseMothersDayItemMarginsTopBottom(){
        if (mothersDayItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/mothers-day/decreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getMothersDayFormatting())
            .catch(err=>console.log(err))
    }

    function increaseMothersDayItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/mothers-day/increaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getMothersDayFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMargin(){
        if (mothersDayPageMargin <= 25) return
        fetch(`${BASE_URL}/api/formats/mothers-day/decreasePageMargin`,{method:'PUT'})
        .then(()=>getMothersDayFormatting())
        .catch(err=>console.log(err))
    }

    
    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/mothers-day/increasePageMargin`,{method:'PUT'})
            .then(()=>getMothersDayFormatting())
            .catch(err=>console.log(err))
    }



    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>mother's day &gt; format</div>
                    <div className='main-menu'>






                                
                            <br/>



















                                <div    className='dinner-menu-format' 
                                        style={{padding:`${mothersDayPageMargin/2}px ${mothersDayPageMargin}px 0px`}} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} />



                                        <div style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>
                                            <h2>happy mother's day!</h2>

                                            <span>${annualEventPrice} per person; three courses</span>
                                            <br/>
                                            <span>(excludes beverages, tax, and gratuity)</span>
                                        </div>


                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >












                                                <h2 style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>appetizers <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                        </div>
                                    )
                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >

                                                <h2 style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>entrées <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   
                                                    padding:`0 ${mothersDayItemMarginsLeftRight}px`}}
                                    >

                                                <h2>desserts <span>choose one</span></h2>
                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,width:'50%'}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer'>
                                        
                                        
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                                            <div className='chef name' style={{textDecoration:'underline'}}>manuel romero, chef</div>
                                            
                                            <img src='qr-dinner.png' height='60px' />
                                            
                                            <div style={{width:'65%'}}>
                                                <span style={{fontWeight:'100'}}>
                                                    consumer advisory: consumption of undercooked meat, poultry, 
                                                    eggs, or seafood may increase the risk of food-borne illnesses<br/>
                                                    all menu items are subject to change according to seasonality and availability<br/>
                                                </span>
                                                
                                                please alert your server if you have special dietary requirements before ordering<br/>
                                                <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                            </div>
                                        </div>
                                    </div>                                </div>



                    </div>

                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseMothersDayItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseMothersDayItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseMothersDayItemMarginsLeftRight} /></span>
                                        <span>menu item margins<br/>left & right &#8596;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseMothersDayItemMarginsLeftRight} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreasePageMargin} /></span>
                                        <span>page margin</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increasePageMargin} /></span>
                                    </div>
                                    <br/><br/>


            </div>{/* .manager-page-wrapper */}
        </>
    )
}