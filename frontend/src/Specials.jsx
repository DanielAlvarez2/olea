import './index.css'
import './Specials.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <div className='specials-flexbox'>
                                                                        
                        <div className='specials-left'>
                                                                    
                            <h2>DAILY SPECIALS</h2>
                                <span className='oysters'>
                                    <span>fresh Chebooktook oysters</span>
                                    <span>6 units 21 / 12 units 42</span>
                                </span> 
                                (Bouctouche Bay, New Brunswick, Canada), Thai basil-black pepper mignonette sauce and tomatillo granita<br/>                                

                    
                                <br/><br/><br/><br/>
                                we do our best to keep this information accurate and up to date, but because we make frequent adjustments, based on season and availability, our menus are subject to change
                        </div>{/* .specials-left */}
                                                                        
                        <div className='specials-right'>
                            <OpenTable />
                        </div>{/* .specials-right */}
                    </div>{/* .specials-flexbox */}
                </main>

                <Footer />
                
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}