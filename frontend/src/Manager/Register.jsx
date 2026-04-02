import './Auth.css'
import {Link} from 'react-router'

export default function Register(){
    return(
        <div className='auth-wrapper'>
            <form>
                <h2>Register</h2>
                <br/>
                Email:<br />
                <input type='email' /><br/><br/>
                Password:<br/>
                <input type='password' /><br/><br/>
                <button>CREATE ACCOUNT</button><br/>
                <div>Already have an account? <Link to='/login'>Log In</Link></div>
            </form>
        </div>
    )
}