import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import './MothersDayFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function MothersDayPrint(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [mothersDayFormatting, setMothersDayFormatting] = useState([])
    const [mothersDayPageMargin, setMothersDayPageMargin] = useState(0)
    const [mothersDayItemMarginsTopBottom, setMothersDayItemMarginsTopBottom] = useState(0)
    const [mothersDayItemMarginsLeftRight, setMothersDayItemMarginsLeftRight] = useState(0)

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
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>
                        menu manager
                    </div>
                    
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>
                        mother's day &gt; print
                    </div>
                    
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
                                        style={{padding:`${mothersDayPageMargin/2}px ${mothersDayPageMargin}px 0px`,
                                                // backgroundImage:"url('/scan-mothers-day.png')",
                                                backgroundSize:'8.5in',
                                                // color:'red'
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />



                                        <div style={{marginTop:'28px',padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>
                                            <h2 style={{fontSize:'29px'}}>happy mother's day!</h2>
                                            <br/>
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'20px',fontWeight:'900'}}>${annualEventPrice} per person; three courses</span>
                                                <br/>
                                                <span style={{fontSize:'15px'}}>(excludes beverages, tax, and gratuity)</span>
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












                                                <h2 style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>appetizers <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        margin:`${mothersDayItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
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

                                                <h2 style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>entrées <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'83px',
                                                    padding:`0 ${mothersDayItemMarginsLeftRight}px`}}
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
                                                style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                        width:'50%'}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer' style={{marginTop:'40px'}}>

                                        <div style={{display:'flex',justifyContent:'space-between',padding:`0 ${mothersDayItemMarginsLeftRight}px`}}>
                                            <div className='chef-name'>manuel romero, chef</div>
                                            <div className='allergy-explanations'>(gl) gluten, (n) nuts, (d) dairy</div>
                                        </div>

                                        <hr/>
                                        <br/>
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        padding:`0 ${mothersDayItemMarginsLeftRight}px`,
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

                                                       
                                    <br className='no-print'/>
                                    <br className='no-print'/>
                                    


            </div>{/* .manager-page-wrapper */}
        </>
    )
}