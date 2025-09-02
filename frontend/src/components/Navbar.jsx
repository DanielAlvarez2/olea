import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import {Link} from 'react-router'

export default function Navbar(){
    return(
        <>
            <div className='navbar'>
                
                <span className='logo'>
                    <Link to='/'>olea</Link>
                </span>{/* .logo */}

                <div className='navbar-menu'>
                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li>info</li>
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