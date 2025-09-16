import './index.css'
import './Press.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function Press(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Press</h1>

                    <div className='press-flexbox'>
                        <div className='press-left'>
                            <a  href='https://www.theinfatuation.com/new-haven/guides/best-new-haven-restaurants-bars-apizza?ifsb=yes' 
                                target='_blank'>
                            The Best Restaurants in New Haven 2025</a><br/>
                            24 February 2025

                            <br/><br/>


                        </div>{/* .press-left */}    
                        
                        <div className='press-right'>
                            
                            <img src='./2024_DC2-SQUARE-US.webp' />
                            
                        </div>{/* .press-right */}    
                    </div>{/* .press-flexbox */}
                </main>

                <Footer />            
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}