import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import './MothersDayFormat.css'
import './CommencementFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { PiArrowCircleDownDuotone } from "react-icons/pi";
import { PiArrowCircleUpDuotone } from "react-icons/pi";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { PiArrowCircleRightDuotone } from "react-icons/pi";



export default function RestaurantWeeksFallFormatPrint(){

    const [annualEventPrice, setAnnualEventPrice] = useState(0)      
    const [winePairingPrice, setWinePairingPrice] = useState(0)    
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])    
    const [formatting, setFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    const [RightMenuItemMarginsTopBottom, setRightMenuItemMarginsTopBottom] = useState(0)
    const [LeftMenuItemMarginsTopBottom, setLeftMenuItemMarginsTopBottom] = useState(0)
    const [rightMenuItemMarginRight, setRightMenuItemMarginRight] = useState(0)
    const [logoImageURL, setLogoImageURL] = useState('')
    const [logoHeight, setLogoHeight] = useState('')
    const [logoRight, setLogoRight] = useState('')
    const [logoTop, setLogoTop] = useState('')

    useEffect(()=>getFormatting())
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getWinePairingPrice(),[])    
    useEffect(()=>getAnnualEventsMenuItems(),[])
    useEffect(()=>getLogoImage(),[])

    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    // const event = "Mother's Day"
    const event = "Restaurant Weeks: Fall"
    const event_url = 'restaurant-weeks-fall'
    const event_obj = 'RestaurantWeekFall'

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

    function getWinePairingPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setWinePairingPrice(json[0].RestaurantWeekFallWinePairing))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getLogoImage(){
        fetch(`${BASE_URL}/api/events/website-image/restaurant-week-fall-logo-image`)
            .then(res=>res.json())
            .then(data=>{
                setLogoImageURL(data.cloudinary_secure_URL)
                // setLogoImageID(data.cloudinaryPublicID)
            })
            .catch(err=>console.log(err))
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
                    setRightMenuItemMarginsTopBottom(json[0].RightMenuItemMarginsTopBottom)
                    setRightMenuItemMarginRight(json[0].rightMenuItemMarginRight)
                    setLeftMenuItemMarginsTopBottom(json[0].LeftMenuItemMarginsTopBottom)
                    setLogoHeight(json[0].logoHeight)
                    setLogoRight(json[0].logoRight)
                    setLogoTop(json[0].logoTop)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function increaseLogoHeight(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/increase-logo-height`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }    

    function decreaseLogoHeight(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/decrease-logo-height`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }    

    function increaseLogoRight(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/increase-logo-right`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }

    function increaseLogoTop(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/increase-logo-top`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }

    function decreaseLogoTop(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/decrease-logo-top`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }

    function decreaseLogoRight(){
      try{
        fetch(`${BASE_URL}/api/formats/${event_url}/decrease-logo-right`)
          .then(()=>getFormatting())
          .catch(err=>console.log(err))
      }catch(err){
        console.log(err)
      }
    }



    function RightMenuDecreaseItemMarginsTopBottom(){
        if (RightMenuItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/${event_url}/RightMenuDecreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function RightMenuIncreaseItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/${event_url}/RightMenuIncreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function LeftMenuIncreaseItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/${event_url}/LeftMenuIncreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function rightMenuIncreaseItemMarginRight(){
        fetch(`${BASE_URL}/api/formats/${event_url}/rightMenuIncreaseItemMarginRight`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function rightMenuDecreaseItemMarginRight(){
        if(rightMenuItemMarginRight <= 0) return
        fetch(`${BASE_URL}/api/formats/${event_url}/rightMenuDecreaseItemMarginRight`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function LeftMenuDecreaseItemMarginsTopBottom(){
        if (LeftMenuItemMarginsTopBottom <= 0) return        
        fetch(`${BASE_URL}/api/formats/${event_url}/LeftMenuDecreaseItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getFormatting())
            .catch(err=>console.log(err))
    }

    function printPage(){
        if(navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")){
            alert(`
WARNING: 

Printing from Safari Browser is not supported.
Please switch to a different browser to proceed.
`)
            return
        }else{
            window.print()
        }
    }




    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                <div style={{width:'100%'}} className='no-print'>
                    <ManagerNavbar page='events' />
                </div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>restaurant weeks: fall &gt; format/print</div>
                    
                    <br className='no-print'/>

                              {logoImageURL && 
                              
                              
                                <div className='no-print'>

                                    <h2 style={{fontSize:'23px',fontFamily:'FuturaRoundBold',width:'100%',textAlign:'center'}}>
                                    restaurant week logo</h2><br/>

                                    <div style={{display:'flex',alignItems:'center',gap:'75px'}}>


                                    <div style={{display:'flex',alignItems:'center'}}>
                                      <span><PiArrowCircleLeftDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                      onClick={increaseLogoRight} 
                                                                      /></span>
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                          <span><PiArrowCircleUpDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                        onClick={decreaseLogoTop} 
                                                                        /></span>
                                          <span>position</span>
                                          <span><PiArrowCircleDownDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                        onClick={increaseLogoTop} 
                                                                        /></span>
                                        </div>

                                      <span><PiArrowCircleRightDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                      onClick={decreaseLogoRight} 
                                                                      /></span>                                                                                                            
                                    </div>

                                      <div  className='no-print'
                                            style={{   textAlign:'center',
                                                      display:'flex',
                                                      gap:'10px',
                                                      background:'#eee',
                                                      justifyContent:'center',
                                                      // border:'1px solid green',
                                                      alignItems:'center'}}>
                                          <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                      onClick={decreaseLogoHeight} 
                                                                      /></span>
                                          <span>size</span>
                                          
                                          
                                          <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                      onClick={increaseLogoHeight} 
                                                                      /></span>
                                      </div>
                                    </div>                         


                                </div>

                              }

                    <br className='no-print'/>
                    <div className='main-menu' style={{paddingBottom:0,display:'flex',alignItems:'center'}}>






                                
                                <div className='no-print' style={{paddingRight:'10px'}}>

                                    <h2 style={{fontSize:'23px',fontFamily:'FuturaRoundBold',width:'100%',textAlign:'center'}}>
                                    prix fixe</h2><br/>
                                                                  
                                    <div  className='no-print'
                                          style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={LeftMenuDecreaseItemMarginsTopBottom} 
                                                                    /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={LeftMenuIncreaseItemMarginsTopBottom} 
                                                                    /></span>
                                    </div>


                                    <div    className='no-print print-btn' 
                                        style={{margin:'30px auto',background:'limegreen',width:'220px'}}
                                        onClick={printPage}>
                                        print
                                    </div>                                    
                                </div>










                                    









                                <div    className='dinner-menu-format paper-menu' 
                                        style={{
                                                width:'8.5in',
                                                height:'14in',
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
                                                            display:'inline-block',
                                                            cursor:'default',
                                                            fontSize:'57px'}}>olea</span>
                                            <span style={{position:'relative'}}>
                                              <img  id='restaurant-week-fall-logo' 
                                                    style={{height:`${logoHeight}px`,position:'absolute',left:`${logoRight}px`,bottom:`${logoTop}px`}}
                                                    src={logoImageURL ? logoImageURL : null}  />                                              
                                            </span>

                                        <div style={{borderTop:'1px solid #888',margin:'5px 0'}}></div>
















                                        <div className='dessert-menu-front-content'
                                                style={{padding:`10px 0px 0px 0px`,
                                                        display:'flex'}}
                                                // style={{paddingRight:'83px'}}
                                                >







                                            <div    id='dinner-menu-left'
                                                    style={{width:'50%',border:'1px solid black',padding:'10px',paddingBottom:'0'}}        
                                            >

                                        <div >
                                            <h2 style={{fontSize:'22px'}}>New Haven Restaurant Week</h2>
                                            November 1-14, 2026
                                            <br/><br/>
                                            <div style={{fontFamily:'serif'}}>
                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>${annualEventPrice} three courses</span>
                                                <br />
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'20px'}}>(one prix fixe menu per person, no substitutions, beverage, tax, and gratuity not included)</span>
                                                <br/>

                                                <br/>
                                                <span style={{fontSize:'18.7px',fontWeight:'900'}}>add ${winePairingPrice} for wine pairing</span>
                                                <br />
                                                <span style={{fontSize:'15.2px',fontStyle:'italic',lineHeight:'20px'}}>(wine 3 oz. / dessert 1.5 oz.)</span>
                                            </div>
                                        </div>
                                        <br/>
