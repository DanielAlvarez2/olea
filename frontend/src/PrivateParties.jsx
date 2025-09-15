import './index.css'
import './PrivateParties.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import OpenTable from './components/OpenTable.jsx'

export default function PrivateParties(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                            <h1>Private Parties</h1>
                    <div className='private-parties-flexbox'>
                        
                        <div className='private-parties-left'>
                            <img src='./private-parties.jpg' />
                            <h2>Let Us Make Your Events Special, and Delicious</h2>

                            Plan a festive and delicious gathering at Olea, where guests will enjoy Chef Manuel Romero’s innovative interpretation of Spanish and Mediterranean cuisine, praised as “creative, beautifully prepared” by The New York Times and given an Extraordinary rating from Connecticut Magazine.
                            <br/><br/>
                            A special menu will be designed for each gathering, or guests may build an event by selecting items from our regular menus.
                            <br/><br/>
                            Olea can accommodate up to 35 guests for private events in part of the restaurant enclosed by a shimmering curtain, and larger parties can include up to 80 guests throughout Olea. And we love to create special nooks for smaller, more intimate gatherings.
                            <br/><br/>
                            Call Olea at 203.780.8925, or email info@oleanewhaven.com, to begin the process of creating a unique event. 

                        </div>{/* .private-parties-left */}
                        
                        <div className='private-parties-right'>
                            <OpenTable />
                        </div>{/* .private-parties-right */}
                    </div>{/* .private-parties-flexbox */}


                </main>

                <Footer />
                
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}