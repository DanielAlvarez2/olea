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

                            <span className='bold'>Gift cards are available now!</span> Please fill in the information and click the button below to purchase one through PayPal (an account is not required). If you would like an amount not listed below, or if you would prefer to order a gift card by phone, please give us a call at 203.780.8925. 
                            <br/><br/>
                            <span className='bold'>Gift cards will be mailed via standard mail within 48 hours, except for orders received on Sunday which will be processed on Tuesday. 
                            <br/><br/>
                            At this time, we do not offer printable or electronic gift cards.</span> Please provide your telephone number so we have a way to contact you in case of any issues. Thank you!
                            <br/><br/>

                            amount<br/>
                            <select>
                                <option>$50</option>
                                <option>$75</option>
                                <option>$100</option>
                                <option>$125</option>
                                <option>$150</option>
                                <option>$175</option>
                                <option>$200</option>
                                <option>$225</option>
                                <option>$250</option>
                                <option>$300</option>
                            </select>
                            <br/><br/>
                            
                            Please make sure to provide a phone number. We will only contact you if there is an issue with the processing of your gift card.
                            <br/>
                            phone number *REQUIRED*<br/>
                            <input type='text' required /><br/><br/>
                            provide "TO" and "FROM" info<br/>
                            <input type='text' />
                            
                            <br/><br/>

                            <button>buy now</button>

                            <br/><br/><br/>

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