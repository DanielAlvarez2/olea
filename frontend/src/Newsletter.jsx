import './index.css'
import './Newsletter.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Newsletter</h1>
                    <div className='newsletter-flexbox'>
                        
                        <div className='newsletter-left'>
                            <form>
                                <h2>subscribe to our mailing list</h2>

                                <label>
                                    Email Address<br/>
                                    <input type='email' style={{width:'100%'}} />
                                </label><br/>

                                <label>
                                    First Name<br/>
                                    <input type='text' style={{width:'100%'}} />
                                </label><br/>

                                <label>
                                    Last Name:<br/>
                                    <input type='text' style={{width:'100%'}} />
                                </label><br/>

                                Phone Number<br/>
                                (<input type='text' style={{width:'40px'}} />)        
                                <input type='text' style={{width:'40px'}} />-        
                                <input type='text' style={{width:'60px'}} />
                                <br/>

                                <button>
                                    Subscribe
                                </button>        

                            </form>
                        </div>{/* .newsletter-left */}
                        
                        <div className='newsletter-right'>
                            <OpenTable />
                        </div>{/* .newsletter-right */}
                    </div>{/* .newsletter-flexbox */}
                    
                </main>

                <Footer />
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}