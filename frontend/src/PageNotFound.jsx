import './index.css'
import './Dinner.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import {Link} from 'react-router'
import { useState, useEffect } from 'react'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function PageNotFound(){

    useEffect(()=>window.scrollTo(0,0),[])    

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    
    return(
                <div className='page-wrapper webpage' style={{position:'relative'}}>

                    <div className='webpage-wrapper'>
                        <Navbar />
        
                        <main>
                            <div className='dinner-flexbox'>
                                
                                <div className='dinner-left'>

                                    We couldn't find the page you were looking for. This is either because:
                                    <br/><br/>

                                    <ul style={{listStyleType:'disc',paddingLeft:'40px'}}>
                                        <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
                                        <li>The page you are looking for has been moved or deleted.</li>
                                    </ul>

                                    <br/>
                                    You can return to our homepage by <Link to='/'><span style={{fontWeight:'bold'}}>clicking here</span>.</Link>
                      
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