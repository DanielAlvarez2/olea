import './QR-navbar.css'
import {Link} from 'react-router'

export default function QRnavbar(props){
    return(
        <>
        <div id='qr-navbar-wrapper' style={{width:'100%',
                                            background:'black',
                                            color:'white',
                                            position:'fixed',top:'0'}}>

            <div id='qr-navbar' style={{
                                        // background:'lightblue',
                                        margin:'0 auto',
                                        display:'flex',
                                        justifyContent:'space-around'}}>
                <Link to='/menu'>dinner</Link>
                <Link to='/qr-specials'>specials</Link>
                <Link to='/qr-dessert'>dessert</Link>
            </div>{/* #qr-navbar */}
        </div>{/* #qr-navbar-wrapper */}
        </>
    )
}