import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage' >
            <div className='webpage-wrapper'>
                <Navbar />
                <main>
                    <div id='homepage-slideshow' style={{   height:'610px',
                                                            border:'1px solid red',
                                                            placeContent:'center',
                                                            display:'grid'}}>
                        <h1>Slideshow</h1>
                    </div>{/* #homepage-slideshow */}

                    <div id='slideshow-mini' style={{   width:'100%',
                                                        marginTop:'20px',
                                                        border:'1px solid red',
                                                        height:'80px'}}>
                        <h1>Slideshow Mini</h1>
                    </div>{/* #slideshow-mini */}

                    <Footer/>
                </main>


            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}