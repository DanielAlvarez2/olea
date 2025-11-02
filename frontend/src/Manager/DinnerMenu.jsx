import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function DinnerMenu(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='dinner' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dinner</div>
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
                        <Link to='/dinner-menu'><li style={{flexGrow:'1'}}>dinner</li></Link>
                        <Link to='/specials'><li style={{flexGrow:'1'}}>specials</li></Link>
                        <Link to='/dessert'><li style={{flexGrow:'1'}}>dessert</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>wine list</li></Link>
                        <Link to='/takeout'><li style={{flexGrow:'1'}}>takeout</li></Link>
                        <Link to='/events'><li style={{flexGrow:'1'}}>events</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}