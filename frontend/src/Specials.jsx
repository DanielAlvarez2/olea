import './index.css'
import './Specials.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'

export default function Home(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    const [allSpecials, setAllSpecials] = useState([])
    useEffect(()=>getSpecials())
    useEffect(()=>window.scrollTo(0,0),[])
    function getSpecials(){
        fetch(`${BASE_URL}/api/specials`)
            .then(res=>res.json())
            .then(data=>setAllSpecials(data))
            .catch(err=>console.log(err))
    }
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <div className='specials-flexbox'>
                                                                        
                        <div className='specials-left'>
                                                                    
                            <h2>DAILY SPECIALS</h2>

                                {allSpecials
                                    .filter(item=>item.section == 'appetizers' && item.sequence)
                                    .map(data=>{
                                        return(
                                            <>{data.name}<br/></>
                                        )
                                    })}



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