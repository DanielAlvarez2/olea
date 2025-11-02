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
                    <ul id='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                flexDirection:'column',
                                gap:'10px',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                border:'1px solid green'
                                }}>
                        <Link to='/'><li style={{flexGrow:'1'}}>Valentine's Day</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>Restaurant Week</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>Mother's Day</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>Graduation</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>Parents Weekend</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>Restaurant WeekS</li></Link>
                        <Link to='/'><li style={{flexGrow:'1'}}>NYE</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}