import './Auth.css'
import {Link} from 'react-router'
import { RiShieldKeyholeFill } from "react-icons/ri";

export default function Login(){


    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    
    
    let allCookiesArray = []
    let currentSessionCookie = ''
    let allCookies = ''
    let oleaCookie
    allCookies = document.cookie ? document.cookie : ''
    if (allCookies) allCookiesArray = allCookies.split('; ')
    if(allCookiesArray) oleaCookie = allCookiesArray.filter(cookie=>cookie.startsWith('olea-session'))
    if(oleaCookie.length > 0) currentSessionCookie = oleaCookie[0].split('=')[1]
    if (currentSessionCookie){
        fetch(`${BASE_URL}/api/sessions/compare/${currentSessionCookie}`)
            .then(res=>res.json())
            .then(data=>data ? window.location.replace('/manager') : console.log('User is not logged in yet'))
            .catch(err=>console.log(err))
    }


    async function createSession(id){
        await fetch(`${BASE_URL}/api/sessions/create`, {method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({id})
        })
        .then(res=>res.json())
        // .then(data=>console.log(`data: ${data}`))
        .then(data=>document.cookie = `olea-session=${data};max-age=86400;path=/`)
        // .then(alert('Session Created'))
        .catch(err=>console.log(err))
    }

  function deleteSession(){
    let currentSession
      if(document.cookie) currentSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
      if(currentSession){
        fetch(`${BASE_URL}/api/sessions/logout/${currentSession}`)
        //   .then(alert('Sessions Cleared'))
          .catch(err=>console.log(err))      
      }
  }

  function deleteCookie(){
    document.cookie = 'olea-session=; max-age=0; path=/'
  }
  


    async function loginUser(formData){
        deleteCookie()
        if(formData.get('login-password').trim() == ''){
            alert(`Password cannot be empty.`)
            setTimeout(()=> document.querySelector('#login-email').value = formData.get('login-email'),10)
            return
        }
        fetch(`${BASE_URL}/api/users/login`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email: formData.get('login-email').trim().toLowerCase(),
                formSubmittedPassword: formData.get('login-password').trim().toLowerCase()
            })
        })
        .then(res=>res.json())
        .then(unknownUser=>{
            // console.log(`unknownUser[0]._id: ${unknownUser[0]._id}`)
             if(!unknownUser[0]){
                alert('Incorrect Email or Password.')
                return
            }else{
                if(unknownUser[0].role == 'guest'){
                    deleteSession()
                    setTimeout(()=>window.location.replace('/guest-user'),500)
                    // window.location.replace('/guest-user')
                } 
                if(unknownUser[0].role == 'manager'){
                    createSession(unknownUser[0]._id)
                    setTimeout(()=>window.location.replace('/manager'),500)
                    // window.location.replace('/manager')
                    
                } 
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
                            autoComplete='off'
                            placeholder='name@website.com' />
                </label>
                <br/><br/>

                <label>
                    Password:<br/>
                    <input  type='password'
                            id='login-password'
                            required
                            placeholder='*****'
                            autoComplete='off'
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