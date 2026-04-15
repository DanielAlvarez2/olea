import './index.css'
import './Specials.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function Home(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    const [allSpecials, setAllSpecials] = useState([])
    useEffect(()=>getSpecials(),[])
    useEffect(()=>window.scrollTo(0,0),[])
    function getSpecials(){
        fetch(`${BASE_URL}/api/specials`)
            .then(res=>res.json())
            .then(data=>setAllSpecials(data))
            .catch(err=>console.log(err))
    }

    function showModal(pic,name,price,description){
        if(pic == 'undefined') return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-price').innerHTML = price
        document.querySelector('.modal-description').innerHTML = description        
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
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
                                    <span className='modal-description'></span>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <div className='specials-flexbox'>
                                                                        
                        <div className='specials-left'>
                                                                    
                            <h2>DAILY SPECIALS</h2>

                            {allSpecials
                                .filter(item=>item.section == 'appetizers' && item.sequence)
                                .length == 1 && 
                                    <div className='website-menu-section'>appetizer</div>}
                            {allSpecials
                                .filter(item=>item.section == 'appetizers' && item.sequence)
                                .length > 1 && 
                                    <div className='website-menu-section'>appetizers</div>}
                                {allSpecials
                                    .filter(item=>item.section == 'appetizers' && item.sequence)
                                    .map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.description}`                            
                                                                                            )}                                            
                                            >  
                                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                                    <span>
                                                        <span className='website-name'>{data.name}</span><br/>
                                                        {data.description}
                                                    </span>
                                                    <span>{data.price}</span>
                                                </div>
                                                <br/>
                                            </div>
                                        )
                                    })}

                            {allSpecials
                                .filter(item=>item.section == 'entrées' && item.sequence)
                                .length == 1 && 
                                    <div className='website-menu-section'>entrée</div>}
                            
                            {allSpecials
                                .filter(item=>item.section == 'entrées' && item.sequence)
                                .length > 1 && 
                                    <div className='website-menu-section'>entrées</div>}

                                {allSpecials
                                    .filter(item=>item.section == 'entrées' && item.sequence)
                                    .map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.description}`                                        
                                                                                            )}
                                            >  
                                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                                    <span>
                                                        <span className='website-name'>{data.name}</span><br/>
                                                        {data.description}
                                                    </span>
                                                    <span>{data.price}</span>
                                                </div>
                                                <br/>
                                            </div>
                                        )
                                    })}

                            {allSpecials
                                .filter(item=>item.section == 'desserts' && item.sequence)
                                .length == 1 && 
                                    <div className='website-menu-section'>dessert</div>}
                            
                            {allSpecials
                                .filter(item=>item.section == 'desserts' && item.sequence)
                                .length > 1 && 
                                    <div className='website-menu-section'>desserts</div>}

                                {allSpecials
                                    .filter(item=>item.section == 'desserts' && item.sequence)
                                    .map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.description}`                                        
                                                                                            )}
                                            >  
                                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                                    <span>
                                                        <span className='website-name'>{data.name}</span><br/>
                                                        {data.description}
                                                    </span>
                                                    <span>{data.price}</span>
                                                </div>
                                                <br/>
                                            </div>
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