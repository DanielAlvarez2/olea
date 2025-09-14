import './index.css'
import './Giftcards.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'

export default function Home(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <h1>Gift Cards</h1>

                    <div className='giftcards-flexbox'>
                        
                        <div className='giftcards-left'>

                            Gift cards are available now! Please fill in the information and click the button below to purchase one through PayPal (an account is not required). If you would like an amount not listed below, or if you would prefer to order a gift card by phone, please give us a call at 203.780.8925. 
                            <br/><br/>
                            Gift cards will be mailed via standard mail within 48 hours, except for orders received on Sunday which will be processed on Tuesday. 
                            <br/><br/>
                            At this time, we do not offer printable or electronic gift cards. Please provide your telephone number so we have a way to contact you in case of any issues. Thank you!
                            <br/><br/>
                            amount

                            $50
                            phone number *REQUIRED*
                            Please make sure to provide a phone number. We will only contact you if there is an issue with the processing of your gift card.
                            provide to and from info
                            PayPal - The safer, easier way to pay online! 
                            <br/><br/>
                            
                            <img src='./giftcard.jpg' />

                        </div>{/* .giftcards-left */}
                        
                        <div className='giftcards-right'>
                            <OpenTable />
                        </div>{/* .giftcards-right */}
                    </div>{/* .giftcards-flexbox */}


                </main>

                <Footer />

            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}