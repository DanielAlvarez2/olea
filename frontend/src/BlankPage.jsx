import './index.css'
import './Dinner.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState, useEffect } from 'react'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import {Link} from 'react-router'


export default function BlankPage(){
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
                                    BLANK PAGE<br/><br/>
                      
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