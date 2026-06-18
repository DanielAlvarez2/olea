import './Auth.css'
import {Link} from 'react-router'
import { FaUserPlus } from "react-icons/fa";

export default function Register(){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createUser(formData){

        let duplicateUser = false

        if(formData.get('register-password').trim() == ''){
            alert(`Password cannot be empty.`)
            setTimeout(()=> document.querySelector('#register-email').value = formData.get('register-email'),10)
            setTimeout(()=> document.querySelector('#register-username').value = formData.get('register-username'),10)
            return
        }

        if(formData.get('register-username').trim() == ''){
            alert(`User Name cannot be empty.`)
            setTimeout(()=> document.querySelector('#register-email').value = formData.get('register-email'),10)
            setTimeout(()=> document.querySelector('#register-username').value = formData.get('register-username'),10)
            return
        }


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
                        .then(data=>
                            {
                                    if(data){
                                        alert(`
A user account with this email address already exists.
If that account belongs to you, log in using your 
password in the Login Page. You will automatically
be redirected there after closing this screen.                                            
                                            `)
                                        window.location.replace('/login')
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
                            .then(alert(`
Your user account has been created successfully.
You will now be redirected to the login page.                                
                                `))
                            .then(window.location.replace('/login'))
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
                <div style={{   display:'flex',
                                // background:'pink',
                     alignItems:'center',
                     gap:'10px',
                     justifyContent:'center',           
                            }}>
                    <h2>Register</h2> 
                    <FaUserPlus size='25' />
                </div>
                
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