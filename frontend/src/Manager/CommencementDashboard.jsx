import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function CommencementDashboard(){
    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>events &gt; commencement</div>
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
                        <Link to='/manager/commencement-update'><li style={{flexGrow:'1'}}>update</li></Link>
                        <Link to='/manager/commencement-format'><li style={{flexGrow:'1'}}>format</li></Link>
                        <Link to='/manager/commencement-print'><li style={{flexGrow:'1'}}>print</li></Link>
                        <Link to='/commencement-screenshot'><li style={{flexGrow:'1'}}>screenshot</li></Link>
                        <Link to='/commencement'><li style={{flexGrow:'1'}}>scan</li></Link>
                        
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}