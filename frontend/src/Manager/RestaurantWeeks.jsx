import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function RestaurantWeeks(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>events &gt; restaurant weeks</div>
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
                        <Link to='/restaurant-weeks-screenshot'><li style={{flexGrow:'1'}}>restaurant weeks<br/>screenshot</li></Link>
                        <Link to='/restaurant-weeks-scan'><li style={{flexGrow:'1'}}>restaurant weeks<br/>menu scan</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}