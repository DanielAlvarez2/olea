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



export default function CommencementPrint(){

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
    const event = "Commencement"
    const event_url = 'commencement'
    const event_obj = 'Commencement'

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
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>commencement &gt; print</div>
                    <div className='main-menu' style={{paddingBottom:0}}>






                                
                            
                            <br className='no-print'/>                        
                            <div style={{   
                                            // border:'1px solid green',
                                            textAlign:'center',
                                            display:'grid',
                                            placeContent:'center',
                                            width:'100%'}}>
                                <div    className='no-print print-btn' 
                                        style={{marginTop:'10px'}}
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div>
                            <br className='no-print'/>


















                                <div    className='dinner-menu-format' 
                                        style={{padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                // backgroundImage:"url('/scan-graduation.jpg')",
                                                backgroundSize:'8.5in',
                                                // color:'red'
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${itemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />



                                        <div style={{marginTop:'28px',padding:`0 ${itemMarginsLeftRight}px`}}>
                                            <h2 style={{fontSize:'20.3px'}}>congratulations class of {new Date().getFullYear()}!</h2>
                                            {/* <br/> */}
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'20px',fontWeight:'900'}}>${annualEventPrice} per person; three courses</span>
                                                <br/>
                                                <span style={{fontSize:'15.1px'}}>(tax, gratuity and beverages are not included)</span>
                                            </div>
                                        </div>

                                        <br/>

                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >












                                                <h2 style={{padding:`0 ${itemMarginsLeftRight}px`}}>appetizers <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >

                                                <h2 style={{padding:`0 ${itemMarginsLeftRight}px`}}>entrées <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'45px',
                                                    padding:`0 ${itemMarginsLeftRight}px`}}
                                    >

                                                <h2>desserts <span>choose one</span></h2>
                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,
                                                        width:'50%'}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer' style={{marginTop:'40px'}}>

                                        <div style={{display:'flex',justifyContent:'space-between',padding:`0 ${itemMarginsLeftRight}px`}}>
                                            <div className='chef-name'>manuel romero, chef</div>
                                            <div className='allergy-explanations'>(gl) gluten, (n) nuts, (d) dairy</div>
                                        </div>

                                        <hr/>
                                        <br/>
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        padding:`0 ${itemMarginsLeftRight}px`,
                                                        alignItems:'center'}}>

                                            
                                            
                                            <div style={{}}>
                                                <span style={{fontWeight:'100',fontSize:'13.2px'}}>
                                                    
                                                    consumer advisory: consumption of undercooked meat, poultry,  
                                                    <br/>
                                                    eggs, or seafood may increase the risk of food-borne illnesses.
                                                </span><br/>

                                                
                                                <span style={{fontWeight:'900',fontSize:'13px'}}>
                                                    please alert your server if you have special dietary requirements.
                                                </span>                                                
                                            </div>

                                            <img    src='/qr-mothers-day.jpg' 
                                                    className='qr'
                                                    height='60px' />

                                        </div>
                                    </div>     
                                                               
                                </div>



                    </div>

                                                       


            </div>{/* .manager-page-wrapper */}
        </>
    )
}