<div>{/* left-menu-flexbox */}


                            <div>{/* appetizers */}
                                                <div style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',fontFamily:'FuturaMedium',fontWeight:'bold'}}>appetizers <span style={{marginLeft:'5px',fontFamily:'serif',fontSize:'15.6px',fontWeight:'900'}}>
                                                        choose one</span></div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                    // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
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
                                               
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>
                                            </div>


                                        </div>
                                    )
                                })}

                            </div>{/* appetizers */}





                            <div>{/* entrées */}
                                                <div style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',fontFamily:'FuturaMedium',fontWeight:'bold'}}>entrées <span style={{marginLeft:'5px',fontFamily:'serif',fontSize:'15.6px',fontWeight:'900'}}>
                                                        choose one</span></div>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                    // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,
                                                    }}
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
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>                                                
                                            </div>


                                        </div>
                                    )
                                })}

                            </div>{/* entrées */}






                            <div>{/* desserts */}
                                    <div style={{   marginTop:'0px',
                                                    // padding:`0 ${itemMarginsLeftRight}px`
                                                }}
                                    >

                                                <div style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',fontFamily:'FuturaMedium',fontWeight:'bold'}}>desserts <span style={{marginLeft:'5px',fontFamily:'serif',fontSize:'15.6px',fontWeight:'900'}}>
                                                        choose one</span></div>
                                        
                                    </div>


                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'prix fixe - desserts' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                    // paddingRight:`${itemMarginsLeftRight}px`,
                                                        margin:`${LeftMenuItemMarginsTopBottom}px 0`,
                                                      }}
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
                                                <div><span style={{fontWeight:'900'}}>wine: </span>{data.wineGrapes}, <span style={{fontWeight:'900'}}>{data.wineName}</span>, {data.wineVintage}, {data.wineDescription}</div>                                                
                                            </div>


                                        </div>
                                    )
                                })}

                            </div>{/* desserts */}

