import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Menu.css'
import './MothersDay.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";
import QRnavbar from './components/QR-navbar.jsx'
import QRfooter from './components/QR-footer.jsx'



export default function MothersDay(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    


    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getAnnualEventsMenuItems(),[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    const event = "Mother's Day"

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0].MothersDay))
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



    function showModal(pic,name,description,allergiesComplete){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        document.querySelector('.modal-description').innerHTML = description   
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete    
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal-allergies-complete').innerHTML = ''
    }






















    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >

                    <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
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
                                    </div>
                                    <span className='modal-description'></span>
                                    <div className='modal-allergies-complete'></div>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                    </div>{/* .modal */}

                    
                    <div className='main-menu' style={{paddingBottom:0}}>






                                










                        <br className='no-print'/>
                                                       

                            <br className='no-print'/>








                                <div    className='dinner-menu-format' 
                                        style={{
                                            // padding:`${mothersDayPageMargin/2}px ${mothersDayPageMargin}px 0px`,
                                                // backgroundImage:"url('/scan-mothers-day.png')",
                                                backgroundSize:'8.5in',
                                                // color:'blue',
                                                height:'auto',
                                                
                                            }} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'blue',
                                                        // padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        padding:'0',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr 
                                            // style={{background:'blue',border:'none',height:'1px'}}
                                        // style={{marginBottom:`${mothersDayItemMarginsTopBottom}px`}} 
                                        />



                                        <div style={{marginTop:'28px',
                                            // padding:`0 ${mothersDayItemMarginsLeftRight}px`
                                            }}>
                                            <h2 style={{fontSize:'29px'}}>happy mother's day!</h2>
                                            <br/>
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'20px',fontWeight:'900'}}>${annualEventPrice} per person; three courses</span>
                                                <br/>
                                                <span style={{fontSize:'15px'}}>(excludes beverages, tax, and gratuity)</span>
                                            </div>
                                        </div>

                                        <br/>

                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >












                                                <h2>appetizers <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                // style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                //         margin:`${mothersDayItemMarginsTopBottom}px 0`,                                            
                                                //     }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                {data.allergiesComplete && <div style={{color:'red'}}>{data.allergiesComplete}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            </div>





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%'}}
                                            >

                                                <h2>entrées <span>choose one</span></h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                // style={{padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                //         margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                //     }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div className='post-description'>{data.postDescription}</div>}
                                                {data.allergiesComplete && <div style={{color:'red'}}>{data.allergiesComplete}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   marginTop:'0px',
                                                    // padding:`0 ${mothersDayItemMarginsLeftRight}px`
                                                    }}
                                    >

                                                <h2>desserts <span>choose one</span></h2>
                                        
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                    data.name,
                                                                    data.description,
                                                                    data.allergiesComplete)}
                                                
                                                style={{
                                                        // padding:`0 ${mothersDayItemMarginsLeftRight}px`,
                                                        // margin:`${mothersDayItemMarginsTopBottom}px 0`,
                                                        width:'50%'}}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span className='description'> {data.description}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                                {data.allergiesComplete && <div style={{color:'red'}}>{data.allergiesComplete}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

                                        </div>












                                    <div className='dessert-footer'>

                                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                            <div className='chef-name'>manuel romero, chef</div>
                                            <div className='allergy-explanations'>(gl) gluten, (n) nuts, (d) dairy</div>
                                        </div>

                                        <hr
                                            // style={{background:'blue',border:'none',height:'1px'}}
                                        />
                                        
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                                            
                                            {/* <img src='qr-dinner.png' height='60px' /> */}
                                            
                                            <div>
                                                <span style={{fontWeight:'100',fontSize:'13.2px'}}>
                                                    <br/><br/>
                                                    consumer advisory: consumption of undercooked meat, poultry, 
                                                    eggs, or seafood may increase the risk of food-borne illnesses.
                                                </span><br/>

                                                
                                                <span style={{fontWeight:'900',fontSize:'13px'}}>
                                                    please alert your server if you have special dietary requirements.
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>                                </div>



                    </div>

                                                       
                                    <br className='no-print'/>
                                    <br className='no-print'/>
                                    


            </div>{/* .manager-page-wrapper */}
        </>
    )
}