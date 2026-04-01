import './Auth.css'
import {Link} from 'react-router'

export default function Login(){
    return(
        <div className='auth-wrapper'>
            <form>
                <h2>Staff Login</h2>
                <br/>
                Email:<br />
                <input type='email' /><br/><br/>
                Password:<br/>
                <input type='password' /><br/><br/>
                <button>LOG IN</button>
                <br/>
                <div>Don't have an account? <Link to='/register'>Register</Link></div>
            </form>
        </div>
    )
}