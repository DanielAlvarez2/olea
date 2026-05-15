import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";
import {useState,useEffect} from 'react'

export default function Events(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    useEffect(()=>getAnnualEvents(),[])

    const [mothersDay, setMothersDay] = useState(false)

    function getAnnualEvents(){
        try{
            fetch(`${BASE_URL}/api/annual-events`)
                .then(res=>res.json())
                .then(json=>setMothersDay(json[0].MothersDay))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function toggleMothersDay(){
        try{
            fetch(`${BASE_URL}/api/toggle-mothers-day`)
                .then(()=>getAnnualEvents())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    return(
        <>
            <div    className='manager-page-wrapper' 
                    // style={{border:'1px solid red'}}
            >
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>events</div>
                    <ul className='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                flexDirection:'column',
                                gap:'10px',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                // border:'1px solid green'
                                }}>
                        <Link to='/valentines-day'><li style={{flexGrow:'1'}}>valentine's day<br/>feb 14</li></Link>
                        <Link to='/restaurant-weeks-spring'><li style={{flexGrow:'1'}}>restaurant weeks<br/>late march</li></Link>
                        
                        <div style={{display:'flex',gap:'10px'}}>
                            <Link to='/manager/mothers-day'>
                                <li style={{flexGrow:'1'}}>mother's day<br/>2nd sun may</li>
                            </Link>
                            <div style={{display:'flex',alignItems:'center',gap:'20px',border:'1px solid black',borderRadius:'10px',width:'150px',justifyContent:'center'}}>
                                <div style={{textAlign:'center'}}>website<br/>menu</div>
                                {mothersDay ? 
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <FaToggleOn size='30' style={{color:'green',cursor:'pointer'}} onClick={toggleMothersDay} /> &nbsp;ON
                                                </div>

                                            :
                                                <div style={{display:'flex',alignItems:'center'}}>
                                                    <FaToggleOff size='30' style={{color:'red',cursor:'pointer'}} onClick={toggleMothersDay} /> &nbsp;OFF
                                                </div>
                                }
                            </div>
                        </div>
                        
                        <Link to='/commencement'><li style={{flexGrow:'1'}}>commencement<br/>3rd sun may</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>graduation lunch<br/>3rd mon may</li></Link>
                        <Link to='/anniversary'><li style={{flexGrow:'1'}}>anniversary<br/>aug 27</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>parents weekend<br/>1st week oct</li></Link>
                        <Link to='/restaurant-weeks'><li style={{flexGrow:'1'}}>restaurant weeks<br/>1st 2 weeks nov</li></Link>
                        <Link to='/nye'><li style={{flexGrow:'1'}}>new year's eve<br/>dec 31</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}