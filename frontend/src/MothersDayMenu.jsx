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

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    
 
    useEffect(()=>window.scrollTo(0,0),[]) 
    useEffect(()=>getAnnualEvents(),[])   
 
    const [annualEvents, setAnnualEvents] = useState([])

    const navigate = useNavigate()

    function getAnnualEvents(){
        try{
            fetch(`${BASE_URL}/api/annual-events`)
                .then(res=>res.json())
                .then(json=>{
                    setAnnualEvents(json)
                    if (!json[0].MothersDay) navigate('/page-not-found') 
                    // alert(json[0].MothersDay)
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function showModal(pic,name,price,descriptionIntro,description){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-price').innerHTML = price
        if(descriptionIntro) document.querySelector('.modal-description-intro').innerHTML = `${descriptionIntro}; `
        document.querySelector('.modal-description').innerHTML = description        
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
        document.querySelector('.modal-description-intro').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
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
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <span className='modal-name' style={{fontWeight:'900'}}></span>
                                        <span className='modal-price'></span>
                                    </div>
                                    <span className='modal-description-intro' style={{fontStyle:'italic'}}></span>
                                    <span className='modal-description'></span>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main>
                            <div className='dinner-flexbox'>
                                
                                <div className='dinner-left'>
                                    <img    src='mothers-day-website-image.png' 
                                            style={{maxWidth:'100%'}}
                                    />
                                    <br/><br/>
                                    <div className='bold'>Celebrate Mother's Day at Olea</div><br/>
                                        
                                        Join us Sunday, May 10! We'll be open for Mother's Day 
                                        from 12:30pm to 6pm, serving a prix-fixe three-course 
                                        menu with multiple choices designed especially to please 
                                        Mom and the whole family. The cost is $85 per person 
                                        (plus tax & gratuity). Beverages are not included. Kids 
                                        menu will be available.
                                        <br/><br/>
                                        Reservations highly recommended:<br/>
                                        203.780.8925 or <Link className='bold' to='https://www.opentable.com/single.aspx?rid=151186&restref=151186'>Open Table</Link>
                                        <br/><br/>
                                        PLEASE NOTE: OUR REGULAR MENU WILL NOT BE AVAILABLE
                                        
                                        <br/><br/><span className='bold'>APPETIZERS</span> (choose one)<br/><br/>
                                        <br/><br/><span className='bold'>ENTRÉES</span> (choose one)<br/><br/>
                                        <br/><br/><span className='bold'>DESSERTS</span> (choose one)<br/><br/>



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