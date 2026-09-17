import { FaUserCheck } from "react-icons/fa";

export default function GuestUser(){

      const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    function deleteSession(){
      let currentSession
      if(document.cookie) currentSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
      if(currentSession){
        fetch(`${BASE_URL}/api/sessions/logout/${currentSession}`)
          // .then(alert('Sessions Cleared'))
          .catch(err=>console.log(err))      
      }
  }
  
  deleteSession()                    

    return(
            <div style={{ width:'100%',
                          minHeight:'100vh',
                          display:'grid',
                          placeContent:'center'}}>
                <div style={{background:'#ccc',padding:'30px',borderRadius:'10px',maxWidth:'375px'}}>
                  <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center',gap:'20px'}}>
                    <h1 style={{textAlign:'center'}}>Account Created</h1> 
                    <FaUserCheck size="35" />
                  </div>
                  <br/>
                  <hr/>
                  <br/>
                  Your account has been created successfully.
                  Notify your admin to upgrade your account from
                  temporary "Guest" status to "Approved" status.
                </div>
            </div>
    )
}