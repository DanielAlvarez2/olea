import './index.css'
import './Newsletter.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Newsletter(){
    useEffect(()=>window.scrollTo(0,0),[])
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

                                <div style={{width:'100%',textAlign:'right'}}>
                                    <span style={{color:'red'}}>*</span>
                                    indicates required
                                </div>

                                <label>
                                    Email Address<br/>
                                    <div className='input-wrapper'>
                                        <span className='input-required'>*</span>
                                        <input  type='email'
                                                required
                                                maxLength='100' 
                                                style={{width:'100%'}} />
                                    </div>
                                </label>

                                <label>
                                    First Name<br/>
                                    <div className='input-wrapper'>
                                        <span className='input-required'>*</span>
                                        <input  type='text'
                                                required
                                                maxLength='50' 
                                                style={{width:'100%'}} />
                                    </div>
                                </label>

                                <label>
                                    Last Name<br/>
                                    <div className='input-wrapper'>
                                        <span className='input-required'>*</span>
                                        <input  type='text'
                                                required
                                                maxLength='50' 
                                                style={{width:'100%'}} />
                                    </div>
                                </label>

                                Phone Number<br/>
                                (&nbsp; 
                                <input  type='text'
                                        maxLength='3' 
                                        style={{width:'45px',textAlign:'center'}} /> )&nbsp;&nbsp;        
                                <input  type='text' 
                                        maxLength='3'
                                        style={{width:'45px',textAlign:'center'}} /> 
                                        &nbsp;&mdash;&nbsp;         
                                <input  type='text' 
                                        maxLength='4'
                                        style={{width:'60px',textAlign:'center'}} />
                                <br/>
                                (###) ### &mdash; ####
                                <br/><br/>

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