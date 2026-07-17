import {useState,useEffect} from 'react'
import './DinnerMenuPrintArea.css'

export default function DinnerMenuPrintArea({dinnerItemMarginsTopBottom,dinnerItemMarginsLeftRight}){


    const [allDinnerMenuItems, setAllDinnerMenuItems] = useState([])
    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    

    const [dinnerFormatting, setDinnerFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
    // const [dinnerItemMarginsTopBottom, setDinnerItemMarginsTopBottom] = useState(0)
    // const [dinnerItemMarginsLeftRight, setDinnerItemMarginsLeftRight] = useState(0)
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

    return(
        <div className='dinner-menu-print-area-wrapper'
                // style={{display:'flex',flexDirection:'column',alignItems:'center'}}
        >
            <div    
                    // className="safari-print-area-legal safari-print-height-legal paper-menu"
                    style={{
                            // border:'1px solid red',
                            height:'14in',
                            width:'8.5in',
                            paddingLeft:'11mm',
                            paddingRight:'11mm',
                            paddingTop:'10mm',
                            backgroundSize:'8.5in',
                            backgroundPosition:'5px -32px',
                            // backgroundImage:'url("scan-dinner-menu.jpg")',
                            background:'white',
                            position:'relative',
                            // color:'red'
                            }}>
                <div className="" style={{  fontSize:'53px',
                                                // color:'red',
                                                lineHeight:'1.2',
                                                marginBottom:'-5px',
                                                display:'block !important',
                                                paddingLeft:'5mm',
                                                // paddingLeft:`${dinnerItemMarginsLeftRight}px`
                                                }}>
                    olea
                </div>
                <div style={{width:'100%',borderTop:'1px solid #888'}}></div>
                <br/>

                <div    style={{display:'flex'}}
                        className="dinner-menu-flexbox-top">
                    <div className="dinner-flexbox-top-left" style={{width:'50%'}}>
                                                
                                                <div className='cured-meats' style={{border:'1px solid #888'}}>
                                                    {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'cured meats').map(data=>{
                                                        return(
                                                            <div    key={data._id}
                                                                    style={{
                                                                            paddingLeft:`5mm`,
                                                                            paddingRight:`${dinnerItemMarginsLeftRight}px`,
                                                                            margin:`${dinnerItemMarginsTopBottom}px 0`
                                                                    }}
                                                                    // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                    className='special'>
                                                            
                                                                <span className='name-dinner'>{data.name} </span>
                                                                {data.allergiesAbbreviated &&   <>
                                                                                                    <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                                </>
                                                                }
                                                                {data.description && <br/>}
                                                                <span>
                                                                    {data.descriptionIntro && <><br/><span className='dinner-print-description-intro'>{data.descriptionIntro}; </span></>}
                                                                    {data.description && <span className='dinner-print-description'> {data.description}</span>}
                                                                </span>
                                                                
                                                                <span className='price-dinner-print'> &nbsp;{data.price}</span> 
                                                                {data.postDescription && <div className='dinner-print-description-intro'>{data.postDescription}</div>}


                                                            </div>
                                                        )
                                                    })}
                                                </div>{/* .cured-meats */}

                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{
                                                                        paddingLeft:`5mm`,
                                                                        paddingRight:`${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            <span>
                                                                {data.descriptionIntro && <><br/><span className='dinner-print-description-intro'>{data.descriptionIntro}; </span></>}
                                                                {data.description && <span className='dinner-print-description'> {data.description}</span>}
                                                            </span>
                                                            
                                                            <span className='price-dinner-print'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div className='dinner-print-description-intro'>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}



                    </div>{/* .dinner-flexbox-top-left */}
                    
                    <div className="dinner-flexbox-top-right" style={{width:'50%'}}>
                                                
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{
                                                                        paddingLeft:`5mm`,
                                                                        paddingRight:`${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            <span>
                                                                {data.descriptionIntro && <><br/><span className='dinner-print-description-intro'>{data.descriptionIntro}; </span></>}
                                                                {data.description && <span className='dinner-print-description'> {data.description}</span>}
                                                            </span>
                                                            
                                                            <span className='price-dinner-print'> &nbsp;{data.price}</span> 
                                                            <span className='dinner-print-description'>
                                                                {data.postDescription && <div className='dinner-print-description-intro'>{data.postDescription}</div>}
                                                            </span>{/* .dinner-print-description */}


                                                        </div>
                                                    )
                                                })}







                                                <div    className='special' 
                                                        style={{border:'1px solid #888',
                                                            // color:'red',
                                                                fontFamily:'MinionProMediumItalic',
                                                                paddingTop:`${dinnerItemMarginsTopBottom}px`, 
                                                                paddingBottom:`${dinnerItemMarginsTopBottom}px`, 
                                                                // paddingLeft:`${dinnerItemMarginsLeftRight}px`,
                                                                paddingLeft:'5mm'
                                                        }}
                                                                >
                                                    <span className='dinner-print-chefs-tasting-menu'>
                                                        chef&lsquo;s tasting menu &nbsp; 
                                                    </span> 
                                                    {/* <br/> */}
                                                    <span className='dinner-print-description-intro'>
                                                        <span style={{fontStyle:'italic'}}>
                                                            six courses
                                                            {tastingMenuPrices.tastingMenuPrice != 0 ? <>
                                                                                                            <span className='price-dinner-print'> {tastingMenuPrices.tastingMenuPrice}</span> / person
                                                                                                        </>
                                                                                                    : ''}
                                                        </span>
                                                        <br/>
                                                        <span className='minion-bold-italic'>
                                                            48-hours notice and reservation required<br/>
                                                        </span>
                                                        <span className='dinner-print-description'>
                                                        full table participation<br/>
                                                        available tuesday through thursday<br/>
                                                        </span>
                                                        <span style={{fontStyle:'italic'}}>
                                                            optional wine pairing available 
                                                            {tastingMenuPrices.winePairingPrice != 0 ? <>
                                                                                                            <span className='price-dinner-print'> {tastingMenuPrices.winePairingPrice}</span> / person
                                                                                                        </>
                                                                                                    : ''}
                                                        </span>
                                                    </span>{/* .dinner-print-description */}
                                                </div>


                    </div>{/* .dinner-flexbox-top-right */}
                </div>{/* .dinner-menu-flexbox-top */}





















                
                <div className='sides-heading'
                        style={{
                                paddingLeft:`${dinnerItemMarginsLeftRight}px`,
                                paddingLeft:'5mm',
                                // marginBottom:'10px'
                                position:'relative',
                                bottom:'10px'
                            }}
                >
                    sides
                </div>

                <div className='flexbox-sides'
                        style={{display:'flex',
                                flexWrap:'wrap',
                                border:'1px solid #888'
                        }}
                >
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'sides').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{flexBasis:'50%',
                                                                        paddingLeft:`5mm`,
                                                                        paddingRight:`${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom/2}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            <span>
                                                                {data.descriptionIntro && <><br/><span className='dinner-print-description-intro'>{data.descriptionIntro}; </span></>}
                                                                {data.description && <span className='dinner-print-description'> {data.description}</span>}
                                                            </span>
                                                            
                                                            <span className='price-dinner-print'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div className='dinner-print-description-intro'>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}
                    
                </div>{/* .flexbox-sides */}




                <div style={{position:'absolute',
                                bottom:'4mm',
                                left:'0',
                                paddingLeft:'11mm',
                                paddingRight:'11mm',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'100%',
                                zoom:'inherit',
                                display:'flex'}}>
                    <div    className='chef-name-dinner'
                            style={{textDecoration:'underline',textUnderlineOffset:'5px'}}>manuel romero, chef</div>
                    <div className='dinner-menu-print-area-legal' 
                    // style={{width:'61%'}}
                    >
                        consumer advisory: consumption of undercooked meat, poultry, 
                        eggs, or seafood may increase the risk of food-borne illnesses. 
                        all menu items are subject to change according to seasonality 
                        and availability<br/>
                        <span style={{fontWeight:'900'}}>
                        please alert your server if you have special dietary requirements before ordering<br/>
                        <span>gl (gluten), d (dairy), n (nuts)</span>
                        </span>
                    </div>
                    <img src='qr-dinner.png' height='50px' width='50px' />
                </div>
            </div>{/* .safari-print-area-legal */}
            
        {/* .dinner-menu-print-area-wrapper */}
        </div>
    )
}