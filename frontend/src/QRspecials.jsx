import {useState, useEffect} from 'react'
import './index.css'
import './QRspecials.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function QRspecials(){

    const [allSpecials, setAllSpecials] = useState([])
    useEffect(()=>getSpecials(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getSpecials(){
        try{
            fetch(`${BASE_URL}/api/specials`)
                .then(res=>res.json())
                .then(json=>setAllSpecials(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function showModal(pic,name,price,description,allergiesComplete){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        if (price.includes('/')){
            document.querySelector('.modal-price').innerHTML = `${price.split('/')[0].trim()}<br/>${price.split('/')[1].trim()}`
        }else{
            document.querySelector('.modal-price').innerHTML = price
        }
        document.querySelector('.modal-description').innerHTML = description   
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete    
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal-allergies-complete').innerHTML = ''
    }

    return(
        <div style={{position:'relative'}}>{/* wrapper */}
                <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
                                                    fontFamily:'FuturaLight',
                                                    zIndex:'3000',
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
                                    <div className='modal-allergies-complete' style={{color:'red'}}></div>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                </div>{/* .modal */}



















            <div style={{   width:'100%',
                            minHeight:'100vh',
                            display:'grid',
                            placeContent:'center'}}
                 id='content-grid'
            >
                <div    id='qr-specials' 
                        style={{width:'4.25in',
                                padding:'20px',
                                minHeight:'5.5in',
                                display:'flex',
                                flexDirection:'column',
                                border:'1px solid black'}}>
                    <div id='footer-flexbox-top'>


                        <div style={{fontSize:'21px',fontFamily:'FuturaExtraBold'}}>
                            today's specials
                        </div>














                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                    <div className='specials-h2'>appetizer</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                    <div className='specials-h2'>appetizers</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                    return(
                                        <div    key={data._id}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                    

                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                        
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}

                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length == 1 && 
                                    <div className='specials-h2'>entrée</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length > 1 && 
                                    <div className='specials-h2'>entrées</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                            
                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                            
                                    
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}

                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                    <div className='specials-h2'>dessert</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                    <div className='specials-h2'>desserts</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                            
                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                            
                                    
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}
                        
                        
                    </div>{/* #footer-flexbox-top */}

                                                <footer style={{
                                                                // position:'absolute',
                                                                bottom:'6mm',
                                                                paddingTop:'20px',
                                                                marginTop:'auto',
                                                                textAlign:'left',
                                                                fontSize:'11px',
                                                                // paddingRight:`calc(6mm + ${pageMarginsLeftRight}px)`,
                                                                fontFamily:'serif'}}>
                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                        <span style={{fontWeight:'900'}}>
                                                        Please alert your server if you have special dietary requirements:<br/>
                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                    </footer>                    
                </div>
            </div>{/* #content-grid */}

        {/* wrapper */}
        </div>
    )
}