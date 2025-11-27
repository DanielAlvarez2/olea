import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import SpecialsMenuUpdate from './SpecialsMenuUpdate.jsx'

export default function SpecialsMenu(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials</div>


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
                        <Link to='/specials-menu-update'><li style={{flexGrow:'1'}}>update</li></Link>
                        <Link to='/specials-menu-format'><li style={{flexGrow:'1'}}>format</li></Link>
                        <Link to='/specials-menu-print'><li style={{flexGrow:'1'}}>print</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}