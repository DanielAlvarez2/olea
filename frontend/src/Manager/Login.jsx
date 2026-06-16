import './Auth.css'
import {Link} from 'react-router'

export default function Login(){
    return(
        <div className='auth-wrapper'>
            <form>
                <h2>Staff Login</h2>
                <br/>

                <label>    
                    Email:<br />
                    <input  type='email' 
                            name='email'
                            required
                            placeholder='name@website.com' />
                </label>
                <br/><br/>

                <label>
                    Password:<br/>
                    <input  type='password'
                            required
                            placeholder='*****'
                            name='password' />
                </label>    
                <br/><br/>

                <button>LOG IN</button>
                <br/>
                <div>Don't have an account? <Link to='/register'>Register</Link></div>
            </form>
        </div>
    )
}