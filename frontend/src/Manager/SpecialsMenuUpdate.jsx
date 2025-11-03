import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'


export default function SpecialsMenuUpdate(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewSpecial(formData){
        console.log(formData.get('menu'))
        console.log(formData.get('section'))
        console.log(formData.get('name'))
        console.log(formData.get('allergies-abbreviated'))
        console.log(formData.get('allergies-complete'))
        console.log(formData.get('description'))
        console.log(formData.get('price'))
        console.log(formData.get('sequence'))

        await fetch(`${BASE_URL}/api/special`,{ method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    menu: formData.get('menu'),
                                                    section: formData.get('section'),
                                                    name: formData.get('name'),
                                                    allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                    allergiesComplete: formData.get('allergies-complete'),
                                                    description: formData.get('description'),
                                                    price: formData.get('price')
                                                })
        })
    }

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


                    <form   action={createNewSpecial} 
                            style={{background:'lightgreen',
                                    margin:'20px auto',
                                    padding:'20px 10px',
                                    borderRadius:'10px',
                                    width:'320px'}}>
                        <h2 style={{textAlign:'center'}}>create new special</h2>
                        <br/>
                        <input  type='hidden'
                                name='menu' 
                                value='specials' />
                        <label>
                            section&nbsp; 
                            <select name='section' required defaultValue=''>
                                <option disabled value=''>select...</option>
                                <option>appetizers</option>
                                <option>entrées</option>
                                <option>desserts</option>
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            name<br/>
                            <input  type='text' 
                                    name='name' 
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - abbreviated<br/>
                            <input  type='text' 
                                    name='allergies-abbreviated' 
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete<br/>
                            <input  type='text'
                                    name='allergies-complete' 
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            description<br/>
                            <textarea   rows='5'
                                        name='description' 
                                        style={{width:'100%'}}></textarea>
                        </label>
                        <br/><br/>
                        <label>
                            price<br/>
                            <input  type='text'
                                    required 
                                    name='price' />
                        </label>
                        <br/><br/>
                        <label>
                            sequence<br/>
                            <input  type='text'
                                    required
                                    name='sequence' 
                                    style={{width:'5ch'}} />
                        </label>
                        <br/><br/>

                        <input  type='submit' 
                                style={{padding:'10px 10px',
                                        cursor:'pointer',
                                        borderRadius:'10px',
                                        display:'block',
                                        margin:'0 auto',
                                        fontSize:'20px'}}
                                value='create new special' />

                    </form>   

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}