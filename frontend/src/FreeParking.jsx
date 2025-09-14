import './index.css'
import './FreeParking.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import OpenTable from './components/OpenTable.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage' 
            //  style={{backgroundImage:'url("./olea-free-parking.jpg")',backgroundSize:'90%'}}
             >
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Free Parking</h1>
                    
                    <div className='free-parking-flexbox'>
                        
                        <div className='free-parking-left'>
                            <h2>Temple or Crown Street Garage</h2>
                            Park your car in the&nbsp; 
                            <a  href='https://parknewhaven.com/parking/temple-street-garage-office/' 
                                target='_blank'>
                                Temple Street Garage
                            </a>
                            &nbsp;or the&nbsp; 
                            <a  href='https://parknewhaven.com/parking/crown-street-garage/' 
                                target='_blank'>
                                Crown Street Garage
                            </a>
                            , enjoy a meal (with a check of $50 or more), 
                            and park for FREE until 3am.  
                            Ask your host about validation when arriving at Olea. There is no validation for private events.

                            <br/><br/>

                            <span style={{fontFamily:'FuturaMedium',fontSize:'18px',color:'#c1bebe'}}>exceptions: </span>
                            no validation for restaurant week or Yale commencement days
                        </div>{/* .free-parking-left */}
                        
                        <div className='free-parking-right'>
                            <OpenTable />
                        </div>{/* .free-parking-right */}
                    </div>{/* .free-parking-flexbox */}
                </main>

                <Footer />
                
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}