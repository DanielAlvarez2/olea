import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import '../Manager.css'
import '../Specials.css'
import '../SpecialsMenuFormat.css'
// import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


export default function SpecialsPrintAreaFront({pageMarginsLeftRight,menuItemMarginsTopBottom,showLegalText,doubleSided}){
    const [allSpecials, setAllSpecials] = useState([])
    const [specialsFormatting, setSpecialsFormatting] = useState([])
    // const [pageMarginsLeftRight, setPageMarginsLeftRight] = useState(0)
    // const [menuItemMarginsTopBottom, setMenuItemMarginsTopBottom] = useState(0)
    const [letterPaper, setLetterPaper] = useState(true)
    // const [showLegalText, setShowLegalText] = useState(true)
    // const [doubleSided, setDoubleSided] = useState(false)
    
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





    return(
        <>
            

                    



















                                <div style={{   width:'4.25in',
                                                // height: letterPaper ? 'calc(5.5in - 2px)' : '7in',
                                                height:'5.5in',
                                                padding:`0 ${pageMarginsLeftRight}px`,
                                                position:'relative',
                                                background:'white',
                                                // backgroundImage:'url("scan-specials.jpg")',
                                                backgroundSize:'10.9cm',
                                                backgroundPosition:'-56px -14px',
                                                // border:'1px solid black',
                                                border:'none',
                                                // color:'red',
                                                }}>
                                    {/* <div> */}
                                        
                                        <div    className='specials-h1'
                                                style={{marginBottom:`${menuItemMarginsTopBottom}px`}} >
                                            today's specials COMPONENT
                                        </div>
                                    {/* </div> */}













                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                        <div className='specials-h2'>appetizer</div>}
                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                        <div className='specials-h2'>appetizers</div>}

                                    {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                    className='special'>
                                            
                                                <span className='name-specials'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                {data.price.length < 3 ? 
                                                    <span className='price-specials'> &nbsp;{data.price}</span> : 
                                                    <div className='price-specials'>{data.price}</div> }


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
                                                
                                        
                                                <span className='name-specials'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                {data.price.length < 3 ? 
                                                    <span className='price-specials'> &nbsp;{data.price}</span> : 
                                                    <div className='price-specials'>{data.price}</div> }


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
                                                
                                        
                                                <span className='name-specials'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                {data.price.length < 3 ? 
                                                    <span className='price-specials'> &nbsp;{data.price}</span> : 
                                                    <div className='price-specials'>{data.price}</div> }


                                            </div>
                                        )
                                    })}














                                    {showLegalText && 
                                                    <footer style={{position:'absolute',
                                                                    bottom:'5mm',
                                                                    // marginTop:'auto',
                                                                    textAlign:'left',
                                                                    fontSize:'11px',
                                                                    paddingRight:`${pageMarginsLeftRight}px`,
                                                                    fontFamily:'serif'}}>
                                                        <div style={{   display:'flex',
                                                                        gap:'9px',
                                                                        alignItems:'flex-end',
                                                                        justifyContent:'space-between'}}>
                                                            <div className='specials-legal'>
                                                                Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                                                or seafood may increase the risk of foodborne illnesses. 
                                                                Please alert your server if you have special dietary requirements:
                                                                <div style={{fontWeight:'900'}}>
                                                                gl (gluten), d (dairy), n (nuts)</div>
                                                            </div>
                                                            <img    src='qr-specials.jpg' 
                                                                    className='qr'
                                                                    width='50px' 
                                                                    height='50px'
                                                                    />
                                                        </div>
                                                    </footer>
                                    }
                                </div>
                            












                        














                            



            























            
        </>
    )
}