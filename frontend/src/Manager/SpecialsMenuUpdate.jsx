import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function SpecialsMenuUpdate(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials &gt; update</div>


                    <div className='main-menu' 
                        style={{display:'flex',
                                flex:'1',
                                
                                flexDirection:'column',
                                gap:'10px',
                                justifyContent:'space-evenly',
                                alignItems:'center',
                                height:'100%',
                                border:'1px solid green'
                                }}>
                        <div style={{   width:'4.25in',
                                        minHeight:'5.5in',
                                        padding:'15px 55px',
                                        display:'flex',
                                        color:'red',
                                        flexDirection:'column',
                                        backgroundImage:'url(./SpecialsFront.jpg)',
                                        backgroundSize:'4.25in 5.5in',
                                        border:'1px solid black'}}>
                            <div>
                                <div className='specials-h1'>today's specials</div>
                            </div>
                            <footer style={{marginTop:'auto',
                                            fontSize:'11px',
                                            fontFamily:'serif'}}>
                                Consumer advisory: consumption of undercooked meat, poultry, eggs, 
                                or seafood may increase the risk of foodborne illnesses.<br/>
                                <span style={{fontWeight:'900'}}>
                                Please alert your server if you have special dietary requirements:<br/>
                                gl (gluten), d (dairy), n (nuts)</span>
                            </footer>
                        </div>
                    </div>         


                    <form style={{  background:'lightgreen',
                                    margin:'0 auto',
                                    padding:'0 10px',
                                    width:'320px'}}>
                        <h2 style={{textAlign:'center'}}>create new special</h2>
                        <br/>
                        <label>
                            section&nbsp; 
                            <select required defaultValue=''>
                                <option disabled value=''>select...</option>
                                <option>appetizer</option>
                                <option>entrée</option>
                                <option>dessert</option>
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            name<br/>
                            <input type='text' style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - abbreviated<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            description<br/>
                            <textarea></textarea>
                        </label>
                        <br/><br/>
                        <label>
                            price<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            sequence<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>

                    </form>   

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}