import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function Events(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
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
                                border:'1px solid green'
                                }}>
                        <Link to='/valentines-day'><li style={{flexGrow:'1'}}>valentine's day<br/>feb 14</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>restaurant week</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>mother's day<br/>2nd sun may</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>graduation<br/>3rd sun may</li></Link>
                        <Link to='/anniversary'><li style={{flexGrow:'1'}}>anniversary<br/>aug 27</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>parents weekend<br/>1st week oct</li></Link>
                        <Link to='/restaurant-weeks'><li style={{flexGrow:'1'}}>restaurant weeks<br/>1st 2 weeks nov</li></Link>
                        <Link to='/nye'><li style={{flexGrow:'1'}}>new year's eve</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}