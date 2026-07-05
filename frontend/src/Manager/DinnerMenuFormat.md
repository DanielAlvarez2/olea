                    <div className='main-menu' style={{paddingBottom:'0'}}>






                                
                            <br/>
















                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseDinnerItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseDinnerItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseDinnerItemMarginsLeftRight} /></span>
                                        <span>menu item margins<br/>left & right &#8596;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseDinnerItemMarginsLeftRight} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    justifyContent:'center',
                                                    // border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreasePageMargin} /></span>
                                        <span>page margin</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increasePageMargin} /></span>
                                    </div>
















                            
                                <div style={{   height:'7mm',
                                                position:'relative',
                                                right:'7mm',
                                                width:'204mm',
                                                background:'white'}} className='no-print'></div>
                                <div    className='dinner-menu-format paper-menu' 
                                        style={{padding:`${pageMargin/2}px ${pageMargin}px 0px`,
                                                border:'none',
                                                position:'relative'}} 
                                >
                                    <div style={{   
                                                    height:'313mm',
                                                    position:'absolute',
                                                    top:'0',
                                                    left:'-7mm',
                                                    width:'7mm',
                                                    background:'white'}}></div>
                                    <div style={{   height:'313mm',
                                                    position:'absolute',
                                                    top:'0',
                                                    right:'-7mm',
                                                    width:'7mm',
                                                    background:'white'}}></div>
                                    
                                    <div id='footer-top'>
                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        // color:'red',
                                                        padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`${dinnerItemMarginsTopBottom}px`}} />







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
                                                                    style={{padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                            margin:`${dinnerItemMarginsTopBottom}px 0`
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
                                                        
                                                            <span className='name'>{data.name} </span>
                                                            {data.allergiesAbbreviated &&   <>
                                                                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>               
                                                                                            </>
                                                            }
                                                            {data.descriptionIntro && <><br/><span style={{fontStyle:'italic'}}>{data.descriptionIntro}; </span></>}
                                                            {data.description && <span> {data.description}</span>}
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
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
                                                                style={{padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom}px 0`
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
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                                <div    className='special' 
                                                        style={{border:'1px solid #888',
                                                                fontFamily:'serif',
                                                                padding:`${dinnerItemMarginsTopBottom}px ${dinnerItemMarginsLeftRight}px`,
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
                                            
                                            </div>{/* id='dinner-menu-right' */}

















                                            
                                            
                                            



                                            




                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            









                                        </div>
                                    </div>



                                    <div style={{   fontSize:'25px',
                                                    padding:`0 ${dinnerItemMarginsLeftRight}px`}}
                                    >

                                        sides
                                    </div>




                                        <div style={{   display:'flex',
                                                        flexWrap:'wrap',
                                                        marginBottom:`${dinnerItemMarginsTopBottom}px`,
                                                        border:'1px solid #888'}}>

                                        
                                                {allDinnerMenuItems.filter(item=>item.sequence && item.section == 'sides').map(data=>{
                                                    return(
                                                        <div    key={data._id}
                                                                style={{flexBasis:'50%',
                                                                        padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                                        margin:`${dinnerItemMarginsTopBottom/2}px 0`
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
                                                            
                                                            <span className='price-specials'> &nbsp;{data.price}</span> 
                                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}


                                                        </div>
                                                    )
                                                })}

                                        </div>












                                    <div className='dessert-footer'>
                                        
                                        
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

                                            <div className='chef name' style={{textDecoration:'underline'}}>manuel romero, chef</div>
                                            
                                            <img    src='qr-dinner.png' 
                                                    className='qr'
                                                    height='60px' />
                                            
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
                                <div style={{   height:'15mm',
                                                position:'relative',
                                                right:'7mm',
                                                width:'204mm',
                                                background:'white'}} className='no-print'></div>
                                <br className='no-print' />

                    </div>
