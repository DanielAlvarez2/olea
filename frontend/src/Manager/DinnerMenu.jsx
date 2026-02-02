import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import SpecialsMenuUpdate from './SpecialsMenuUpdate.jsx'

export default function DinnerMenu(){
    return(
        <>
            <div className='manager-page-wrapper'>
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
                        <Link to='/dinner-menu-update'><li style={{flexGrow:'1'}}>update</li></Link>
                        <Link to='/dinner-menu-format'><li style={{flexGrow:'1'}}>format</li></Link>
                        <Link to='/dinner-menu-print'><li style={{flexGrow:'1'}}>print</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}