import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineBTB(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; wine bottles &gt; update</div>
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
                        <Link to='/wine-sparkling'><li style={{flexGrow:'1'}}>cava & champagne</li></Link>
                        <Link to='/wine-rosé'><li style={{flexGrow:'1'}}>rosé</li></Link>
                        <Link to='/wine-white'><li style={{flexGrow:'1'}}>white</li></Link>
                        <Link to='/wine-red'><li style={{flexGrow:'1'}}>red</li></Link>
                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}