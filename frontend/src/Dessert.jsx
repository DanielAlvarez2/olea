import './index.css'
import './Dessert.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState,useEffect } from 'react'

export default function Dessert(){
    useEffect(()=>window.scrollTo(0,0),[])
    const [allDesserts, setAllDesserts] = useState([])
    useEffect(()=>getDesserts(),[])

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getDesserts(){
        try{
            fetch(`${BASE_URL}/api/desserts`)
                .then(res=>res.json())
                .then(json=>setAllDesserts(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <div className='dessert-flexbox'>
                                                    
                        <div className='dessert-left'>
                                                
                            <h2>DESSERT MENU</h2><br/><br/>

                                {allDesserts.map(data=>{
                                    return(
                                            <>  <div style={{display:'flex',justifyContent:'space-between'}}>
                                                    <span>
                                                        <span className='website-name'>{data.name}</span><br/>
                                                        {data.description}
                                                    </span>
                                                    <span>{data.price}</span>
                                                </div>
                                                <br/>
                                            </>
                                    )
                                })}
                                                



                            <br/><br/><br/><br/>
                            we do our best to keep this information accurate and up to date, but because we make frequent adjustments, based on season and availability, our menus are subject to change
                         </div>{/* .dessert-left */}
                                                    
                        <div className='dessert-right'>
                            <OpenTable />
                        </div>{/* .dessert-right */}
                    </div>{/* .dessert-flexbox */}
                </main>

                <Footer />            
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}