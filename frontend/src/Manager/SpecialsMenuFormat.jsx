import {useNavigate} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import SpecialsPrintAreaFront from './components/SpecialsPrintAreaFront.jsx'
import SpecialsPrintAreaBack from './components/SpecialsPrintAreaBack.jsx'
import { FaCaretUp } from "react-icons/fa";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";


export default function SpecialsMenuFormat(){
    const navigate = useNavigate()
    const [front, setFront] = useState(true)
    const [allSpecials, setAllSpecials] = useState([])
    const [specialsFormatting, setSpecialsFormatting] = useState([])
    const [pageMarginsLeftRight, setPageMarginsLeftRight] = useState(0)
    const [menuItemMarginsTopBottom, setMenuItemMarginsTopBottom] = useState(0)
    const [pageMarginsLeftRightDessert, setPageMarginsLeftRightDessert] = useState(0)
    const [menuItemMarginsTopBottomDessert, setMenuItemMarginsTopBottomDessert] = useState(0)
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
                    setPageMarginsLeftRightDessert(json[0].pageMarginsLeftRightDessert)
                    setMenuItemMarginsTopBottomDessert(json[0].menuItemMarginsTopBottomDessert)
                })
                .catch(err=>console.log(err))
            
        }catch(err){
            console.log(err)
        }
    }

    function increasePageMarginsLeftRight(){
        if(front){
            fetch(`${BASE_URL}/api/formats/specials/increasePageMargins`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }else{
            fetch(`${BASE_URL}/api/formats/specials/increasePageMarginsDessert`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }

    }

    function decreasePageMarginsLeftRight(){
        if (front){
            if (pageMarginsLeftRight <= 0) return
            fetch(`${BASE_URL}/api/formats/specials/decreasePageMargins`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }else{
            if (pageMarginsLeftRightDessert <= 0) return
            fetch(`${BASE_URL}/api/formats/specials/decreasePageMarginsDessert`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }
    }

    function increaseMenuItemMarginsTopBottom(){
        if(front){
            fetch(`${BASE_URL}/api/formats/specials/increaseMenuItemMargins`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }else{
            fetch(`${BASE_URL}/api/formats/specials/increaseMenuItemMarginsDessert`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }

    }

    function decreaseMenuItemMarginsTopBottom(){
        if(front){
            if (menuItemMarginsTopBottom <= 0) return
            fetch(`${BASE_URL}/api/formats/specials/decreaseMenuItemMargins`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }else{
            if (menuItemMarginsTopBottomDessert <= 0) return
            fetch(`${BASE_URL}/api/formats/specials/decreaseMenuItemMarginsDessert`, {method:'PUT'})
                .then(()=>getSpecialsFormatting())
                .catch(err=>console.log(err))
        }

    }








    function toggleFront(){
        setFront(prev=>!prev)
    }






    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials &gt; format</div>


                    {/* <br/> */}

                    <div className='main-menu paper-menu' 
                        style={{display:'flex',
                                flex:'1',
                                paddingBottom:'50px',
                                flexDirection:'column',
                                gap:'10px',
                                justifyContent:'center',
                                alignItems:'center',
                                // border:'1px solid green'
                                }}>



















                        <div id='specials-double-sided-flexbox' style={{flexDirection:'row',alignItems:'center'}}>

{front &&

        <SpecialsPrintAreaFront 
                                pageMarginsLeftRight={pageMarginsLeftRight}
                                menuItemMarginsTopBottom={menuItemMarginsTopBottom}
                                showLegalText={showLegalText}
                                doubleSided={doubleSided}
        />
}

                            


{!front && 
            <SpecialsPrintAreaBack 
                                    pageMarginsLeftRight={pageMarginsLeftRightDessert}
                                    menuItemMarginsTopBottom={menuItemMarginsTopBottomDessert}
                                    showLegalText={showLegalText}
                                    // doubleSided={doubleSided}
            />
}








                                    

                                    
                                    
                            







                        <div style={{   display:'flex',
                                        alignItems:'center',
                                        background:'#eee',
                                        zIndex:'1',
                                        gap:'10px',
                                        flexDirection:'column'}}>
                                <div    className='no-print' 
                                        style={{display:'flex',
                                                width:'100%',
                                                gap:'10px',
                                                // background:'pink',
                                                justifyContent:'center',
                                                alignItems:'center'}}>
                                    <span>dinner</span>
                                    <span>
                                        {front ? 
                                                        <FaToggleOff    style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFront} />
                                        : 
                                                        <FaToggleOn     style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFront} />
                                        }
                                    </span>
                                    <span>dessert</span>
                                </div> 
                                            
                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            alignItems:'center',
                                            }}>
                                <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                            onClick={decreasePageMarginsLeftRight} /></span>
                                <span>page margins<br/>left & right &#8596;</span>
                                <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                            onClick={increasePageMarginsLeftRight} /></span>
                            </div>

                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            alignItems:'center'}}>
                                <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                            onClick={decreaseMenuItemMarginsTopBottom} /></span>
                                <span>menu item margins<br/>top & bottom &#8597;</span>
                                <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                            onClick={increaseMenuItemMarginsTopBottom} /></span>
                            </div>

 
                            <div>




                                <div    className='no-print print-btn' 
                                        style={{background:'limegreen',width:'210px'}}
                                        onClick={()=>navigate('/specials-menu-print')}>
                                    print preview
                                </div>

                                {/* <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
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
                                </div>  */}
                            </div>  



                        </div>



                        </div>





                    </div>         



            























            </div>{/* .manager-page-wrapper */}
        </>
    )
}