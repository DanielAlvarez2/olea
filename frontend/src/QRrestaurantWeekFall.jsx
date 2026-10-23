import {Link} from 'react-router'
import {useState,useEffect} from 'react'
// import './Manager.css'
import './Manager/DessertMenuFormat.css'
import './Manager/DessertDrinksUpdate.css'
import './Manager/DessertDrinksUpdate.css'
import './Manager/DinnerMenuFormat.css'
import './Manager/MothersDayFormat.css'
import './Manager/CommencementFormat.css'
// import ManagerNavbar from './components/ManagerNavbar.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import QRfooter from './components/QR-footer.jsx'



export default function QRrestaurantWeekFall(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [winePairingPrice, setWinePairingPrice] = useState(0) 
    const [eventDates, setEventDates] = useState('')   
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [formatting, setFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    const [RightMenuItemMarginsTopBottom, setRightMenuItemMarginsTopBottom] = useState(0)
    const [LeftMenuItemMarginsTopBottom, setLeftMenuItemMarginsTopBottom] = useState(0)
    const [rightMenuItemMarginRight, setRightMenuItemMarginRight] = useState(0)
    const [logoImageURL, setLogoImageURL] = useState('')
    const [logoHeight, setLogoHeight] = useState('')
    const [logoRight, setLogoRight] = useState('')
    const [logoTop, setLogoTop] = useState('')

    useEffect(()=>getFormatting())
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getWinePairingPrice(),[])    
    useEffect(()=>getAnnualEventsMenuItems(),[])
    useEffect(()=>getLogoImage(),[])
    useEffect(()=>getEventDates(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    // const event = "Mother's Day"
    const event = "Restaurant Weeks: Fall"
    const event_url = 'restaurant-weeks-fall'
    const event_obj = 'RestaurantWeekFall'

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

    function getWinePairingPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setWinePairingPrice(json[0].RestaurantWeekFallWinePairing))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getEventDates(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setEventDates(json[0].RestaurantWeekFallDates))
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
                    setRightMenuItemMarginsTopBottom(json[0].RightMenuItemMarginsTopBottom)
                    setRightMenuItemMarginRight(json[0].rightMenuItemMarginRight)
                    setLeftMenuItemMarginsTopBottom(json[0].LeftMenuItemMarginsTopBottom)
                    setLogoHeight(json[0].logoHeight)
                    setLogoRight(json[0].logoRight)
                    setLogoTop(json[0].logoTop)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getLogoImage(){
        fetch(`${BASE_URL}/api/events/website-image/restaurant-week-fall-logo-image`)
            .then(res=>res.json())
            .then(data=>{
                setLogoImageURL(data.cloudinary_secure_URL)
                // setLogoImageID(data.cloudinaryPublicID)
            })
            .catch(err=>console.log(err))
    }

    function showModal(pic,name,price,description,allergiesComplete,descriptionIntro){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        if (price.includes('/')){
            document.querySelector('.modal-price').innerHTML = `${price.split('/')[0].trim()}<br/>${price.split('/')[1].trim()}`
        }else{
            document.querySelector('.modal-price').innerHTML = price
        }
        if (descriptionIntro) document.querySelector('.modal-description-intro').innerHTML = `${descriptionIntro}; `
        document.querySelector('.modal-description').innerHTML = description   
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete    
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal-description-intro').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal-allergies-complete').innerHTML = ''
    }



    return(
        <>
            <div    className='manager-page-wrapper' 
                  style={{background:'lightgrey',position:'relative'}}
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                              <div className='modal' style={{ position:'fixed',
                                                                  inset:'0',
                                                                  height:'100vh',
                                                                  width:'100%',
                                                                  fontFamily:'FuturaLight',
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
                                                      <span className='modal-price'></span>
                                                  </div>
                                                  <span className='modal-description-intro' style={{fontStyle:'italic'}}></span>
                                                  <span className='modal-description'></span>
                                                  <div className='modal-allergies-complete' style={{color:'red'}}></div>
                                              </figcaption>
                                          </figure>
                                      </div>{/* .modal-content */}
                              </div>{/* .modal */}
              
                <div style={{width:'100%'}} className='no-print'>
                    {/* <ManagerNavbar page='events' /> */}
                </div>
                    <br/>
                    
                    <br className='no-print'/>

                    <div 
                    // className='main-menu' 
                    style={{paddingBottom:0,display:'flex',alignItems:'center'}}>






                                










                                    









                                <div 
                                      id='qr-parents-weekend'
                                        style={{
                                                width:'8.5in',
                                                height:'auto',
                                                background:'white',
                                                border:'1px solid black',
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
                                                            display:'inline-block',
                                                            cursor:'default',
                                                            fontSize:'57px'}}>olea</span>
                                            <span style={{position:'relative'}}>
                                              <img  id='restaurant-week-fall-logo' 
                                                    style={{height:`${logoHeight}px`,position:'absolute',left:`${logoRight}px`,bottom:`${logoTop}px`}}
                                                    src={logoImageURL ? logoImageURL : null}  />                                              
                                            </span>


                                        <hr 
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />




                                          <br/>
                                        <div className='dessert-menu-front-content'
                                                style={{padding:`10px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%',
                                                      padding:'10px',
                                                      paddingBottom:'0',
                                                      border:'1px solid black',
                                                    }}        
                                            >


                                        <div style={{
                                          // marginTop:'28px',
                                          // padding:`0 ${itemMarginsLeftRight}px`
                                          }}>
                                            <h2 style={{fontSize:'21px',fontFamily:'FuturaRoundBold'}}>New Haven Restaurant Week</h2>
                                            {/* <br/> */}
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontFamily:'FuturaLight'}}>{eventDates}</span>
                                                <br/>
                                                <br />

                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>${annualEventPrice} three courses</span><br/>
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'20px'}}>(one prix fixe menu per person, no substitutions, beverage, tax, and gratuity not included)</span>

                                                <br/><br/>

                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>add ${winePairingPrice} for wine pairing</span><br/>
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'20px'}}>(wine 3 oz. / dessert 1.5 oz.)</span>

                                                <br/><br/>

                                            </div>
                                        </div>










                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>appetizers 
                                                  <span style={{marginLeft:'5px',fontFamily:'serif',fontWeight:'900',fontSize:'15.6px'}}>choose one</span>
                                                </div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>                                                
                                                <br/>
                                            </div>


                                        </div>
                                    )
                                })}










                                                <br/>
                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>entrées 
                                                  <span style={{marginLeft:'5px',fontFamily:'serif',fontWeight:'900',fontSize:'15.6px'}}>choose one</span>
                                                </div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>                                                
                                                <br/>
                                            </div>


                                        </div>
                                    )
                                })}




















                                                <br/>
                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>desserts 
                                                  <span style={{marginLeft:'5px',fontFamily:'serif',fontWeight:'900',fontSize:'15.6px'}}>choose one</span>
                                                </div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>                                                
                                                <br/>
                                            </div>


                                        </div>
                                    )
                                })}





                                            </div>{/* #dinner-menu-left */}





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%',padding:'10px 0'}}
                                            >

                                                <h2 style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaRoundBold'}}>dinner menu</h2>


                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>appetizers</div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete,
                                                                        data.descriptionIntro
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )
                                })}











                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>entrées</div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete,
                                                                        data.descriptionIntro
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )

                                })}





















                                                <div style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaMedium'}}>sides</div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - sides' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                  // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete,
                                                                        data.descriptionIntro
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'17px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated' style={{fontSize:'13px'}}> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )

                                })}















                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>
















                                    <div className='dessert-footer' style={{marginTop:'40px'}}>

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

                                        <hr style={{marginTop:'5px',marginBottom:'5px'}}/>
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

                                                <img    src='/qr-restaurant-week-fall.jpg' 
                                                    className='qr'
                                                    style={{marginLeft:'10px'}}
                                                    height='60px' />


                                        </div>
                                    </div>     
                                                               
                                </div>



                    


                    </div>                


                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                <QRfooter />

            </div>{/* .manager-page-wrapper */}
        </>
    )
}