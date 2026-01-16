import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function Annivaersary(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>events &gt; anniversary</div>
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
                        <Link to='/anniversary'><li style={{flexGrow:'1'}}>anniversary<br/>screenshot</li></Link>
                        <Link to='/anniversary-scan'><li style={{flexGrow:'1'}}>anniversary<br/>menu scan</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}