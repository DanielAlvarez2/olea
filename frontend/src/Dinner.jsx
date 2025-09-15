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
                                    dinner hours
                                    Tuesday — Saturday, 5 — 10 pm
                                    last reservation is at 8:30 pm
                                    closed Sunday and Monday

                                    takeout and curbside pickup
                                    Our dinner menu below is available for takeout and curbside pickup.  Please preorder if possible by phone (203.780.8925). During special days we can only take a limited amount of takeout orders due to volume.

                                    CHEF’S TASTING MENU $105 / person 
                                    no substitutions or modifications
                                    A minimum of two days notice is required
                                    six courses / reservations and full table participation required
                                    optional wine pairing available $52 / person
                                    available Tuesday through Thursday
                                    Please let us know in advance about any food restrictions or allergies.
                                    Tax and gratuity not included.

                                    DINNER MENU
                                    appetizers
                                    $19
                                    jamón Ibérico
                                    1 oz.                                    
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