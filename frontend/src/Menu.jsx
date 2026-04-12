import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Menu.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";



export default function Menu(){

    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    
    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
    useEffect(()=>{ 
                getDinnerMenuItems()
    },[])
    useEffect(()=>getTastingMenuPrices(),[])    
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'



    function getDinnerMenuItems(){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDinnerMenuItems(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getTastingMenuPrices(){
        try{
            fetch(`${BASE_URL}/api/tasting-menu-prices`)
                .then(res=>res.json())
                .then(json=>setTastingMenuPrices(json[0]))
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

    return(
        <>
            <div    className='manager-page-wrapper2' 
                    style={{
                            background:'lightgrey',
                            position:'relative'
                            }}>
                <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
                                                    fontFamily:'FuturaLight',
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


                    <div className='main-menu2' style={{paddingBottom:0,background:'lightgrey'}}>






                            <br className='no-print'/>





                                <div    className='allergies-menu-dinner' 
                                        style={{width:'8.5in',
                                                background:'white',
                                                padding:`10px`,
                                                height:'auto',
                                                border:'1px solid black'}} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        color:'black',
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`10px`}} />







                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >
                                                <div className='cured-meats' style={{border:'1px solid #888'}}>
                                                    {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'cured meats').map(data=>{
                                                        return(
                                                            <div    key={data._id}
                                                                    className='special item'
                                                                    onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.descriptionIntro}`,
                                                                                            `${data.description}`
                                                                                            )}                                                                    
                                                                    >
                                                            
                                                                <span className='name'>{data.name} </span>
                                                                {data.allergiesAbbreviated &&   <>
                                                                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                                </>
                                                                }
                                                                {data.description && <br/>}
                                                                {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                                {data.description && <span> {data.description}</span>}
                                                                
                                                                <span className='price'> &nbsp;{data.price}</span> 
                                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                                {<div className='allergies-complete'>{data.allergiesComplete}</div>}


                                                            </div>
                                                        )
                                                    })}
                                                </div>{/* .cured-meats */}














                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                className='special item'
                                                                onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.descriptionIntro}`,
                                                                                            `${data.description}`
                                                                                            )}
                                                                >
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                            {<div className='allergies-complete'>{data.allergiesComplete}</div>}

                                                        </div>
                                                    )
                                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                className='special item'
                                                                onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.descriptionIntro}`,
                                                                                            `${data.description}`
                                                                                            )}
                                                                >
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                            {<div className='allergies-complete'>{data.allergiesComplete}</div>}

                                                        </div>
                                                    )
                                                })}

                                                <div    className='special' 
                                                        style={{border:'1px solid #888',
                                                                fontFamily:'serif',
                                                                marginTop:`10px`,
                                                                padding:'5px'
                                                        }}
                                                                >
                                                    <span style={{fontFamily:'FuturaLight', fontSize:'20px'}}>
                                                        chef's tasting menu &nbsp; 
                                                    </span> 
                                                    <span style={{fontStyle:'italic'}}>
                                                        six courses 
                                                        {tastingMenuPrices.tastingMenuPrice != 0 ? <>
                                                                                                        <span style={{fontWeight:'900'}}> {tastingMenuPrices.tastingMenuPrice}</span> / person
                                                                                                    </>
                                                                                                 : ''}
                                                    </span>
                                                    <br/>
                                                    <span style={{fontStyle:'italic', fontWeight:'900'}}>
                                                        48-hours notice and reservation required<br/>
                                                    </span>
                                                    full table participation<br/>
                                                    available tuesday through thursday<br/>
                                                    <span style={{fontStyle:'italic'}}>
                                                        optional wine pairing available 
                                                        {tastingMenuPrices.winePairingPrice != 0 ? <>
                                                                                                        <span style={{fontWeight:'900'}}> {tastingMenuPrices.winePairingPrice}</span> / person
                                                                                                    </>
                                                                                                 : ''}
                                                    </span>
                                                </div>
                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   fontSize:'25px',
                                                    fontFamily:'FuturaLight',
                                                    paddingLeft:'5px',
                                                    paddingTop:`10px`}}
                                    >

                                        sides
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        marginBottom:`10px`,
                                                        border:'1px solid #888'}}>

                                        
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'sides').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{flexBasis:'50%',
                                                                }}
                                                                className='special item'
                                                                onClick={()=>showModal( `${data.cloudinary_secure_URL}`,
                                                                                            `${data.name}`,
                                                                                            `${data.price}`,
                                                                                            `${data.descriptionIntro}`,
                                                                                            `${data.description}`
                                                                                            )}
                                                                >
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                            {<div className='allergies-complete'>{data.allergiesComplete}</div>}

                                                        </div>
                                                    )
                                                })}

                                        </div>












                                    <div className='dessert-footer'>
                                        
                                        
                                        <div className='chef-legal-flexbox'>

                                            <div className='chef name' style={{textDecoration:'underline'}}>manuel romero, chef</div>
                                            
                                            
                                            <div style={{width:'65%'}}>
                                                <span style={{fontWeight:'100'}}>
                                                    consumer advisory: consumption of undercooked meat, poultry, 
                                                    eggs, or seafood may increase the risk of food-borne illnesses<br/>
                                                    all menu items are subject to change according to seasonality and availability<br/>
                                                </span>
                                                
                                                please alert your server if you have special dietary requirements before ordering<br/>
                                                <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                    </div>

                        <br className='no-print'/>
                        <br className='no-print'/>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}