import './index.css'
import './Dessert.css'
import Navbar from './components/Navbar.jsx'
import OpenTable from './components/OpenTable.jsx'
import Footer from './components/Footer.jsx'

export default function Dessert(){
    return (
        <div className='page-wrapper webpage'>
            <div className='webpage-wrapper'>
                <Navbar />

                <main>
                    <div className='dessert-flexbox'>
                                                    
                        <div className='dessert-left'>
                                                
                            <h2>DESSERT MENU</h2>
                            <span className='cheese'>
                                <span>cheese platter</span>
                                <span>for one $12 / for two $18</span>
                            </span>
                                                

                            trio of manchego, murcia, mahón; walnuts, quince paste, toast


                            <br/><br/><br/><br/>
                            we do our best to keep this information accurate and up to date, but because we make frequent adjustments, based on season and availability, our menus are subject to change
                         </div>{/* .dessert-left */}
                                                    
                        <div className='dessert-right'>
                            <OpenTable />
                        </div>{/* .dessert-right */}
                    </div>{/* .dessert-flexbox */}
                </main>

                <Footer />            
            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}