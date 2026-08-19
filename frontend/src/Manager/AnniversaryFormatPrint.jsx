import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import './MothersDayFormat.css'
import './CommencementFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";



export default function AnniversaryFormatPrint(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [formatting, setFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    const [itemMarginsTopBottom, setItemMarginsTopBottom] = useState(0)
    const [itemMarginsLeftRight, setItemMarginsLeftRight] = useState(0)

    useEffect(()=>getFormatting())
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getAnnualEventsMenuItems(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    // const event = "Mother's Day"
    const event = "Olea Anniversary"
    const event_url = 'olea-anniversary'
    const event_obj = 'OleaAnniversary'

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0][event_obj]))
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
    
    function getFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/commencement`)
                .then(res=>res.json())
                .then(json=>{
                    setFormatting(json[0])
                    setPageMargin(json[0].pageMargin)
                    setItemMarginsTopBottom(json[0].itemMarginsTopBottom)
                    setItemMarginsLeftRight(json[0].itemMarginsLeftRight)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseItemMarginsLeftRight(){
        if (itemMarginsLeftRight <= 0) return
        fetch(`${BASE_URL}/api/formats/commencement/decreaseItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function increaseItemMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/commencement/increaseItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseItemMarginsTopBottom(){
        if (itemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/commencement/decreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function increaseItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/commencement/increaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMargin(){
        if (pageMargin <= 25) return
        fetch(`${BASE_URL}/api/formats/commencement/decreasePageMargin`,{method:'PUT'})
        .then(()=>getFormatting())
        .catch(err=>console.log(err))
    }

    
    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/commencement/increasePageMargin`,{method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }



    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                <div style={{width:'100%'}} className='no-print'>
                    <ManagerNavbar page='events' />
                </div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>{event.toLocaleLowerCase()} &gt; format / print</div>
                    
                    <div  className='main-menu' 
                          style={{paddingBottom:0,gap:'10px',display:'flex',flexDirection:'row-reverse',alignItems:'center'}}>






                                
                            <br className='no-print'/>









                            <div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseItemMarginsLeftRight} /></span>
                                        <span>menu item margins<br/>left & right &#8596;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseItemMarginsLeftRight} /></span>
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
                            </div>
                                    









                                <div    className='dinner-menu-format paper-menu anniversary-paper-menu' 
                                        style={{padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                // backgroundImage:"url('/scan-anniversary.jpg')",
                                                backgroundSize:'5.5in',
                                                width:'5.5in',
                                                height:'8.5in',
                                                // color:'red'
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        marginTop:'10px',
                                                        marginBottom:'-10px',
                                                        padding:`0 ${itemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                        style={{
                                          // border:'1px solid red',
                                          marginBottom:'-20px'}}
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />


                                        <div style={{marginTop:'28px',marginBottom:'-15px',padding:`0 ${itemMarginsLeftRight}px`}}>
                                            <h2 style={{fontSize:'22px'}}>{new Date().getFullYear() - 2014} Year Anniversary Specials <span style={{fontSize:'30px'}}>🥂</span></h2>
                                            {/* <br/> */}
                                        </div>

                                        <br/>

                                        <div 
                                        // className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    
                                            // id='dinner-menu-left'
                                                    // style={{width:'50%'}}        
                                            >












                                <h3 style={{padding:`0 ${itemMarginsLeftRight}px`}}>appetizers</h3>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name-anniversary'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated-anniversary'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && <span className='description-intro-anniversary'> {data.descriptionIntro};</span>}
                                                <span className='description-anniversary'> {data.description}</span>
                                                {data.price.includes('/') ? <div className='price-anniversary'> {data.price}</div>
                                                                          : <span className='price-anniversary'> {data.price}</span>
                                                
                                                }
                                                
                                                
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}














                                <h3 style={{padding:`0 ${itemMarginsLeftRight}px`}}>entrées</h3>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name-anniversary'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated-anniversary'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && <span className='description-intro-anniversary'> {data.descriptionIntro};</span>}
                                                <span className='description-anniversary'> {data.description}</span>
                                                <span className='price-anniversary'> {data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )

                                })}














                                <h3 style={{padding:`0 ${itemMarginsLeftRight}px`}}>dessert</h3>
                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name-anniversary'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated-anniversary'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && <span className='description-intro-anniversary'> {data.descriptionIntro};</span>}
                                                <span className='description-anniversary'> {data.description}</span>
                                                <span className='price-anniversary'> {data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )

                                })}












                                            </div>






































                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



















                                    <div className='dessert-footer-anniversary' 
                                    style={{marginTop:'15px'}}
                                    >

                                        <div style={{display:'flex',justifyContent:'space-between',padding:`0 ${itemMarginsLeftRight}px`}}>
                                            <div className='chef-name-anniversary'>Manuel Romero, chef</div>
                                            <div className='allergy-explanations'>(gl) gluten, (n) nuts, (d) dairy</div>
                                        </div>

                                        <hr/>
                                        
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        padding:`0 ${itemMarginsLeftRight}px`,
                                                        alignItems:'center'}}>

                                            
                                            
                                            <div style={{}}>
                                                <span className='legal-anniversary' style={{fontWeight:'100'}}>
                                                    
                                                    Consumer advisory: consumption of undercooked meat, poultry,  
                                                    
                                                    eggs, or seafood may increase the risk of foo
                                                    Please alert your server if you have special dietary requirements.
                                                </span>                                                
                                            </div>

                                            <img    src='/qr-anniversary.jpg' 
                                                    className='qr'
                                                    // style={{border:'3px solid red'}}
                                                    height='60px' />

                                        </div>
                                    </div>     
                                                               
                                </div>



                    </div>

                                                       
                                    


                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>


            </div>{/* .manager-page-wrapper */}
        </>
    )
}