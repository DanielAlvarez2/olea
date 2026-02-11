import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function TakeoutMenuFormat(){

    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    
    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
    const [takeoutFormatting, setTakeoutFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    const [takeoutItemMarginsTopBottom, setTakeoutItemMarginsTopBottom] = useState(0)
    const [takeoutItemMarginsLeftRight, setTakeoutItemMarginsLeftRight] = useState(0)

    useEffect(()=>{ 
                getTakeoutFormatting()
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
                    // console.log(json)
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

    function getTakeoutFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/takeout`)
                .then(res=>res.json())
                .then(json=>{
                    setTakeoutFormatting(json[0])
                    setPageMargin(json[0].pageMargin)
                    setTakeoutItemMarginsTopBottom(json[0].takeoutItemMarginsTopBottom)
                    setTakeoutItemMarginsLeftRight(json[0].takeoutItemMarginsLeftRight)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseTakeoutItemMarginsLeftRight(){
        if (takeoutItemMarginsLeftRight <= 0) return
        fetch(`${BASE_URL}/api/formats/takeout/decreaseTakeoutItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getTakeoutFormatting())
            .catch(err=>console.log(err))
    }

    function increaseTakeoutItemMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/takeout/increaseTakeoutItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getTakeoutFormatting())
            .catch(err=>console.log(err))
    }



    function decreaseTakeoutItemMarginsTopBottom(){
        if (takeoutItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/takeout/decreaseTakeoutItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getTakeoutFormatting())
            .catch(err=>console.log(err))
    }

    function increaseTakeoutItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/takeout/increaseTakeoutItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getTakeoutFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMargin(){
        if (pageMargin <= 0) return
        fetch(`${BASE_URL}/api/formats/takeout/decreasePageMargin`,{method:'PUT'})
        .then(()=>getTakeoutFormatting())
        .catch(err=>console.log(err))
    }

    
    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/takeout/increasePageMargin`,{method:'PUT'})
            .then(()=>getTakeoutFormatting())
            .catch(err=>console.log(err))
    }



    return(
        <>
            <div    className='manager-page-wrapper' 
                    style={{border:'1px solid red',
                            // color:'red'
                            }}>
                <ManagerNavbar page='takeout' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>takeout &gt; format</div>
                    <div className='main-menu'>






                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseTakeoutItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseTakeoutItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseTakeoutItemMarginsLeftRight} /></span>
                                        <span>menu item margins<br/>left & right &#8596;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseTakeoutItemMarginsLeftRight} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreasePageMargin} /></span>
                                        <span>page margin</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increasePageMargin} /></span>
                                    </div>
                                
                            <br/>




                                <div    className='dinner-menu-format' 
                                        style={{width:'8.5in',
                                                background:'white',
                                                padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                // backgroundImage:'url(scan-dinner-menu.jpg)',
                                                backgroundSize:'8.5in 14in',
                                                // color:'red',
                                                height:'10.955in',
                                                border:'1px solid black'}} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${takeoutItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`${takeoutItemMarginsTopBottom}px`}} />







                                        <div className='dessert-menu-front-content'
                                                style={{padding:`0px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >



                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%'}}        
                                            >
                                                <div className='cured-meats' style={{border:'1px solid #888'}}>
                                                    {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'cured meats').map(data=>{
                                                        return(
                                                            <div    key={data._id}
                                                                    style={{padding:`0 ${takeoutItemMarginsLeftRight}px`,
                                                                            margin:`${takeoutItemMarginsTopBottom}px 0`
                                                                    }}
                                                                    // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                    className='special'>
                                                            
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


                                                            </div>
                                                        )
                                                    })}
                                                </div>{/* .cured-meats */}














                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{padding:`0 ${takeoutItemMarginsLeftRight}px`,
                                                                        margin:`${takeoutItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


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
                                                                style={{padding:`0 ${takeoutItemMarginsLeftRight}px`,
                                                                        margin:`${takeoutItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                                <div    className='special' 
                                                        style={{border:'1px solid #888',
                                                                fontFamily:'serif',
                                                                padding:`${takeoutItemMarginsTopBottom}px ${takeoutItemMarginsLeftRight}px`,
                                                        }}
                                                                >
                                                    <span style={{fontFamily:'FuturaLight', fontSize:'20px'}}>
                                                        chef's tasting menu &nbsp; 
                                                    </span> 
                                                    <span style={{fontStyle:'italic'}}>
                                                        six courses 
                                                        {tastingMenuPrices.tastingMenuPrice != 0 ? <>
                                                                                                        <span style={{fontWeight:'900'}}> {tastingMenuPrices.tastingMenuPrice}
                                                                                                        </span> / person
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
                                                    padding:`0 ${takeoutItemMarginsLeftRight}px`}}
                                    >

                                        sides
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        marginBottom:`${takeoutItemMarginsTopBottom}px`,
                                                        border:'1px solid #888'}}>

                                        
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'sides').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{flexBasis:'50%',
                                                                        padding:`0 ${takeoutItemMarginsLeftRight}px`,
                                                                        margin:`${takeoutItemMarginsTopBottom/2}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                        </div>












                                    <div className='dessert-footer'>
                                        
                                        
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
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

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}