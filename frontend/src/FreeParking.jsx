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
                    <div className='free-parking-flexbox'>
                        
                        <div className='free-parking-left'>
                            <h1>Free Parking</h1>
                            <h2>Temple or Crown Street Garage</h2>
                            Park your car in Temple or Crown Street Garage, enjoy a meal (with a check of $50 or more), 
                            and park for FREE until 3am. For more information, visit the <a>Park New Haven website</a>. 
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