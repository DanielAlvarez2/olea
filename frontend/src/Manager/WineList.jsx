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

                        <Link to='/wine-list-update'><li style={{flexGrow:'1'}}>update</li></Link>
                        <Link to='/wine-list-format'><li style={{flexGrow:'1'}}>format</li></Link>
                        <Link to='/wine-list-print'><li style={{flexGrow:'1'}}>print</li></Link>








                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}