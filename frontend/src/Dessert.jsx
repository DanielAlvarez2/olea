import './index.css'
import './Dessert.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useState,useEffect } from 'react'
import { AiTwotoneCloseCircle } from "react-icons/ai";

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

    function showModal(pic,name,price,descriptionIntro,description){
        if(pic == 'undefined') return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-price').innerHTML = price
        if(descriptionIntro) document.querySelector('.modal-description-intro').innerHTML = `${descriptionIntro}; `
        document.querySelector('.modal-description').innerHTML = description        
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
        document.querySelector('.modal-description-intro').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal').style.display = 'none'
    }
    

    return (
        <div className='page-wrapper webpage'>
                    <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
                                                    zIndex:'1000',
                                                    background:'#888888ee',
                                                    color:'black',
                                                    display:'none',
                                                    placeContent:'center'
                    }}>
                        <AiTwotoneCloseCircle   size='70' 
                                                onClick={closeModal}
                                                style={{position:'fixed',
                                                        cursor:'pointer',
                                                        top:'5px',
                                                        right:'5px'}} />
                        <div className='modal-content'>
                            <figure style={{display:'table'}}>
                                <img className='modal-image' style={{maxHeight:'50vh',maxWidth:'90vw',borderRadius:'25px'}} />
                                <figcaption style={{display:'table-caption',padding:'10px',captionSide:'bottom',borderRadius:'25px',background:'#ccc'}}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <span className='modal-name' style={{fontWeight:'900'}}></span>
                                        <span className='modal-price'></span>
                                    </div>
                                    <span className='modal-description-intro' style={{fontStyle:'italic'}}></span>
                                    <span className='modal-description'></span>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

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