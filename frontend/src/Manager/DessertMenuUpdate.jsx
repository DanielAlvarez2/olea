import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function DessertMenuUpdate(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update</div>
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
                        <Link to='/desserts-update'><li style={{flexGrow:'1'}}>desserts</li></Link>
                        <Link to='/specials'><li style={{flexGrow:'1'}}>coffee/tea</li></Link>
                        <Link to='/dessert'><li style={{flexGrow:'1'}}>drinks</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}