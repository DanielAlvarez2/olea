import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Newsletter</h1>
                </main>

                <Footer />
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}