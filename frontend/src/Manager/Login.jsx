import './Auth.css'
import {Link} from 'react-router'

export default function Login(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    return(
        <div className='auth-wrapper'>
            <form>
                <h2>Staff Login</h2>
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