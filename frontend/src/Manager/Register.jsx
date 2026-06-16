import './Auth.css'
import {Link} from 'react-router'

export default function Register(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:5173'    
    
    async function createUser(formData){

        let duplicateUser = false

        if (formData.get('register-password') != formData.get('register-confirm-password')){
            alert('Passwords do not match')
            setTimeout(()=>document.querySelector('#register-email').value = formData.get('register-email'),10)
            setTimeout(()=>document.querySelector('#register-username').value = formData.get('register-username'),10)
        }else{
            await fetch(`${BASE_URL}/api/users/new-email`,
                        {   method:'POST',
                            headers:{'Content-Type':'application/json'},
                            body: JSON.stringify({
                                email: formData.get('register-email').trim().toLowerCase()
                            })
                        }
                        )
                        .then(res=>res.json())
                        .then(data=>{
                                    if(data){
                                        alert('An account with that email address already exists')
                                        window.location.replace(`${BASE_URL}/login`)
                                        duplicateUser = true
                            }
                        })
                        .catch(err=>console.log(err))
            if (!duplicateUser){
                await fetch(`${BASE_URL}/api/users/create`,
                            {   method:'POST',
                                headers:{'Content-Type':'application/json'},
                                body: JSON.stringify({
                                    username: formData.get('register-username').trim(),
                                    email: formData.get('register-email').trim().toLowerCase(),
                                    password: formData.get('register-password'),
                                }) 
                            })
                            .then(alert('Account Created'))
                            .catch(err=>console.log(err))
            }
        }
        // alert(`
        //         ${formData.get('register-email')}
        //         ${formData.get('register-password')}
        //         ${formData.get('register-confirm-password')}
        //         ${formData.get('register-username')}
        //     `)
    }
    return(
        <div className='auth-wrapper'>
            <form action={createUser}>
                <h2>Register</h2>
                <br/>

                <label>
                    Email:<br />
                    <input  type='email'
                            name='register-email' 
                            id='register-email' 
                            required
                            placeholder='name@website.com' />
                </label>
                <br/><br/>

                <label>
                    Password:<br/>
                    <input  type='password' 
                            required
                            placeholder='*****'
                            id='register-password'
                            name='register-password' />
                </label>
                <br/><br/>

                <label>
                    Confirm Password:<br/>
                    <input  type='password' 
                            placeholder='*****'
                            required
                            id='register-confirm-password'
                            name='register-confirm-password' />
                </label>
                <br/><br/>

                <label>
                    User Name:<br/>
                    <input  type='text' 
                            name='register-username'
                            id='register-username'
                            required
                            placeholder='John S' />
                </label>
                <br/><br/>

                <br/><br/>
                <button>CREATE ACCOUNT</button><br/>
                <div>Already have an account? <Link to='/login'>Log In</Link></div>
            </form>
        </div>
    )
}