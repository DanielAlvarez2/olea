import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function TakeOutMenu(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='takeout' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>takeout</div>
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
                        <Link to='/takeout-scan'><li style={{flexGrow:'1'}}>scan</li></Link>
                        <Link to='/takeout'><li style={{flexGrow:'1'}}>format</li></Link>
                        <Link to='/takeout'><li style={{flexGrow:'1'}}>print</li></Link>
                        
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}