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



export default function ParentsWeekendFormatPrint(){

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
    const event = "Parents Weekend"
    const event_url = 'parents-weekend'
    const event_obj = 'ParentsWeekend'

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
            fetch(`${BASE_URL}/api/formats/${event_url}`)
                .then(res=>res.json())
                .then(json=>{
                    // setFormatting(json[0])
                    // setPageMargin(json[0].pageMargin)
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
        fetch(`${BASE_URL}/api/formats/decreaseItemMarginsLeftRight/${event_url}`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function increaseItemMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/increaseItemMarginsLeftRight/${event_url}`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseItemMarginsTopBottom(){
        if (itemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/decreaseItemMarginsTopBottom/${event_url}`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function increaseItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/increaseItemMarginsTopBottom/${event_url}`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
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
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                <div style={{width:'100%'}} className='no-print'>
                    <ManagerNavbar page='events' />
                </div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>parents weekend &gt; format/print</div>
                    
                    <br className='no-print'/>

                    <div className='main-menu' style={{paddingBottom:0,display:'flex',alignItems:'center'}}>






                                










                                    









                                <div    className='dinner-menu-format paper-menu' 
                                        style={{
                                                width:'8.5in',
                                                height:'14in',
                                                padding:'27px 65px',
                                                // color:'red',
                                                // padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                // backgroundImage:"url('/parents-weekend-scan.jpg')",
                                                backgroundSize:'8.5in',
                                                // color:'red'
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        // padding:`0 ${itemMarginsLeftRight}px`,
                                                        paddingLeft:'0px',
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>

                                        <div style={{borderTop:'1px solid black',margin:'5px 0'}}></div>
{/* <hr style={{borderTop:'1px solid grey !important'}} /> */}
                                        <div style={{marginTop:'28px',
                                            // padding:`0 ${itemMarginsLeftRight}px`
                                            }}>
                                            <h2 style={{fontSize:'23px'}}>prix fixe dinner menu</h2>
                                            {/* <br/> */}
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>${annualEventPrice} per person; three courses</span>
                                                <br />
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'30px'}}>(tax, gratuity and beverages are not included)</span>
                                            </div>
                                        </div>


                                        <div className='dessert-menu-front-content'
                                                style={{padding:`10px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >












                                                <h2 style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px'}}>appetizers <span style={{marginLeft:'5px'}}>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >

                                                <h2 style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px'}}>entrées <span style={{marginLeft:'5px'}}>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'0px',
                                                    // padding:`0 ${itemMarginsLeftRight}px`
                                                }}
                                    >

                                                <h2 style={{fontSize:'22.2px'}}>desserts <span style={{marginLeft:'5px'}}>choose one</span></h2>
                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom/2}px 0`,
                                                        width:'50%'}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer' style={{marginTop:'20px'}}>

                                        <div style={{   display:'flex',
                                                        alignItems:'flex-end',
                                                        justifyContent:'space-between',
                                                        //  padding:`0 ${itemMarginsLeftRight}px`
                                                        }}>
                                            <div style={{fontFamily:'FuturaMedium',fontSize:'17.5px'}}>manuel romero, chef</div>
                                            <div style={{fontFamily:'MinionBoldItalic'}}>
                                                dairy (d), nuts (n), gluten (gl)

                                            </div>
                                        </div>

                                        <div style={{borderTop:'1px solid black',margin:'5px 0'}}></div>
                                        {/* <hr style={{marginTop:'5px',marginBottom:'5px'}}/> */}
                                        {/* <br/> */}
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        // padding:`0 ${itemMarginsLeftRight}px`,
                                                        alignItems:'center'}}>

                                            
                                            
                                            <div style={{lineHeight:'15px',fontSize:'11.5px'}}>
                                                <span style={{fontWeight:'100'}}>    
                                                    consumer advisory: consumption of undercooked meat, poultry, eggs, or seafood may increase the risk of food-borne illnesses.
                                                </span>
                                                <br/>

                                                
                                                <span style={{fontFamily:'FuturaMedium'}}>
                                                    please alert your server if you have special dietary requirements before ordering: gl (gluten), d (dairy), n (nuts)
                                                </span>                                              
                                                <br/>

                                                <span style={{fontWeight:'100'}}>    
                                                    all menu items are subject to change according to seasonality and avilability
                                                </span>
                                                <br/>

                                                <span style={{fontWeight:'100'}}>    
                                                    to help us serve you better, we limit check spilitting to a maximum of three per table, thank you.
                                                </span>
                                                <br/>

                                            </div>

                                                <img    src='/qr-family-weekend.jpg' 
                                                    className='qr'
                                                    style={{marginLeft:'10px'}}
                                                    height='60px' />


                                        </div>
                                    </div>     
                                                               
                                </div>



                    

                                <div className='no-print' style={{paddingLeft:'10px'}}>
                                                                  
                                    <div  className='no-print'
                                          style={{   textAlign:'center',
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

                                    <div  className='no-print'
                                          style={{   textAlign:'center',
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

                                    <div    className='no-print print-btn' 
                                        style={{margin:'30px auto',background:'limegreen',width:'220px'}}
                                        onClick={printPage}>
                                        print
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