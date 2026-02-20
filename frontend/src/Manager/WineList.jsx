import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineList(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list</div>
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
                        <Link to='/wine-btg'><li style={{flexGrow:'1'}}>wine by the glass</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>wine by the bottle</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>sangria</li></Link>
                        <Link to='/non-alcoholic'><li style={{flexGrow:'1'}}>non-alcoholic</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>beer</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>craft drinks</li></Link>
                        <Link to='/sherries'><li style={{flexGrow:'1'}}>sherries</li></Link>
                        <Link to='/wine-list'><li style={{flexGrow:'1'}}>spirits</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}