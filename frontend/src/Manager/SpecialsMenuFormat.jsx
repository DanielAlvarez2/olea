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


export default function SpecialsMenuUpdate(){
    const [allSpecials, setAllSpecials] = useState([])
    const [specialsFormatting, setSpecialsFormatting] = useState([])
    const [pageMarginsLeftRight, setPageMarginsLeftRight] = useState(0)
    const [menuItemMarginsTopBottom, setMenuItemMarginsTopBottom] = useState(0)
    const [letterPaper, setLetterPaper] = useState(true)
    const [showLegalText, setShowLegalText] = useState(true)
    const [doubleSided, setDoubleSided] = useState(false)
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

    function increasePageMarginsLeftRight(){
        fetch(`${BASE_URL}/api/formats/specials/increasePageMargins`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMarginsLeftRight(){
        if (pageMarginsLeftRight == 0) return
        fetch(`${BASE_URL}/api/formats/specials/decreasePageMargins`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function increaseMenuItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/specials/increaseMenuItemMargins`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseMenuItemMarginsTopBottom(){
        if (menuItemMarginsTopBottom == 0) return
        fetch(`${BASE_URL}/api/formats/specials/decreaseMenuItemMargins`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function togglePaperSize(){
        fetch(`${BASE_URL}/api/formats/specials/togglePaperSize`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function toggleLegalText(){
        fetch(`${BASE_URL}/api/formats/specials/toggleLegalText`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }

    function toggleDoubleSided(){
        fetch(`${BASE_URL}/api/formats/specials/toggleDoubleSided`, {method:'PUT'})
            .then(()=>getSpecialsFormatting())
            .catch(err=>console.log(err))
    }













    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials &gt; format</div>


                    <div className='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                paddingBottom:'150px',
                                flexDirection:'column',
                                gap:'10px',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                border:'1px solid green'
                                }}>

                        <div style={{   textAlign:'center',
                                        display:'flex',
                                        gap:'10px',
                                        alignItems:'center',
                                        }}>
                            <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                        onClick={decreasePageMarginsLeftRight} /></span>
                            <span>page margins<br/>left & right</span>
                            <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                        onClick={increasePageMarginsLeftRight} /></span>
                        </div>

                        <div style={{   textAlign:'center',
                                        display:'flex',
                                        gap:'10px',
                                        alignItems:'center'}}>
                            <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                        onClick={decreaseMenuItemMarginsTopBottom} /></span>
                            <span>menu item margins<br/>top & bottom</span>
                            <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                        onClick={increaseMenuItemMarginsTopBottom} /></span>
                        </div>


                        <div>
                            <div style={{textAlign:'center'}}>paper size</div>
            
                            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                                <span>letter</span>
                                <span>
                                    {letterPaper ? 
                                                    <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={togglePaperSize} />
                                    : 
                                                    <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={togglePaperSize} />
                                    }
                                    

                                </span>
                                <span>legal</span>
                            </div> 
                        </div>  


                        <div>
                            <div style={{textAlign:'center'}}>legal text</div>
            
                            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                                <span>show</span>
                                <span>
                                    {showLegalText ? 
                                                    <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={toggleLegalText} />
                                    : 
                                                    <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={toggleLegalText} />
                                    }
                                    

                                </span>
                                <span>hide</span>
                            </div> 
                        </div>  


                        <div>
            
                            <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                                <span>1-sided</span>
                                <span>
                                    {doubleSided ? 
                                                    <FaToggleOn    style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={toggleDoubleSided} />
                                    : 
                                                    <FaToggleOff     style={{cursor:'pointer',fontSize:'30px'}}
                                                                    onClick={toggleDoubleSided} />
                                    }
                                    

                                </span>
                                <span>2-sided</span>
                            </div> 
                        </div>  

















                        <div id='specials-double-sided-flexbox'>

                            <div style={{   width:'4.25in',
                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                            padding:`6mm calc(6mm + ${pageMarginsLeftRight}px)`,
                                            position:'relative',
                                            border:'1px solid red'}}>
                                <div>
                                    
                                    <div    className='specials-h1'
                                            style={{marginBottom:`${menuItemMarginsTopBottom}px`}} >today's specials</div>
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
                                                <footer style={{position:'absolute',
                                                                bottom:'6mm',
                                                                // marginTop:'auto',
                                                                textAlign:'left',
                                                                fontSize:'11px',
                                                                paddingRight:`calc(6mm + ${pageMarginsLeftRight}px)`,
                                                                fontFamily:'serif'}}>
                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                        <span style={{fontWeight:'900'}}>
                                                        Please alert your server if you have special dietary requirements:<br/>
                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                    </footer>
                                }
                            </div>
                            











                            {doubleSided && 
                                            <div style={{   width:'4.25in',
                                                            height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                            padding:`6mm calc(6mm + ${pageMarginsLeftRight}px)`,
                                                            position:'relative',
                                                            border:'1px solid red'}}>
                                                <div>
                                                    
                                                    <div    className='specials-h1'
                                                            style={{marginBottom:`${menuItemMarginsTopBottom}px`}} >today's specials</div>
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
                                                                    <footer style={{position:'absolute',
                                                                                    bottom:'6mm',
                                                                                    // marginTop:'auto',
                                                                                    textAlign:'left',
                                                                                    fontSize:'11px',
                                                                                    paddingRight:`calc(6mm + ${pageMarginsLeftRight}px)`,
                                                                                    fontFamily:'serif'}}>
                                                                        Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                        or seafood may increase the risk of foodborne illnesses.<br/>
                                                                        <span style={{fontWeight:'900'}}>
                                                                        Please alert your server if you have special dietary requirements:<br/>
                                                                        gl (gluten), d (dairy), n (nuts)</span>
                                                                    </footer>
                                                }
                                            </div>

                            }

                        </div>














                    </div>         



            























            </div>{/* .manager-page-wrapper */}
        </>
    )
}