import { BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import './Footer.css'

export default function Footer(){
    return(
        <div className='footer-flexbox-bottom'>
                    <hr style={{marginTop:'100px',marginBottom:'25px'}}/>
                    <footer style={{maxWidth:'450px'}}>

                        <div className='footer-socials' style={{padding:'0',marginBottom:'20px'}}>
                            <a href='https://www.facebook.com/oleanewhaven/' target='_blank'>
                                <BiLogoFacebook />
                            </a>&nbsp;
                            <a href='https://www.instagram.com/oleanewhaven/' target='_blank'>
                                <AiOutlineInstagram />
                            </a>
                        </div>{/* .footer-socials */}
                        <div className='flexbox-address-phone'>
                            <span>39 high street, new haven, connecticut</span>
                            <span className='footer-pipe'> &nbsp;|&nbsp; </span>
                            <span>203.780.8925</span>
                        </div>{/* .flexbox-address-phone */}
                            
                        <br/>
                        
                        <div className='flexbox-footer-hours'>
                            <span>Tuesday—Saturday, 5—10 pm</span>
                            <span className='footer-hours-space'>&nbsp;</span>
                            <span>(last seating at 8:30)</span>
                        </div>{/* .flexbox-footer-hours */}
                        
                        <br/>
                        In the heart of downtown New Haven, Olea offers an innovative interpretation of Spanish and Mediterranean cuisine. Chef Manuel Romero and his team explore these flavors in their food, wine, and cocktails, locally sourcing many products and importing specialty items from the Mediterranean region.<br/>
                        
                        <br/>

                        <div className='flexbox-footer-copyright'>
                            <span>copyright 2014–{new Date().getFullYear()}  by olea</span>
                            <span className='footer-copyright-space'>.&nbsp;</span>
                            <span>graphic design by Rebecca Martz</span>
                        </div>{/* .flexbox-footer-copyright */}
                        <br/><br/><br/>
                    </footer>
        
        </div>/* .footer-flexbox-bottom */
    )
}
