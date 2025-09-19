import './index.css'
import './Jobs.css'
import {Link} from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Jobs(){
    useEffect(()=>window.scrollTo(0,0),[])
    return(
        <>
        <div className='page-wrapper webpage'>
                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main>
                            <div>APPLICATION FOR EMPLOYMENT</div>
                            <div>OLEA RESTAURANT</div>
                            <div>39 High Street</div>
                            <div>New Haven, CT 06510</div>
                            <div style={{border:'1px solid white',padding:'3px'}}>Olea is an equal opportunity employer and does not discriminate against
                                otherwise qualified applicants on the basis of race, color, creed, religion,
                                ancestry, age, sex, marital status, national origin, disability or handicap, or
                                veteran status. 
                            </div>
                            <br/>
                            <hr/>
                            <form>
                                <br/>
                                PERSONAL INFO<br/>
                                <div className='name-flexbox'>
                                    <label>
                                        First Name:<br/>
                                        <input type='text' />
                                    </label>

                                    <label>
                                        Last Name:<br/>
                                        <input type='text' />
                                    </label>
                                </div>{/* .name-flexbox */}
                                
                                <br/>
                                <label>
                                    Street Address:<br/>
                                    <input type='text' />
                                </label><br/>
                                <label>
                                    City:<br/>
                                    <input type='text' />
                                </label><br/>
                                <label>
                                    State:<br/>
                                    <input type='text' />
                                </label><br/>
                                <label>
                                    Zip Code:<br/>
                                    <input type='text' />
                                </label>

                                
                            </form>
                            
                        </main>
        
                        <Footer />
                        
                    </div>{/* .webpage-wrapper */}
                </div>/* .page-wrapper */

        

        </>
    )
}