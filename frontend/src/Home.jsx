import './index.css'
import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"

export default function Home(){
    return (
        <div className='page-wrapper webpage' style={{backgroundImage:"url('./nav.png')",backgroundSize:'100%'}}>
            <div className='webpage-wrapper'>
                <div className='navbar'>
                    <span className='logo' style={{color:'red',paddingRight:'60px'}}>
                        olea
                    </span>{/* .logo */}

                    <div className='navbar-menu'>
                        <ul>
                            <li>home</li>
                            <li>info</li>
                            <li>menus</li>
                            <li>press</li>
                            <li>gift cards</li>
                            <li>newsletter</li>
                            <li>reservations</li>
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

            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}