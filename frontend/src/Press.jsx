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

                            <a target='_blank' href='https://www.ctinsider.com/food/article/connecticut-magazine-overall-excellence-2025-20051698.php?utm_content=cta&sid=668845765763f438d1d8c44c&ss=P&st_rid=6a9c906d-afb0-4efa-86b0-ea5a40629bd9&utm_source=newsletter&utm_medium=email&utm_campaign=CT_Taste_Alert'>
                            <span style={{fontStyle:'italic'}}>Connecticut Magazine's</span> top restaurants for 2025</a><br/>
                            Overall Excellence and Best Spanish/Portuguese category<br/>
                            24 January 2025

                            <br/><br/>

                            <a target='_blank' href='https://ctexaminer.com/2024/04/17/dining-at-olea-as-restaurant-week-kicks-off-in-new-haven/'>
                            Dining at Olea, as Restaurant Week Kicks Off in New Haven</a><br/>
                            17 April 2024

                            <br/><br/>

                            <a target='_blank' href='https://www.ctinsider.com/projects/2023/connecticut-magazine-most-romantic-restaurants/'>
                            The 25 Most Romantic Restaurants in Connecticut</a><br/>
                            19 January 2023

                            <br/><br/>

                            <a target='_blank' href='https://www.ctinsider.com/projects/2023/connecticut-magazine-best-restaurants-2023/'>
                            <span style={{fontStyle:'italic'}}>Connecticut Magazine's</span> Best Restaurants 2023<br/></a>
                            19 January 2023

                            <br/><br/>

                            <a target='_blank' href='https://www.wtnh.com/ct-style/ct-style-holidays-in-new-haven-olea/'>
                            CT Style Holidays in New Haven: Olea<br/>
                            </a>
                            30 November 2022

                            <br/><br/>

                            <a target='_blank' href='https://www.infonewhaven.com/who-knew-blog/delicious-thanksgiving-appetizer-get-the-party-started-with-chef-romeros-sharable-app/'>
                                Delicious Holiday Appetizer: Get the Party Started with Chef Romero's Shareable App<br/>
                            </a>
                            16 November 2022

                            <br/><br/>

                            Diners' Choice &mdash; Connecticut / Best Overall Restaurants 2022<br/>
                            OpenTable, November 2022

                            <br/><br/>
                            
                            <a target='_blank' href='https://www.nhregister.com/food_copy_3481_20210610165811/slideshow/connecticut-magazine-best-restaurants-new-haven-232660.php' >
                            The best New Haven-area restaurants for 2022, according to Connecticut Magazine</a><br/>
                            12 March 2022

                            <br/><br/>

                            <a target='_blank' href='https://www.ctinsider.com/connecticutmagazine/food-drink/article/Best-Restaurants-2022-Readers-Choice-winners-17046496.php'>
                            Olea honored for Best Desserts and Best Overall Excellence 
                            in <span style={{fontStyle:'italic'}}>Connecticut Magazine's</span> Best Restaurants 2022: 
                            Experts' Picks and Best Spanish/Portuguese: New Haven County, and Statewide Runner-up: Readers' Choice<br/>
                            </a>
                            29 December 2021

                            <br/><br/>

                            <a target='_blank' href='https://www.ctbites.com/blog/2021/9/30/crazies'>
                            The CRAzies 2021<br/>
                            </a>
                            Connecticut Restaurant Association Awards Gala. Chef of the Year finalist 2021: Manuel Romero

                            <br/><br/>
                            
                            <a target='_blank' href='https://spoonuniversity.com/school/yale/olea-an-elegant-practice-in-modern-spanish-cuisine/'>
                            Olea: An Elegant Practice in Modern Spanish Cuisine    
                            <br/></a>
                            Shirley Wang, Christina Tuttle, and Janie Wu, Spoon University

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