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

    function printPage(){
        window.print()
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>dinner &gt; print</div>
                    
                    

                                                       
                            <div style={{   
                                            // border:'1px solid green',
                                            textAlign:'center',
                                            display:'grid',
                                            placeContent:'center',
                                            width:'100%'}}>
                                <div    className='no-print print-btn' 
                                        style={{marginTop:'10px'}}
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div>

                </div>{/* .no-print */}


                <DinnerMenuPrintArea 
                    dinnerItemMarginsTopBottom={dinnerItemMarginsTopBottom} 
                    dinnerItemMarginsLeftRight={dinnerItemMarginsLeftRight}
                />

                            <div style={{   
                                            // border:'1px solid green',
                                            textAlign:'center',
                                            display:'grid',
                                            placeContent:'center',
                                            width:'100%'}}>
                                <div    className='no-print print-btn' 
                                        style={{marginTop:'10px'}}
                                        onClick={()=>printPage()}>
                                    print
                                </div>
                            </div>


                <br className='no-print' />
                <br className='no-print' />
                <br className='no-print' />


            </div>{/* .manager-page-wrapper */}
        </>
    )
}