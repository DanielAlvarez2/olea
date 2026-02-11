import './index.css'
import './Dinner.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'


export default function Dinner(){
    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    
    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])

    useEffect(()=>window.scrollTo(0,0),[])    
    useEffect(()=>getDinnerMenuItems(),[])
    useEffect(()=>getTastingMenuPrices(),[])

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    function getDinnerMenuItems(){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDinnerMenuItems(json)
                    console.log(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getTastingMenuPrices(){
        try{
            fetch(`${BASE_URL}/api/tasting-menu-prices`)
                .then(res=>res.json())
                .then(json=>setTastingMenuPrices(json[0]))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    return(
                <div className='page-wrapper webpage'>
                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main>
                            <div className='dinner-flexbox'>
                                
                                <div className='dinner-left'>
                                    <span className='bold'>dinner hours</span><br/>
                                    Tuesday — Saturday, 5 — 10 pm<br/>
                                    last reservation is at 8:30 pm<br/>
                                    closed Sunday and Monday<br/><br/>

                                    <span className='bold'>takeout and curbside pickup</span><br/>
                                    Our dinner menu below is available for takeout and curbside pickup. Please preorder if possible by phone (203.780.8925). During special days we can only take a limited amount of takeout orders due to volume.
                                    <br/><br/>

                                    <span className='bold'>CHEF’S TASTING MENU</span> 
                                    {tastingMenuPrices.tastingMenuPrice != 0 ? ` $${tastingMenuPrices.tastingMenuPrice} / person` : ''} 
                                    <br/>
                                    <span className='bold'>no substitutions or modifications<br/>
                                    A minimum of two days notice is required</span><br/>
                                    six courses / reservations and full table participation required<br/>
                                    optional wine pairing available 
                                    {tastingMenuPrices.winePairingPrice != 0 ? ` $${tastingMenuPrices.winePairingPrice} / person` : ''}
                                    <br/>
                                    available Tuesday through Thursday<br/>
                                    Please let us know in advance about any food restrictions or allergies.<br/>
                                    Tax and gratuity not included.<br/><br/>

                                    <h2>DINNER MENU</h2>



                                    <div className='website-menu-section'>appetizers</div>

                                    {allDinnerMenuItems
                                        .filter(item=>item.section == 'cured meats' && item.sequence)
                                        .map(data=>{
                                            return(
                                                <>  <div style={{display:'flex',justifyContent:'space-between'}}>
                                                        <span>
                                                            <span className='website-name'>{data.name}</span><br/>
                                                            {data.description}
                                                        </span>
                                                        <span>{data.price}</span>
                                                    </div>
                                                    <br/>
                                                </>
                                            )
                                        })}

                                    {allDinnerMenuItems
                                        .filter(item=>item.section == 'appetizers' && item.sequence)
                                        .map(data=>{
                                            return(
                                                <>  <div style={{display:'flex',justifyContent:'space-between'}}>
                                                        <span>
                                                            <span className='website-name'>{data.name}</span><br/>
                                                            {data.description}
                                                        </span>
                                                        <span>{data.price}</span>
                                                    </div>
                                                    <br/>
                                                </>
                                            )
                                        })}







                                    <div className='website-menu-section'>main courses</div>
                                    
                                    {allDinnerMenuItems
                                        .filter(item=>item.section == 'entrées' && item.sequence)
                                        .map(data=>{
                                            return(
                                                <>  <div style={{display:'flex',justifyContent:'space-between'}}>
                                                        <span>
                                                            <span className='website-name'>{data.name}</span><br/>
                                                            {data.description}
                                                        </span>
                                                        <span>{data.price}</span>
                                                    </div>
                                                    <br/>
                                                </>
                                            )
                                        })}






                                    <div className='website-menu-section'>sides</div>
                                    
                                    {allDinnerMenuItems
                                        .filter(item=>item.section == 'sides' && item.sequence)
                                        .map(data=>{
                                            return(
                                                <>  <div style={{display:'flex',justifyContent:'space-between'}}>
                                                        <span>
                                                            <span className='website-name'>{data.name}</span><br/>
                                                            {data.description}
                                                        </span>
                                                        <span>{data.price}</span>
                                                    </div>
                                                    <br/>
                                                </>
                                            )
                                        })}










                                    <br/><br/><br/><br/>
                                    we do our best to keep this information accurate and up to date, but because we make frequent adjustments, based on season and availability, our menus are subject to change
                      
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