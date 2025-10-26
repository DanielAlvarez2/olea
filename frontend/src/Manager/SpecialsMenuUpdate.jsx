import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function SpecialsMenuUpdate(){
    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='specials' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>specials > update</div>


                    <div id='main-menu' 
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


                    <form style={{background:'lightgrey'}}>
                        <label>
                            Section<br/>
                            <select>
                                <option>Appetizer</option>
                                <option>Entrée</option>
                                <option>Dessert</option>
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            Name<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            Allergies - abbreviated<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            Allergies - complete<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            Description<br/>
                            <textarea></textarea>
                        </label>
                        <br/><br/>
                        <label>
                            Price<br/>
                            <input type='text' />
                        </label>
                        <br/><br/>
                        <label>
                            Sequence<br/>
                            <input type='text' />
                        </label>

                    </form>   

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}