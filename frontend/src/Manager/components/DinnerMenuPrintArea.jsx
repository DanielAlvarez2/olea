import {useState,useEffect} from 'react'


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
        <>
            <div className='no-print' style={{background:'white',width:'204mm',height:'7mm'}}></div>
            <div    className="safari-print-area-legal safari-print-height-legal paper-menu"
                    style={{
                            // border:'1px solid red',
                            width:'190mm',
                            backgroundSize:'204mm',
                            backgroundPosition:'-50px -37px',
                            backgroundImage:'url("scan-dinner-menu.jpg")',
                            background:'white',
                            position:'relative',
                            // color:'red'
                            }}>
                <div    className='no-print safari-print-height-legal' 
                        style={{width:'7mm',background:'white',position:'absolute',top:'0',left:'-7mm'}}></div>
                <div    className='no-print safari-print-height-legal' 
                        style={{width:'7mm',background:'white',position:'absolute',top:'0',right:'-7mm'}}></div>
                <div className="logo" style={{  fontSize:'50px',
                                                // color:'red',
                                                lineHeight:'1.2',
                                                marginBottom:'-10px',
                                                paddingLeft:`${dinnerItemMarginsLeftRight}px`}}>
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
                                                                    style={{padding:`0 ${dinnerItemMarginsLeftRight}px`,
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
                                                                {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                                {data.description && <span> {data.description}</span>}
                                                                
                                                                <span className='price-specials'> &nbsp;{data.price}</span> 
                                                                {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                            </div>
                                                        )
                                                    })}
                                                </div>{/* .cured-meats */}

                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}



                    </div>{/* .dinner-flexbox-top-left */}
                    
                    <div className="dinner-flexbox-top-right" style={{width:'50%'}}>
                                                                        {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}







                                                <div    className='special' 
                                                        style={{border:'1px solid #888',
                                                                fontFamily:'serif',
                                                                paddingTop:`${dinnerItemMarginsTopBottom}px`, 
                                                                paddingBottom:`${dinnerItemMarginsTopBottom}px`, 
                                                                paddingLeft:`${dinnerItemMarginsLeftRight}px`,
                                                        }}
                                                                >
                                                    <span style={{fontFamily:'FuturaLight', fontSize:'20px'}}>
                                                        chef's tasting menu &nbsp; 
                                                    </span> <br/>
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


                    </div>{/* .dinner-flexbox-top-right */}
                </div>{/* .dinner-menu-flexbox-top */}





















                
                <div className='sides-heading'
                        style={{paddingLeft:`${dinnerItemMarginsLeftRight}px`,
                                fontWeight:'100',
                                fontSize:'25px'}}
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
                                                                        padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom/2}px 0`
                                                                }}
                                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                                className='special'>
                                                        
                                                            <span className='name-dinner'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-dinner-print'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}
                    
                </div>{/* .flexbox-sides */}




                <footer style={{position:'absolute',
                                bottom:'0',
                                justifyContent:'space-between',
                                alignItems:'center',
                                width:'100%',
                                display:'flex'}}>
                    <div    className='chef-name-dinner'
                            style={{textDecoration:'underline',textUnderlineOffset:'5px'}}>manuel romero, chef</div>
                    <div style={{fontSize:'11px',width:'480px'}}>
                        consumer advisory: consumption of undercooked meat, poultry, 
                        eggs, or seafood may increase the risk of food-borne illnesses
                        all menu items are subject to change according to seasonality 
                        and availability<br/>
                        <span style={{fontWeight:'900'}}>
                        please alert your server if you have special dietary requirements before ordering<br/>
                        <span>gl (gluten), d (dairy), n (nuts)</span>
                        </span>
                    </div>
                    <img src='qr-dinner.png' height='60px' width='60px' />
                </footer>
            </div>{/* .safari-print-area-legal */}
            <div className='no-print' style={{background:'white',height:'16mm',width:'204mm'}}></div>
        </>
    )
}