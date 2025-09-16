import './index.css'
import './ChefBio.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function ChefBio(){
    useEffect(()=>window.scrollTo(0,0),[])
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                            <h1>Chef Bio</h1>
                    <div className='chef-bio-flexbox'>
                        
                        <div className='chef-bio-left'>
                            <img src='./chef-bio.jpeg' />
                            <h2>Manuel Romero, Executive Chef at Olea</h2>

                            Born in Spain, Chef Manuel Romero was raised in a family that loved cooking traditional and tasty food. When he was a child, his family moved to the United States, and he developed a passion for cooking by watching, helping, and learning alongside his mother. He attended New York Technical College in Brooklyn, New York, where he studied hospitality management with a focus on the culinary arts. Building upon his training and honing his craft, Chef Romero has worked in New York with Chef Luis Bollo of Meigas and at the Hyatt Hotel, as well as at Meson Galicia in Connecticut. He has also spent time training in Spain.
                            <br/><br/>
                            In 2001, he joined Café Pika Tapas as a Sous Chef. One year later, the restaurant expanded its culinary focus beyond tapas and changed its name to Ibiza (which then became a highly-acclaimed Spanish restaurant). He moved up the culinary ladder and, years later, was appointed Executive Chef. His vision to create an atmosphere where his team enjoyed their work while improving their culinary knowledge and always thinking about the customer was realized.
                            <br/><br/>
                            In late summer of 2014, Chef Romero opened Olea restaurant in New Haven, Connecticut, offering guests his innovative interpretation of Spanish and Mediterranean cuisine. As the executive chef and co-owner, he is continuously striving to build upon his vision of providing exemplary dishes and a comprehensive guest experience, while also encouraging a rewarding team environment for his staff.
                        </div>{/* .chef-bio-left */}
                        
                        <div className='chef-bio-right'>
                            <OpenTable />
                        </div>{/* .chef-bio-right */}
                    </div>{/* .chef-bio-flexbox */}

                </main>

                <Footer />            
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}