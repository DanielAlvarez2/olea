import './index.css'
import './Dinner.css'
import './MothersDayMenu.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'
import {useNavigate,Link} from 'react-router'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function RestaurantWeeksFall(){

    const event = "Restaurant Weeks: Fall"
    const event_url = 'restaurant-weeks-fall'
    const event_obj = 'RestaurantWeekFall'

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    
 
    // useEffect(()=>window.scrollTo(0,0),[]) 
    useEffect(()=>redirectIfEventDisabled(),[])   
    useEffect(()=>getAnnualEventsMenuItems(),[])
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getEventDates(),[])
    useEffect(()=>getWebsiteImage(),[])

    const [websiteImageURL, setWebsiteImageURL] = useState('')
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])
    const [annualEventPrice, setAnnualEventPrice] = useState(0) 
    const [eventDates, setEventDates] = useState('')   

    function getWebsiteImage(){
        fetch(`${BASE_URL}/api/events/website-image/${event_url}`)
            .then(res=>res.json())
            .then(data=>{
                setWebsiteImageURL(data.cloudinary_secure_URL)
                setWebsiteImageID(data.cloudinaryPublicID)
            })
            .catch(err=>console.log(err))
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



    const navigate = useNavigate()

    function redirectIfEventDisabled(){
        try{
            fetch(`${BASE_URL}/api/annual-events`)
                .then(res=>res.json())
                .then(json=> !json[0].RestaurantWeeksFall && navigate('/page-not-found'))
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

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0].RestaurantWeekFall))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    function showModal(pic,name,description,allergiesAbbreviated,allergiesComplete){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-description').innerHTML = description    
        if (allergiesAbbreviated) document.querySelector('.modal-allergies-abbreviated').innerHTML = ` (${allergiesAbbreviated})`        
        // document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete        
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        // document.querySelector('.modal-price').innerHTML = ''
        // document.querySelector('.modal-description-intro').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal-allergies-abbreviated').innerHTML = ''
        document.querySelector('.modal-allergies-complete').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
    }
    






















    return(
        
        <div className='page-wrapper webpage' style={{position:'relative'}}>
                   
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
                                    <div>
                                        <span className='modal-name' style={{fontWeight:'900'}}></span>
                                        <span className='modal-allergies-abbreviated'></span>
                                        
                                    </div>
                                    
                                    <span className='modal-description'></span>
                                    <div className='modal-allergies-complete'></div>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main>
                            <div className='dinner-flexbox' 
                                    // style={{backgroundImage:"url('mothers-day-screenshot.webp')",
                                    //                                 backgroundSize:'1854px',
                                    //                                 backgroundPosition:'-417px -156px'
                                    //         }}
                            >
                                
                                <div className='dinner-left'>
                                    {websiteImageURL &&        
                                        <div style={{textAlign:'center'}}>                             
                                            <a href='https://www.infonewhaven.com/restaurantweek' target='_blank'>
                                                <img src={websiteImageURL} 
                                                    style={{maxWidth:'100%'}}
                                                    />
                                            </a>
                                        </div>
                                    }
                                    <br/><br/>
                                    <div style={{marginTop:'-10px',color:'white',marginBottom:'10px'}}>New Haven restaurant week</div>
                                    <div style={{marginTop:'-10px'}}>{eventDates} (closed Sundays and Mondays)</div>
                                    <br/>
                                    
                                    <p>
                                      ${annualEventPrice} three courses<br/>
                                      (one prix fixe per person, no substitutions, beverage, tax, and gratuity not included)
                                    </p>
                                    <br/>
                                    <div>
                                      Reserve a table at 203.780.8925 or <a href='https://www.opentable.com/single.aspx?rid=151186&restref=151186' target='_blank'><span style={{color:'white',cursor:'pointer'}}>Open Table</span></a>
                                    </div>
                                    <br/>
                                    Please note: a shorter version of our regular dinner menu is also available
























                                        
                                        <br/><br/><br/>
                                        <h2>APPETIZERS <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id}
                                                onClick={()=>showModal(data.cloudinary_secure_URL,data.name,data.description,data.allergiesAbbreviated,data.allergiesComplete)} 
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <span>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </span>
                                            <span className='description'> &nbsp;{data.description}</span>
                                            {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            {/* <div className='allergies-complete'>{data.allergiesComplete}</div> */}

                                            <br/>

                                        </div>
                                    )
                                })}




















                                        <br/><br/>
                                        <h2>ENTRÉES <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id}
                                                onClick={()=>showModal(data.cloudinary_secure_URL,data.name,data.description,data.allergiesAbbreviated,data.allergiesComplete)} 
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <span>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </span>
                                            <span className='description'> &nbsp;{data.description}</span>
                                            {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            {/* <div className='allergies-complete'>{data.allergiesComplete}</div> */}

                                            <br/>

                                        </div>
                                    )
                                })}




                                        <br/><br/>
                                        <h2>DESSERTS <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id}
                                                onClick={()=>showModal(data.cloudinary_secure_URL,data.name,data.description,data.allergiesAbbreviated,data.allergiesComplete)} 
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <span>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </span>
                                            <span className='description'> &nbsp;{data.description}</span>
                                            {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                            {/* <div className='allergies-complete'>{data.allergiesComplete}</div> */}

                                            <br/>

                                        </div>
                                    )
                                })}




                      
                                </div>{/* .dinner-left */}
                                
                                <div className='dinner-right'>
                                    <OpenTable />
                                </div>{/* .dinner-right */}
                            </div>{/* .dinner-flexbox */}
                        </main>
        
                        <Footer />            
                    </div>{/* .webpage-wrapper */}
                </div>/* .page-wrapper */
    )
}