</div>{/* left-menu-flexbox */}

                                            </div>{/* #diner-menu-left */}





















                                            <div    id='dinner-menu-right'
                                                    style={{width:'50%',paddingTop:'5px'}}
                                            >







                                            <h2 style={{fontSize:'23px'}}>dinner menu</h2>
                                                <h2 style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',
                                                    fontFamily:'FuturaMedium'
                                                    }}>appetizers</h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - appetizers' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                        paddingRight:`${rightMenuItemMarginRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}















                                                <h2 style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',
                                                    fontFamily:'FuturaMedium'
                                                    }}>entrées</h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - entrées' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                        paddingRight:`${rightMenuItemMarginRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}

















                                                <h2 style={{
                                                    // padding:`0 ${itemMarginsLeftRight}px`,
                                                    fontSize:'22.2px',
                                                    fontFamily:'FuturaMedium'
                                                    }}>sides</h2>

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'à la carte - sides' && item.event == event).map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                style={{
                                                        paddingRight:`${rightMenuItemMarginRight}px`,
                                                        margin:`${RightMenuItemMarginsTopBottom}px 0`,                                            
                                                    }}
                                                className='special'>
                                            
                                            {/* {data.sequence}<br/> */}
                                            <div>
                                                <span style={{fontFamily:'FuturaMedium',fontSize:'15.6px'}}>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                
                                                {data.descriptionIntro && 
                                                    <span style={{fontSize:'15.3px',fontStyle:'italic'}}> {data.descriptionIntro};</span>
                                                }
                                                <span style={{fontSize:'15.3px'}}> {data.description}</span>
                                                <span style={{fontWeight:'900'}}> &nbsp;{data.price}</span>
                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            </div>


                                        </div>
                                    )
                                })}






                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>







                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        // marginBottom:`${mothersDayItemMarginsTopBottom}px`,
                                                        // border:'1px solid #888'
                                                        }}>

                                        

                                        </div>












                                    <div className='dessert-footer' style={{marginTop:'20px'}}>

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

                                        <div style={{borderTop:'1px solid #888',margin:'5px 0'}}></div>
                                        {/* <hr style={{marginTop:'5px',marginBottom:'5px'}}/> */}
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

                                                <img    src='/qr-restaurant-week-fall.jpg' 
                                                    className='qr'
                                                    style={{marginLeft:'10px'}}
                                                    height='60px' />


                                        </div>
                                    </div>     
                                                               
                                </div>



                    

                                <div className='no-print' style={{paddingLeft:'10px'}}>

                                    <h2 style={{fontSize:'23px',fontFamily:'FuturaRoundBold',width:'100%',textAlign:'center'}}>
                                    à la carte</h2><br/>
                                                                  

                                    <div  className='no-print'
                                          style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={rightMenuDecreaseItemMarginRight} /></span>
                                        <span>menu items<br/>margin right &larr;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={rightMenuIncreaseItemMarginRight} /></span>
                                    </div>

                                    <div  className='no-print'
                                          style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={RightMenuDecreaseItemMarginsTopBottom} 
                                                                    /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={RightMenuIncreaseItemMarginsTopBottom} /></span>
                                    </div>

                                    <div    className='no-print print-btn' 
                                        style={{margin:'30px auto',background:'limegreen',width:'220px'}}
                                        onClick={printPage}>
                                        print
                                    </div>                                    
                                </div>

                    </div>                


                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>
                            <br className='no-print'/>


            </div>{/* .manager-page-wrapper */}
        </>
    )
}