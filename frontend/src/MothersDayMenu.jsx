import './index.css'
import './Dinner.css'
import './MothersDayMenu.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'
import {useNavigate,Link} from 'react-router'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function MothersDayMenu(){

    const event = "Mother's Day"

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    
 
    useEffect(()=>window.scrollTo(0,0),[]) 
    useEffect(()=>redirectIfEventDisabled(),[])   
    useEffect(()=>getAnnualEventsMenuItems(),[])
    useEffect(()=>getAnnualEventPrice(),[])

    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])
    const [annualEventPrice, setAnnualEventPrice] = useState(0)    

    const navigate = useNavigate()

    function redirectIfEventDisabled(){
        try{
            fetch(`${BASE_URL}/api/annual-events`)
                .then(res=>res.json())
                .then(json=> !json[0].MothersDay && navigate('/page-not-found'))
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
                .then(json=>setAnnualEventPrice(json[0].MothersDay))
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
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete        
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
                                    <img    src='mothers-day-website-image.png' 
                                            style={{maxWidth:'100%'}}
                                    />
                                    <br/><br/>
                                    <h2 style={{marginTop:'-10px'}}>Celebrate Mother's Day at Olea</h2>
                                    <br/>
                                    
                                    <p>
                                        Join us Sunday, May 10! We'll be open for Mother's Day 
                                        from 12:30pm to 6pm, serving a prix-fixe three-course 
                                        menu with multiple choices designed especially to please 
                                        Mom and the whole family. The cost is $85 per person 
                                        (plus tax & gratuity). Beverages are not included. Kids 
                                        menu will be available.
                                        <br/><br/>
                                        Reservations highly recommended:<br/>
                                        203.780.8925 or <Link style={{color:'#FAFAFA'}} to='https://www.opentable.com/single.aspx?rid=151186&restref=151186'>Open Table</Link>
                                        <br/><br/>
                                        PLEASE NOTE: OUR REGULAR MENU WILL NOT BE AVAILABLE
                                    </p>























                                        
                                        <br/><br/>
                                        <h2>APPETIZERS <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        <br/>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
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

                                            <br/><br/>

                                        </div>
                                    )
                                })}




















                                        <br/><br/>
                                        <h2>ENTRÉES <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        <br/>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
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

                                            <br/><br/>

                                        </div>
                                    )
                                })}




                                        <br/><br/>
                                        <h2>DESSERTS <span style={{fontFamily:'FuturaLight'}}>(choose one)</span></h2>
                                        <br/>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
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

                                            <br/><br/>

                                        </div>
                                    )
                                })}




                                    <hr/>
                                    <br/>
                                    consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                    or seafood may increase the risk of food-borne illnesses. 
                                    all menu items are subject to change according to seasonality and availability. 
                                    please alert your server if you have special dietary requirements before ordering.<br/>
                                    gl (gluten), d (dairy), n (nuts)
                      
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