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
                        <Link to='/'><li style={{flexGrow:'1'}}>valentine's day</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>restaurant week</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>mother's day</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>graduation</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>parents weekend</li></Link>
                        <Link to='/restaurant-weeks'><li style={{flexGrow:'1'}}>restaurant weeks</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>new year's eve</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}