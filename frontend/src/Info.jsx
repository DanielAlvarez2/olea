import './index.css'
import './Info.css'
import {Link} from 'react-router'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Home(){
    useEffect(()=>window.scrollTo(0,0),[])    
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Info</h1>

                    <div className='info-flexbox'>
                        
                        <div className='info-left'>
                            In the heart of downtown New Haven, Olea offers an innovative interpretation of Spanish and Mediterranean cuisine. Chef Manuel Romero and his team explore these flavors in their food, wine, and cocktails, locally sourcing many products and importing specialty items from the Mediterranean region. The restaurant takes its name from a genus of about forty species, including the olive, in the family Oleaceae, native to temperate and tropical regions of Europe, Africa, Asia, and Australasia.
                            <br/><br/> 

                            <Link to='/chef-bio'>More information on Chef Manuel Romero</Link>
                            <br/><br/>
                            
                            <h1>contact us</h1>

                            39 High Street, New Haven, Connecticut, 06510<br/>
                            203.780.8925 •  info@oleanewhaven.com<br/><br/>

                            <h1>gift cards</h1>

                            Gift cards are available. Purchase one <Link to='/giftcards'>online here</Link> or give us a call at 203.780.8925.
                            <br/><br/>

                            <h1>hours</h1>

                            Tuesday — Saturday, 5 — 10 pm (last seating at 8:30)
                            <br/><br/>

                            <h1>private parties</h1>

                            Olea can accommodate up to 35 guests for private events in part of the restaurant enclosed by a shimmering curtain, and larger parties can include up to 80 guests throughout Olea. And we love to create special nooks for smaller, more intimate gatherings.
                            <br/><br/>
                            Call Olea at 203.780.8925, or email info@oleanewhaven.com, to begin the process of creating a unique event. 
                            <br/><br/>
                            <Link to='/private-parties'>more information is available here</Link>
                            <br/><br/>
                            <h1>attire</h1>

                            Business casual attire is recommended. No tank tops for men, please.
                            <br/><br/>
                            <h1>employment</h1>

                            If you are seeking employment at Olea:<br/>
                            Email your resume to info@oleanewhaven.com<br/>
                             ~ OR ~ <br/>
                            Fill out an online application at <Link to='/jobs'>oleanewhaven.com/jobs</Link>
                            <br/><br/>
                            <h1><Link to='/free-parking'>free parking info here</Link></h1>                            

                        </div>{/* .info-left */}
                        
                        <div className='info-right'>
                            <div className='map-wrapper'>
                                <iframe width="300" 
                                        height="300" 
                                        frameborder="0" 
                                        scrolling="no" 
                                        marginheight="0" 
                                        marginwidth="0" 
                                        id="gmap_canvas" 
                                        src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=39%20high%20st%20New%20Haven+(Olea)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe> 
                                <script type='text/javascript' 
                                        src='https://embedmaps.com/google-maps-authorization/script.js?id=6b774c603aab23d1f3ff7332f89fc9fcfab9dc49'>                                        
                                </script>
                            </div>{/* .map-wrapper */}

                            <OpenTable />
                        </div>{/* .info-right */}
                    </div>{/* .info-flexbox */}
                </main>

                <Footer />
                
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}