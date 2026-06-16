import './Auth.css'
import {Link} from 'react-router'

export default function Register(){
    return(
        <div className='auth-wrapper'>
            <form>
                <h2>Register</h2>
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

                <label>
                    Confirm Password:<br/>
                    <input  type='password' 
                            placeholder='*****'
                            required
                            name='confirm-password' />
                </label>
                <br/><br/>

                <label>
                    User Name:<br/>
                    <input  type='text' 
                            name='username'
                            required
                            placeholder='John S' />
                </label>
                <br/><br/>

                <button>CREATE ACCOUNT</button><br/>
                <div>Already have an account? <Link to='/login'>Log In</Link></div>
            </form>
        </div>
    )
}