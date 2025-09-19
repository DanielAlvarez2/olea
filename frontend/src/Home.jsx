import './index.css'
import './Home.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Home(){
    useEffect(()=>window.scrollTo(0,0),[])
    return (
        <div className='page-wrapper webpage' >
            <div className='webpage-wrapper'>
                <Navbar />

                <main style={{display:'grid',placeContent:'center'}}>
                    <div>
                        <div id='homepage-slideshow'>
                            <h1>Slideshow</h1>
                        </div>{/* #homepage-slideshow */}

                        <div id='slideshow-mini' style={{   width:'100%',
                                                            marginTop:'20px',
                                                            border:'1px solid red',
                                                            display:'grid',
                                                            placeContent:'center',
                                                            height:'80px'}}>
                            <h1>Slideshow Mini</h1>
                        </div>{/* #slideshow-mini */}
                    </div>

                </main>
                
                <Footer/>


            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}