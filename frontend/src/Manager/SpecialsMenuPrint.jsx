import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './SpecialsMenuPrint.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import SpecialsPrintAreaFront from './components/SpecialsPrintAreaFront.jsx'
import SpecialsPrintAreaBack from './components/SpecialsPrintAreaBack.jsx'
import { FaCaretUp } from "react-icons/fa";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


export default function SpecialsMenuPrint(){
    const offset = '20px'
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

    function printSpecials(){
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
            <div className='manager-page-wrapper specials-print-wrapper'
                // style={{background:'yellow'}}
            >
                <div style={{width:'100%'}} className='no-print'>
                    <ManagerNavbar page='specials' />
                </div>
                    <div    className='no-print'
                            style={{textAlign:'center',
                                    fontSize:'30px'}}>menu manager</div>
                    <div    className='no-print' 
                            style={{textAlign:'center',
                                    fontSize:'30px'}}>specials &gt; print</div>


                    <div className='main-menu paper-menu' 
                        style={{display:'flex',
                                flex:'1',
                                flexDirection:'column',
                                // justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                // border:'1px solid green',
                                // background:'blue',
                                paddingBottom:'0'
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

                        <div    className='no-print print-btn' 
                                onClick={()=>printSpecials()}>
                            print
                        </div>
















                        <div style={{   display:'flex',
                                        position:'relative',
                        }}>







                            {front && 
                            

                          
<SpecialsPrintAreaFront 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        doubleSided={doubleSided}
/>
                            
                            }











                            
                            {doubleSided && !front &&
<SpecialsPrintAreaBack 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        // doubleSided={doubleSided}
/>
                            }
                        
                            {front && 
<SpecialsPrintAreaFront 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        doubleSided={doubleSided}
/>
                            }
                            {doubleSided && !front &&
<SpecialsPrintAreaBack 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        // doubleSided={doubleSided}
/>
                            }
                        
                        </div>

                        <div style={{display:'flex',position:'relative'}}>

                            

                            {front && 
<SpecialsPrintAreaFront 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        doubleSided={doubleSided}
/>
                            }
                            {doubleSided && !front &&
<SpecialsPrintAreaBack 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        // doubleSided={doubleSided}
/>
                            }
                        
                            {front && 
<SpecialsPrintAreaFront 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        doubleSided={doubleSided}
/>
                            }
                            {doubleSided && !front &&
<SpecialsPrintAreaBack 
                        pageMarginsLeftRight={pageMarginsLeftRight}
                        menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                        showLegalText={showLegalText}
                        // doubleSided={doubleSided}
/>
                            }
                        
                        </div>















                    </div>         



            
                        <div>
                            
                            <br className='no-print' />
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

                        <div    className='no-print print-btn' 
                                onClick={()=>printSpecials()}>
                            print
                        </div>



















            <br className='no-print'/>



            </div>{/* .manager-page-wrapper */}
        </>
    )
}