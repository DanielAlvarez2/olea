import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


export default function SpecialsMenuPrint(){
    const [allSpecials, setAllSpecials] = useState([])
    const [specialsFormatting, setSpecialsFormatting] = useState([])
    const [pageMarginsLeftRight, setPageMarginsLeftRight] = useState(0)
    const [menuItemMarginsTopBottom, setMenuItemMarginsTopBottom] = useState(0)
    const [letterPaper, setLetterPaper] = useState(true)
    const [showLegalText, setShowLegalText] = useState(true)
    const [doubleSided, setDoubleSided] = useState(false)
    const [front, setFront] = useState(true)
    useEffect(()=>getSpecialsFormatting(),[])
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

    function getSpecialsFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/specials`)
                .then(res=>res.json())
                .then(json=>{
                    console.log(json[0])
                    setSpecialsFormatting(json[0])
                    setPageMarginsLeftRight(json[0].pageMarginsLeftRight)
                    setMenuItemMarginsTopBottom(json[0].menuItemMarginsTopBottom)
                    setLetterPaper(json[0].letterPaper)
                    setShowLegalText(json[0].showLegalText)
                    setDoubleSided(json[0].doubleSided)
                })
                .catch(err=>console.log(err))
            
        }catch(err){
            console.log(err)
        }
    }

    function toggleFront(){
        setFront(prev=>!prev)
    }













    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red',padding:'0'}}>
                <div className='no-print'>
                    <ManagerNavbar page='specials' />
                </div>
                    <div    className='no-print'
                            style={{textAlign:'center',
                                    fontSize:'30px'}}>menu manager</div>
                    <div    className='no-print' 
                            style={{textAlign:'center',
                                    fontSize:'30px'}}>specials &gt; print</div>


                    <div className='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                flexDirection:'column',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                border:'1px solid green'
                                }}>


                        <div>
                            
                            {doubleSided &&                             
                                <div    className='no-print' 
                                        style={{display:'flex',
                                                gap:'10px',
                                                alignItems:'center'}}>
                                    <span>front</span>
                                    <span>
                                        {front ? 
                                                        <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFront} />
                                        : 
                                                        <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFront} />
                                        }
                                    </span>
                                    <span>back</span>
                                </div> 
                            }
                        </div>  

















                        <div style={{display:'flex'}}>

                            {front && 
                                <span style={{  width:'4.24in',
                                                height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                padding:`0 ${pageMarginsLeftRight}px`,
                                                display:'flex',
                                                flexDirection:'column',
                                                border:'1px solid red'}}>
                                    <div>
                                        <div    className='specials-h1'
                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                    </div>
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                        <div className='specials-h2'>appetizer</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                        <div className='specials-h2'>appetizers</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                        <div className='specials-h2'>dessert</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                        <div className='specials-h2'>desserts</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                        return(
                                            <div    key={data._id} 
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {showLegalText && 
                                                        <footer style={{marginTop:'auto',
                                                                        textAlign:'left',
                                                                        fontSize:'11px',
                                                                        paddingTop:'20px',
                                                                        fontFamily:'serif'}}>
                                                            Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                            or seafood may increase the risk of foodborne illnesses.<br/>
                                                            <span style={{fontWeight:'900'}}>
                                                            Please alert your server if you have special dietary requirements:<br/>
                                                            gl (gluten), d (dairy), n (nuts)</span>
                                                        </footer>
                                    }
                                </span>
                            }
                            {doubleSided && !front &&
                                            <span style={{  width:'4.24in',
                                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                            padding:`0 ${pageMarginsLeftRight}px`,
                                                            display:'flex',
                                                            flexDirection:'column',
                                                            border:'1px solid red'}}>
                                                <div>
                                                    
                                                    <div    className='specials-h1'
                                                            style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                                </div>





                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                                    <div className='specials-h2'>dessert</div>}
                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                                    <div className='specials-h2'>desserts</div>}

                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                                    return(
                                                        <div    key={data._id} 
                                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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














                                                {showLegalText && 
                                                                    <footer style={{marginTop:'auto',
                                                                                    textAlign:'left',
                                                                                    fontSize:'11px',
                                                                                    paddingTop:'20px',
                                                                                    fontFamily:'serif'}}>
                                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                                        <span style={{fontWeight:'900'}}>
                                                                        Please alert your server if you have special dietary requirements:<br/>
                                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                                    </footer>
                                                }
                                            </span>
                            }
                        
                            {front && 
                                <span style={{  width:'4.24in',
                                                height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                padding:`0 ${pageMarginsLeftRight}px`,
                                                display:'flex',
                                                flexDirection:'column',
                                                border:'1px solid red'}}>
                                    <div>
                                        <div    className='specials-h1'
                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                    </div>
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                        <div className='specials-h2'>appetizer</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                        <div className='specials-h2'>appetizers</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                        <div className='specials-h2'>dessert</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                        <div className='specials-h2'>desserts</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                        return(
                                            <div    key={data._id} 
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {showLegalText && 
                                                        <footer style={{marginTop:'auto',
                                                                        textAlign:'left',
                                                                        fontSize:'11px',
                                                                        paddingTop:'20px',
                                                                        fontFamily:'serif'}}>
                                                            Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                            or seafood may increase the risk of foodborne illnesses.<br/>
                                                            <span style={{fontWeight:'900'}}>
                                                            Please alert your server if you have special dietary requirements:<br/>
                                                            gl (gluten), d (dairy), n (nuts)</span>
                                                        </footer>
                                    }
                                </span>
                            }
                            {doubleSided && !front &&
                                            <span style={{  width:'4.24in',
                                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                            padding:`0 ${pageMarginsLeftRight}px`,
                                                            display:'flex',
                                                            flexDirection:'column',
                                                            border:'1px solid red'}}>
                                                <div>
                                                    
                                                    <div    className='specials-h1'
                                                            style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                                </div>





                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                                    <div className='specials-h2'>dessert</div>}
                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                                    <div className='specials-h2'>desserts</div>}

                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                                    return(
                                                        <div    key={data._id} 
                                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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














                                                {showLegalText && 
                                                                    <footer style={{marginTop:'auto',
                                                                                    textAlign:'left',
                                                                                    fontSize:'11px',
                                                                                    paddingTop:'20px',
                                                                                    fontFamily:'serif'}}>
                                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                                        <span style={{fontWeight:'900'}}>
                                                                        Please alert your server if you have special dietary requirements:<br/>
                                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                                    </footer>
                                                }
                                            </span>
                            }
                        
                        </div>

                        <div style={{display:'flex'}}>

                            {front && 
                                <span style={{  width:'4.24in',
                                                height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                padding:`0 ${pageMarginsLeftRight}px`,
                                                display:'flex',
                                                flexDirection:'column',
                                                border:'1px solid red'}}>
                                    <div>
                                        <div    className='specials-h1'
                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                    </div>
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                        <div className='specials-h2'>appetizer</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                        <div className='specials-h2'>appetizers</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                        <div className='specials-h2'>dessert</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                        <div className='specials-h2'>desserts</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                        return(
                                            <div    key={data._id} 
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {showLegalText && 
                                                        <footer style={{marginTop:'auto',
                                                                        textAlign:'left',
                                                                        fontSize:'11px',
                                                                        paddingTop:'20px',
                                                                        fontFamily:'serif'}}>
                                                            Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                            or seafood may increase the risk of foodborne illnesses.<br/>
                                                            <span style={{fontWeight:'900'}}>
                                                            Please alert your server if you have special dietary requirements:<br/>
                                                            gl (gluten), d (dairy), n (nuts)</span>
                                                        </footer>
                                    }
                                </span>
                            }
                            {doubleSided && !front &&
                                            <span style={{  width:'4.24in',
                                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                            padding:`0 ${pageMarginsLeftRight}px`,
                                                            display:'flex',
                                                            flexDirection:'column',
                                                            border:'1px solid red'}}>
                                                <div>
                                                    
                                                    <div    className='specials-h1'
                                                            style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                                </div>





                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                                    <div className='specials-h2'>dessert</div>}
                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                                    <div className='specials-h2'>desserts</div>}

                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                                    return(
                                                        <div    key={data._id} 
                                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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














                                                {showLegalText && 
                                                                    <footer style={{marginTop:'auto',
                                                                                    textAlign:'left',
                                                                                    fontSize:'11px',
                                                                                    paddingTop:'20px',
                                                                                    fontFamily:'serif'}}>
                                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                                        <span style={{fontWeight:'900'}}>
                                                                        Please alert your server if you have special dietary requirements:<br/>
                                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                                    </footer>
                                                }
                                            </span>
                            }
                        
                            {front && 
                                <span style={{  width:'4.24in',
                                                height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                padding:`0 ${pageMarginsLeftRight}px`,
                                                display:'flex',
                                                flexDirection:'column',
                                                border:'1px solid red'}}>
                                    <div>
                                        <div    className='specials-h1'
                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                    </div>
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                        <div className='specials-h2'>appetizer</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                        <div className='specials-h2'>appetizers</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                        <div className='specials-h2'>dessert</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                        <div className='specials-h2'>desserts</div>}
                                    {!doubleSided && allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                        return(
                                            <div    key={data._id} 
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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
                                    {showLegalText && 
                                                        <footer style={{marginTop:'auto',
                                                                        textAlign:'left',
                                                                        fontSize:'11px',
                                                                        paddingTop:'20px',
                                                                        fontFamily:'serif'}}>
                                                            Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                            or seafood may increase the risk of foodborne illnesses.<br/>
                                                            <span style={{fontWeight:'900'}}>
                                                            Please alert your server if you have special dietary requirements:<br/>
                                                            gl (gluten), d (dairy), n (nuts)</span>
                                                        </footer>
                                    }
                                </span>
                            }
                            {doubleSided && !front &&
                                            <span style={{  width:'4.24in',
                                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                            padding:`0 ${pageMarginsLeftRight}px`,
                                                            display:'flex',
                                                            flexDirection:'column',
                                                            border:'1px solid red'}}>
                                                <div>
                                                    
                                                    <div    className='specials-h1'
                                                            style={{margin:`${menuItemMarginsTopBottom}px 0`}} >today's specials</div>
                                                </div>





                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                                    <div className='specials-h2'>dessert</div>}
                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                                    <div className='specials-h2'>desserts</div>}

                                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                                    return(
                                                        <div    key={data._id} 
                                                                style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
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














                                                {showLegalText && 
                                                                    <footer style={{marginTop:'auto',
                                                                                    textAlign:'left',
                                                                                    fontSize:'11px',
                                                                                    paddingTop:'20px',
                                                                                    fontFamily:'serif'}}>
                                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                                        <span style={{fontWeight:'900'}}>
                                                                        Please alert your server if you have special dietary requirements:<br/>
                                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                                    </footer>
                                                }
                                            </span>
                            }
                        
                        </div>














                    </div>         



            























            </div>{/* .manager-page-wrapper */}
        </>
    )
}