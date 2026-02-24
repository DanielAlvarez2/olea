import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineListUpdate(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; update</div>
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
                        <Link to='/wine-btb'><li style={{flexGrow:'1'}}>wine by the bottle</li></Link>
                        <Link to='/sangria'><li style={{flexGrow:'1'}}>sangría</li></Link>
                        <Link to='/non-alcoholic'><li style={{flexGrow:'1'}}>non-alcoholic</li></Link>
                        <Link to='/beer'><li style={{flexGrow:'1'}}>beer</li></Link>
                        <Link to='/craft-drinks'><li style={{flexGrow:'1'}}>craft drinks</li></Link>
                        <Link to='/sherries'><li style={{flexGrow:'1'}}>sherries</li></Link>
                        <Link to='/spirits'><li style={{flexGrow:'1'}}>spirits</li></Link>


                        {/* <Link to='/wine-sparkling'><li style={{flexGrow:'1'}}>cava & champagne</li></Link>
                        <Link to='/wine-rosé'><li style={{flexGrow:'1'}}>rosé</li></Link>
                        <Link to='/wine-white'><li style={{flexGrow:'1'}}>white</li></Link>
                        <Link to='/wine-red'><li style={{flexGrow:'1'}}>red</li></Link> */}


                    </ul>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}