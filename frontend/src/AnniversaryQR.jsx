import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Menu.css'
import './MothersDay.css'
import './index.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";



export default function Commencement(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    


    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getAnnualEventsMenuItems(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

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



    function showModal(pic,name,description,allergiesComplete){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-description').innerHTML = description   
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete    
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal-allergies-complete').innerHTML = ''
    }






















    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >

                    <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
                                                    zIndex:'3000',
                                                    background:'#888888ee',
                                                    color:'black',
                                                    display:'none',
                                                    placeContent:'center'
                    }}>
                        <AiTwotoneCloseCircle   size='70' 
                                                onClick={closeModal}
                                                style={{position:'fixed',
                                                        cursor:'pointer',
                                                        top:'5px',
                                                        right:'5px'}} />
                        <div className='modal-content'>
                            <figure style={{display:'table'}}>
                                <img className='modal-image' style={{maxHeight:'50vh',maxWidth:'90vw',borderRadius:'25px'}} />
                                <figcaption style={{display:'table-caption',padding:'10px',captionSide:'bottom',borderRadius:'25px',background:'#ccc'}}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <span className='modal-name' style={{fontWeight:'900'}}></span>
                                    </div>
                                    <span className='modal-description'></span>
                                    <div className='modal-allergies-complete'></div>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

                    
                    <div className='main-menu-mothers-day' style={{paddingBottom:0}}>






                                










                        <br className='no-print'/>
                                                       

                            <br className='no-print'/>








                                <div    className='event-menu-legal paper-menu' 
                                        style={{
                                            // padding:`${mothersDayPageMargin/2}px ${mothersDayPageMargin}px 0px`,
                                                // backgroundImage:"url('/scan-mothers-day.png')",
                                                backgroundSize:'8.5in',
                                                // color:'blue',
                                                height:'auto',
                                                background:'white',
                                                maxWidth:'5.5in',
                                                
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'blue',
                                                        // padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        padding:'0',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                            // style={{background:'blue',border:'none',height:'1px'}}
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />



                                        <div style={{marginTop:'8px',
                                            // padding:`0 ${mothersDayItemMarginsLeftRight}px`
                                            }}>
                                            <h2 style={{fontSize:'22px'}}>{new Date().getFullYear() - 2014} Year Anniversary Specials <span style={{fontSize:'30px'}}>🥂</span></h2>
                                            {/* <br/> */}
                                        </div>

                                        <br/>

                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >

                                        <div className='mothers-day-flexbox' style={{display:'flex',columnGap:'20px'}}>
                                            

                                            <div    id='dinner-menu-left'
                                                    // style={{maxWidth:'50%'}}        
                                            >

                                <h2>appetizers</h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                // style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                //         margin:`${mothersDayItemMarginsTopBottom}px 0`,                                            
                                                //     }}
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













                                <h2>entrées</h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                // style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                //         margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                //     }}
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













                                <h2>dessert</h2>
                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                style={{
                                                        // border:'1px solid blue',
                                                        // padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        // margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                        // maxWidth:'calc(50% - 20px)'
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




                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    // style={{maxWidth:'50%'}}
                                            >


                                            
                                            </div>{/* id='dinner-menu-right' */}

                                        </div>{/* .mothers-day-flexbox */}
















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'50px',
                                                    // padding:`0 ${mothersDayItemMarginsLeftRight}px`
                                                    }}
                                    >

                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // background:'pink',
                                                        justifyContent:'space-between',
                                                        width:'100%',
                                                        // columnGap:'20px',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                    }}>


                                        </div>











                                

                                    <div className='dessert-footer-anniversary' 
                                    // style={{marginTop:'15px'}}
                                    >

                                        <div style={{display:'flex',justifyContent:'space-between',padding:`0` }}>
                                            <div className='chef-name-anniversary'>Manuel Romero, chef</div>
                                            <div className='allergy-explanations'>(gl) gluten, (n) nuts, (d) dairy</div>
                                        </div>

                                        <hr/>
                                        
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        // padding:`0 ${itemMarginsLeftRight}px`,
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
                                    


            </div>{/* .manager-page-wrapper */}
        </>
    )
}