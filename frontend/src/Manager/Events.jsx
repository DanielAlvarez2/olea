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
                        <li style={{flexGrow:'1'}}><Link to='/dinner-menu'>dinner</Link></li>
                        <li style={{flexGrow:'1'}}><Link to='/specials-menu'>specials</Link></li>
                        <li style={{flexGrow:'1'}}><Link to='/dessert-menu'>dessert</Link></li>
                        <li style={{flexGrow:'1'}}><Link to='/wine-list'>wine list</Link></li>
                        <li style={{flexGrow:'1'}}><Link to='/takeout'>take-out</Link></li>
                        <li style={{flexGrow:'1'}}><Link to='/events'>events</Link></li>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}