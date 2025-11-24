import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";


export default function SpecialsMenuUpdate(){
    const [allSpecials, setAllSpecials] = useState([])
    const [specialsFormatting, setSpecialsFormatting] = useState([])
    const [pageMarginsLeftRight, setPageMarginsLeftRight] = useState(0)
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
        setPageMarginsLeftRight(prev=>prev + 1)
    }

    function decreasePageMarginsLeftRight(){
        if (pageMarginsLeftRight == 0) return
        setPageMarginsLeftRight(prev=>prev - 1)
    }














    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials &gt; format</div>


                    <div className='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                
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
                                        alignItems:'center'}}>
                            <span><PiMinusCircleDuotone style={{fontSize:'50px',cursor:'pointer'}}
                                                        onClick={decreasePageMarginsLeftRight} /></span>
                            <span>page margins<br/>left & right</span>
                            <span><PiPlusCircleDuotone  style={{fontSize:'50px',cursor:'pointer'}} 
                                                        onClick={increasePageMarginsLeftRight} /></span>
                        </div>
                        <div style={{   width:'4.25in',
                                        height:'5.5in',
                                        padding:`0 ${pageMarginsLeftRight}px`,
                                        marginBottom:'50px',
                                        display:'flex',
                                        flexDirection:'column',
                                        border:'1px solid red'}}>
                            <div>
                                
                                <div className='specials-h1'>today's specials</div>
                            </div>















                            {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                <div className='specials-h2'>appetizer</div>}
                            {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                <div className='specials-h2'>appetizers</div>}

                            {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                    
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
                                    <div key={data._id} className='special'>
                                        
                                  
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


















                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                <div className='specials-h2'>dessert</div>}
                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                <div className='specials-h2'>desserts</div>}

                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        
                                  
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
                        </div>
                    </div>         



            























            </div>{/* .manager-page-wrapper */}
        </>
    )
}