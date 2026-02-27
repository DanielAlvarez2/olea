import {Link} from 'react-router'
import {useState,useEffect} from 'react'
// import './Manager.css'
// import './DessertMenuFormat.css'
// import './DessertDrinksUpdate.css'
// import './DessertDrinksUpdate.css'
// import './DinnerMenuFormat.css'
import './Menu.css'
// import ManagerNavbar from './components/ManagerNavbar.jsx'



export default function Menu(){

    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    
    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
    const [dinnerFormatting, setDinnerFormatting] = useState([])
    // const [pageMargin, setPageMargin] = useState(0)
    const [dinnerItemMarginsTopBottom, setDinnerItemMarginsTopBottom] = useState(0)
    const [dinnerItemMarginsLeftRight, setDinnerItemMarginsLeftRight] = useState(0)
    useEffect(()=>{ 
                getDinnerFormatting()
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

    function getDinnerFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/dinner`)
                .then(res=>res.json())
                .then(json=>{
                    setDinnerFormatting(json[0])
                    setPageMargin(json[0].pageMargin)
                    setDinnerItemMarginsTopBottom(json[0].dinnerItemMarginsTopBottom)
                    setDinnerItemMarginsLeftRight(json[0].dinnerItemMarginsLeftRight)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseDinnerItemMarginsLeftRight(){
        if (dinnerItemMarginsLeftRight <= 0) return
        fetch(`${BASE_URL}/api/formats/dinner/decreaseDinnerItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getDinnerFormatting())
            .catch(err=>console.log(err))
    }

    function increaseDinnerItemMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/dinner/increaseDinnerItemMarginsLeftRight`, {method:'PUT'})
            .then(()=>getDinnerFormatting())
            .catch(err=>console.log(err))
    }



    function decreaseDinnerItemMarginsTopBottom(){
        if (dinnerItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/dinner/decreaseDinnerItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDinnerFormatting())
            .catch(err=>console.log(err))
    }

    function increaseDinnerItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/dinner/increaseDinnerItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDinnerFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMargin(){
        if (pageMargin <= 0) return
        fetch(`${BASE_URL}/api/formats/dinner/decreasePageMargin`,{method:'PUT'})
        .then(()=>getDinnerFormatting())
        .catch(err=>console.log(err))
    }

    
    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/dinner/increasePageMargin`,{method:'PUT'})
            .then(()=>getDinnerFormatting())
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
                    style={{border:'1px solid red',
                            // color:'red'
                            }}>

                <div style={{width:'100%'}} className='no-print'>
                    {/* <ManagerNavbar page='dinner' /> */}
                </div>
                    {/* <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}} className='no-print'>dinner &gt; print</div> */}
                    <div className='main-menu' style={{paddingBottom:0}}>






                        {/* <br className='no-print'/>
                                                       
                            <div style={{   border:'1px solid green',
                                            textAlign:'center',
                                            display:'grid',
                                            placeContent:'center',
                                            width:'100%'}}>

                            

                                <div    className='no-print print-btn' 
                                        style={{marginTop:'10px'}}
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div> */}

                            <br className='no-print'/>





                                <div    className='dinner-menu-format allergies-menu-dinner' 
                                        style={{width:'8.5in',
                                                background:'white',
                                                padding:`10px`,
                                                // backgroundImage:'url(scan-dinner-menu.jpg)',
                                                // backgroundSize:'8.5in 14in',
                                                // color:'red',
                                                height:'auto',
                                                // paddingBottom:'55px',
                                                border:'1px solid black'}} 
                                >
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`10px`}} />







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
                                                                    className='special item'>
                                                            
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
                                                                className='special item'>
                                                        
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
                                                                className='special item'>
                                                        
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
                                                                className='special item'>
                                                        
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