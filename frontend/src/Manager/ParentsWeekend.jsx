import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function ParentsWeekend(){
    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>events &gt; parents weekend</div>
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
                        <Link to='/parents-weekend-update'><li style={{flexGrow:'1'}}>update</li></Link>
                        <Link to='/parents-weekend-format-print'><li style={{flexGrow:'1'}}>format/print</li></Link>
                        <Link to='/parents-weekend-screenshot'><li style={{flexGrow:'1'}}>screenshot</li></Link>
                        <Link to='/parents-weekend-scan'><li style={{flexGrow:'1'}}>scan</li></Link>
                        
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}