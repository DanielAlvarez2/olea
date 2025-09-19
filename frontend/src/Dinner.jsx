import './index.css'
import './Dinner.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Dinner(){
    useEffect(()=>window.scrollTo(0,0),[])    
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

                                    <span className='bold'>CHEF’S TASTING MENU</span> $105 / person <br/>
                                    <span className='bold'>no substitutions or modifications<br/>
                                    A minimum of two days notice is required</span><br/>
                                    six courses / reservations and full table participation required<br/>
                                    optional wine pairing available $52 / person<br/>
                                    available Tuesday through Thursday<br/>
                                    Please let us know in advance about any food restrictions or allergies.<br/>
                                    Tax and gratuity not included.<br/><br/>

                                    <h2>DINNER MENU</h2>
                                    appetizers<br/><br/>
                                
                                    <span className='jamon'>
                                        <span>jamón Ibérico</span>
                                        <span>1 oz. $19 / 2 oz. $38</span>
                                    </span>
                                                  

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