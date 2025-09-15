import './index.css'
import './Dinner.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'

export default function Dinner(){
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
                                    Our dinner menu below is available for takeout and curbside pickup.  Please preorder if possible by phone (203.780.8925). During special days we can only take a limited amount of takeout orders due to volume.
                                    <br/><br/>

                                    <span className='bold'>CHEF’S TASTING MENU</span> $105 / person <br/>
                                    <span className='bold'>no substitutions or modifications<br/>
                                    A minimum of two days notice is required</span><br/>
                                    six courses / reservations and full table participation required<br/>
                                    optional wine pairing available $52 / person<br/>
                                    available Tuesday through Thursday<br/>
                                    Please let us know in advance about any food restrictions or allergies.<br/>
                                    Tax and gratuity not included.<br/><br/>

                                    DINNER MENU<br/>
                                    appetizers<br/><br/>
                                
                                    jamón Ibérico<br/>
                                    1 oz. $19                                    
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