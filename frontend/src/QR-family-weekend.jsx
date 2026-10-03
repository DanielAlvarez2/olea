import {Link} from 'react-router'
import {useState,useEffect} from 'react'
// import './Manager.css'
import './Manager/DessertMenuFormat.css'
import './Manager/DessertDrinksUpdate.css'
import './Manager/DessertDrinksUpdate.css'
import './Manager/DinnerMenuFormat.css'
import './Manager/MothersDayFormat.css'
import './Manager/CommencementFormat.css'
// import ManagerNavbar from './components/ManagerNavbar.jsx'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import QRfooter from './components/QR-footer.jsx'



export default function ParentsWeekendFormatPrint(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [formatting, setFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    const [itemMarginsTopBottom, setItemMarginsTopBottom] = useState(0)
    const [itemMarginsLeftRight, setItemMarginsLeftRight] = useState(0)

    useEffect(()=>getFormatting())
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getAnnualEventsMenuItems(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    // const event = "Mother's Day"
    const event = "Parents Weekend"
    const event_url = 'parents-weekend'
    const event_obj = 'ParentsWeekend'

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0][event_obj]))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getAnnualEventsMenuItems(){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items`)
                .then(res=>res.json())
                .then(json=>setAllAnnualEventsMenuItems(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/${event_url}`)
                .then(res=>res.json())
                .then(json=>{
                    // setFormatting(json[0])
                    // setPageMargin(json[0].pageMargin)
                    setItemMarginsTopBottom(json[0].itemMarginsTopBottom)
                    setItemMarginsLeftRight(json[0].itemMarginsLeftRight)
                })
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
        <>
            <div    className='manager-page-wrapper' 
                  style={{background:'lightgrey',position:'relative'}}
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
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
              
                <div style={{width:'100%'}} className='no-print'>
                    {/* <ManagerNavbar page='events' /> */}
                </div>
                    <br/>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>yale family weekend {new Date().getFullYear()}</div>
                    
                    <br className='no-print'/>

                    <div 
                    // className='main-menu' 
                    style={{paddingBottom:0,display:'flex',alignItems:'center'}}>






                                










                                    









                                <div 
                                      id='qr-parents-weekend'
                                        style={{
                                                width:'8.5in',
                                                height:'auto',
                                                background:'white',
                                                border:'1px solid black',
                                                padding:'27px 65px',
                                                // color:'red',
                                                // padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                // backgroundImage:"url('/parents-weekend-scan.jpg')",
                                                backgroundSize:'8.5in',
                                                // color:'red'
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        // padding:`0 ${itemMarginsLeftRight}px`,
                                                        paddingLeft:'0px',
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />



                                        <div style={{marginTop:'28px',
                                          // padding:`0 ${itemMarginsLeftRight}px`
                                          }}>
                                            <h2 style={{fontSize:'23px',fontFamily:'FuturaRoundBold'}}>prix fixe dinner menu</h2>
                                            {/* <br/> */}
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>${annualEventPrice} per person; three courses</span>
                                                <br />
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'30px'}}>(tax, gratuity and beverages are not included)</span>
                                            </div>
                                        </div>


                                        <div className='dessert-menu-front-content'
                                                style={{padding:`10px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >












                                                <h2 style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaRoundBold'}}>appetizers <span style={{marginLeft:'5px'}}>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )
                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >

                                                <h2 style={{
                                                  // padding:`0 ${itemMarginsLeftRight}px`,
                                                  fontSize:'22.2px',fontFamily:'FuturaRoundBold'}}>entrées <span style={{marginLeft:'5px'}}>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,
                                                    }}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                        
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'45px',
                                                    // padding:`0 ${itemMarginsLeftRight}px`
                                                  }}
                                    >

                                                <h2 style={{fontSize:'22.2px',fontFamily:'FuturaRoundBold'}}>desserts <span style={{marginLeft:'5px'}}>choose one</span></h2>
                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${itemMarginsTopBottom}px 0`,
                                                        width:'50%'}}
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                        data.name,
                                                                        data.price,
                                                                        data.description,
                                                                        data.allergiesComplete
                                                                        )}                                                                                                                            
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <br/>
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                <div style={{color:'red'}}>{data.allergiesComplete}</div>
                                            </div>


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer' style={{marginTop:'0px'}}>

                                        <div style={{   display:'flex',
                                                        alignItems:'flex-end',
                                                        justifyContent:'space-between',
                                                        //  padding:`0 ${itemMarginsLeftRight}px`
                                                        }}>
                                            <div style={{fontFamily:'FuturaMedium',fontSize:'17.5px'}}>manuel romero, chef</div>
                                            <div style={{fontFamily:'MinionBoldItalic'}}>
                                                dairy (d), nuts (n), gluten (gl)

                                            </div>
                                        </div>

                                        <hr style={{marginTop:'5px',marginBottom:'5px'}}/>
                                        {/* <br/> */}
                                        <div style={{   display:'flex',
                                                        justifyContent:'space-between',
                                                        // padding:`0 ${itemMarginsLeftRight}px`,
                                                        alignItems:'center'}}>

                                            
                                            
                                            <div style={{lineHeight:'15px',fontSize:'11.5px'}}>
                                                <span style={{fontWeight:'100'}}>    
                                                    consumer advisory: consumption of undercooked meat, poultry, eggs, or seafood may increase the risk of food-borne illnesses.
                                                </span>
                                                <br/>

                                                
                                                <span style={{fontFamily:'FuturaMedium'}}>
                                                    please alert your server if you have special dietary requirements before ordering: gl (gluten), d (dairy), n (nuts)
                                                </span>                                              
                                                <br/>

                                                <span style={{fontWeight:'100'}}>    
                                                    all menu items are subject to change according to seasonality and avilability
                                                </span>
                                                <br/>

                                                <span style={{fontWeight:'100'}}>    
                                                    to help us serve you better, we limit check spilitting to a maximum of three per table, thank you.
                                                </span>
                                                <br/>

                                            </div>

                                                <img    src='/qr-family-weekend.jpg' 
                                                    className='qr'
                                                    style={{marginLeft:'10px'}}
                                                    height='60px' />


                                        </div>
                                    </div>     
                                                               
                                </div>



                    


                    </div>                


                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                <QRfooter />

            </div>{/* .manager-page-wrapper */}
        </>
    )
}