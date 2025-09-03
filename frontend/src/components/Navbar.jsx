import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import {Link} from 'react-router'

export default function Navbar(){

    function showInfoDropdown(){
        document.querySelector('.info-ul').style.display = 'flex'
    }
    function hideInfoDropdown(){
        document.querySelector('.info-ul').style.display = 'none'
    }
    return(
        <>
        {console.log('render')}
            <div className='navbar'>
                
                <span className='logo'>
                    <Link to='/'>olea</Link>
                </span>{/* .logo */}

                <div className='navbar-menu' style={{position:'relative',width:'540px'}}>

                   
                            <ul className='info-ul nav-info'
                                onMouseOver={showInfoDropdown}
                                onMouseLeave={hideInfoDropdown} 
                                style={{display:'none',                    
                                        border:'1px solid black',
                                        
                                        padding:'10px 10px',
                                        background:'#262626',
                                        flexDirection:'column',
                                        position:'absolute',
                                        
                                        left:'40px',
                                        top:'20px'}}>
                                <li><Link to='/info'>info</Link></li>
                                <li><Link to='/free-parking'>free parking</Link></li>
                                <li><Link to='/chef-bio'>chef bio</Link></li>
                                <li><Link to='/private-parties'>private parties</Link></li>
                            </ul>
                    

                    <ul className='nav-ul' style={{position:'absolute',top:'0',left:'0'}}>
                        <li><Link to='/'>home</Link></li>
                        <li onMouseOver={showInfoDropdown}
                            onMouseLeave={hideInfoDropdown}>info</li>
                        <li>menus</li>
                        <li><Link to='/press'>press</Link></li>
                        <li><Link to='/giftcards'>gift cards</Link></li>
                        <li><Link to='/newsletter'>newsletter</Link></li>
                        <li><a href='https://www.opentable.com/booking/restref/availability?rid=151186&correlationId=0c416533-c338-499b-a076-64c7c704137f&restRef=151186' target='_blank'>reservations</a></li>
                    </ul>
                    
                </div>{/* .navbar-menu */}

                <div className='navbar-socials'>
                    <a href='https://www.facebook.com/oleanewhaven/' target='_blank'>
                        <BiLogoFacebook />
                    </a>&nbsp;
                    <a href='https://www.instagram.com/oleanewhaven/' target='_blank'>
                        <AiOutlineInstagram />
                    </a>
                </div>{/* .navbar-socials */}
            </div>{/* .navbar */}
            <hr/>
        </>
    )
}