import './index.css'
import Navbar from './components/Navbar.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />
                <h1>Private Parties</h1>
                
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}