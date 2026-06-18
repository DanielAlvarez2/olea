import './Auth.css'
import {Link} from 'react-router'
import { RiShieldKeyholeFill } from "react-icons/ri";

export default function Login(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    async function loginUser(formData){
        if(formData.get('login-password').trim() == ''){
            alert(`Password cannot be empty.`)
            setTimeout(()=> document.querySelector('#login-email').value = formData.get('login-email'),10)
            return
        }
        await fetch(`${BASE_URL}/api/users/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email: formData.get('login-email').trim().toLowerCase(),
                formSubmittedPassword: formData.get('login-password').trim().toLowerCase()
            })
        })
        .then(res=>res.json())
        .then(validUser=>{
            if(validUser){
                window.location.replace('/dashboard')
            }else{
                alert('Incorrect Email or Password.')
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className='auth-wrapper'>
            <form action={loginUser}>
                <div style={{   display:'flex',
                                // background:'pink',
                     alignItems:'center',
                     gap:'10px',
                     justifyContent:'center',           
                            }}>
                    <h2>Staff Login</h2>
                    <RiShieldKeyholeFill size='25' />
                </div>
                <br/>

                <label>    
                    Email:<br />
                    <input  type='email' 
                            id='login-email'
                            name='login-email'
                            required
                            placeholder='name@website.com' />
                </label>
                <br/><br/>

                <label>
                    Password:<br/>
                    <input  type='password'
                            id='login-password'
                            required
                            placeholder='*****'
                            name='login-password' />
                </label>    
                <br/><br/>

                <br/><br/>
                <button>LOG IN</button>
                <br/>
                <div>Don't have an account? <Link to='/register'>Register</Link></div>
            </form>
        </div>
    )
}