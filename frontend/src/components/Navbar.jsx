import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import {Link} from 'react-router'
import './Navbar.css'

export default function Navbar(){

    function showMenusDropdown(){
        document.querySelector('.menus-dropdown').style.display = 'flex'
    }
    function hideMenusDropdown(){
        document.querySelector('.menus-dropdown').style.display = 'none'
    }

    function showInfoDropdown(){
        document.querySelector('.info-ul').style.display = 'flex'
    }
    function hideInfoDropdown(){
        document.querySelector('.info-ul').style.display = 'none'
    }

    function showMobileMenu(){
        document.querySelector('.close-mobile-menu').style.display = 'block'
        document.querySelector('.hamburger-menu-icon').style.display = 'none'
    }
    function hideMobileMenu(){
        document.querySelector('.close-mobile-menu').style.display = 'none'
        document.querySelector('.hamburger-menu-icon').style.display = 'block'
    }

    return(
        <>
            <div className='navbar'>
                <IoCloseSharp   className='close-mobile-menu'
                                onClick={hideMobileMenu} 
                                style={{display:'none'}} />
                <GiHamburgerMenu    className='hamburger-menu-icon'
                                    onClick={showMobileMenu} 
                                     />
                <span className='logo'>
                    <Link to='/'>olea</Link>
                </span>{/* .logo */}

                <div className='navbar-tablet' style={{display:'none',width:'500px',alignItems:'center',justifyContent:'space-between'}}>

                    <span className='tablet-logo'>
                        <Link to='/'>olea</Link>
                    </span>
                    
                    <span className='tablet-socials'>
                        <a href='https://www.facebook.com/oleanewhaven/' target='_blank'>
                            <BiLogoFacebook />
                        </a>&nbsp;
                        <a href='https://www.instagram.com/oleanewhaven/' target='_blank'>
                            <AiOutlineInstagram />
                        </a>
                    </span>
                </div>{/* .navbar-tablet */}
                
                <div className='navbar-menu' style={{position:'relative'}}>
                            
                    <ul className='nav-ul' style={{position:'relative',top:'0',left:'0'}}>
                        <li><Link to='/'>home</Link></li>
                        <li style={{position:'relative'}} 
                            onMouseOver={showInfoDropdown}
                            onMouseLeave={hideInfoDropdown}>info
                                <ul className='info-ul nav-info'
                                    onMouseOver={showInfoDropdown}
                                    onMouseLeave={hideInfoDropdown} 
                                    style={{display:'none',                    
                                            border:'1px solid black',
                                            padding:'10px 10px',
                                            background:'#262626',
                                            width:'160px',
                                            flexDirection:'column',
                                            position:'absolute',
                                            left:'-20px',
                                            top:'100%'}}>
                                    <li><Link to='/info'>info</Link></li>
                                    <li><Link to='/free-parking'>free parking</Link></li>
                                    <li><Link to='/chef-bio'>chef bio</Link></li>
                                    <li><Link to='/private-parties'>private parties</Link></li>
                                </ul>
                        </li>
                        <li style={{position:'relative'}} 
                            onMouseOver={showMenusDropdown}
                            onMouseLeave={hideMenusDropdown}>
                                menus
                                <ul className='menus-dropdown' 
                                    onMouseOver={showMenusDropdown}
                                    onMouseLeave={hideMenusDropdown} 
                                    style={{display:'none',
                                            position:'absolute',
                                            top:'100%',
                                            border:'1px solid black',
                                            padding:'10px',
                                            background:'#262626',
                                            flexDirection:'column',
                                            left:'-20px'}}>
                                    <li><Link to='/dinner'>dinner</Link></li>
                                    <li><Link to='/specials'>specials</Link></li>
                                    <li><Link to='/dessert'>dessert</Link></li>
                                </ul>
                        </li>
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

            <div className='navbar-mobile'>
                <ul>
                    <li>home</li>
                    <li>info</li>
                    <li>info</li>
                    <li>free parking</li>
                    <li>chef bio</li>
                    <li>private parties</li>
                    <li>menus</li>
                    <li>dinner</li>
                    <li>specials</li>
                    <li>dessert</li>
                    <li>press</li>
                    <li>gift cards</li>
                    <li>nesletter</li>
                    <li>reservations</li>
                </ul>
            </div>{/* .navbar-mobile */}
            <hr/>
        </>
    )
}