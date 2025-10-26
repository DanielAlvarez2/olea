import {Link} from 'react-router'
import './ManagerNavbar.css'

export default function ManagerNavbar(props){
    return(
        <>
            <nav    className='manager-navbar' 
                    style={{display:'flex',width:'100%',alignItems:'center'}}>
                <Link to='/manager'><div className='logo' style={{paddingRight:'0'}}>
                    olea
                </div></Link>
                <div style={{width:'100%'}}>
                    <ul style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                        <li className={props.page=='dinner' ? 'current-page' : ''}><Link to='/dinner-menu'>dinner</Link></li>
                        <li className={props.page=='specials' ? 'current-page' : ''}><Link to='/specials-menu'>specials</Link></li>
                        <li className={props.page=='dessert' ? 'current-page' : ''}><Link to='/dessert-menu'>dessert</Link></li>
                        <li className={props.page=='wine-list' ? 'current-page' : ''}><Link to='/wine-list'>wine list</Link></li>
                        <li className={props.page=='takeout' ? 'current-page' : ''}><Link to='/takeout'>takeout</Link></li>
                        <li className={props.page=='events' ? 'current-page' : ''}><Link to='/events'>events</Link></li>
                    </ul>
                </div>
            </nav>        
                <hr/>
        </>
    )
}