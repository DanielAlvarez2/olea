import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './DessertDrinksUpdate.css'
import './DinnerMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import DinnerMenuPrintArea from './components/DinnerMenuPrintArea.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function DinnerMenuFormat(){

    const [tastingMenuPrices, setTastingMenuPrices] = useState([])    

    const [dinnerFormatting, setDinnerFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(0)
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
        if (pageMargin <= 1) return
        fetch(`${BASE_URL}/api/formats/dinner/decreasePageMargin`,{method:'PUT'})
        .then(()=>getDinnerFormatting())
        .catch(err=>console.log(err))
    }

    
    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/dinner/increasePageMargin`,{method:'PUT'})
            .then(()=>getDinnerFormatting())
            .catch(err=>console.log(err))
    }



    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red',
                    //         color:'red'
                    //         }}
            >
                <ManagerNavbar page='dinner' />
                <div className='no-print'>

                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dinner &gt; format</div>
                    
                    

                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    zIndex:'100',
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
                                        <span>menu items margin: right &#8592;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseDinnerItemMarginsLeftRight} /></span>
                                    </div>

                                    {/* <div style={{   textAlign:'center',
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
                                    <br/><br/> */}

                </div>{/* .no-print */}


<DinnerMenuPrintArea 
    dinnerItemMarginsTopBottom={dinnerItemMarginsTopBottom} 
    dinnerItemMarginsLeftRight={dinnerItemMarginsLeftRight}
/>

                                <div className='no-print' style={{background:'#EEE',zIndex:'100'}}>

                                    <br/>
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    background:'#eee',
                                                    zIndex:'100',
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
                                        <span>menu items margin: right &#8592;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseDinnerItemMarginsLeftRight} /></span>
                                    </div>

                                    {/* <div style={{   textAlign:'center',
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
                                    </div> */}

                                </div>{/* .no-print */}

                                <br className='no-print' />
                                <br className='no-print' />
                                <br className='no-print' />

            </div>{/* .manager-page-wrapper */}
        </>
    )
}