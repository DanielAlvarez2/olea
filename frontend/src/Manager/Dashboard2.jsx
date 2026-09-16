
export default function Dashboard2(){

      const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    function approveAccess(){
      let currentSession 
      if(document.cookie) currentSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
      if(currentSession){
        fetch(`${BASE_URL}/api/sessions/compare/${currentSession}`)
          .then(res=>res.json())
          .then(data=> !data && window.location.replace('/login'))
          .catch(err=>console.log(err))
      }else{
        window.location.replace('/login')
      }
    }        
    
    approveAccess()

    function logout(){
      if(confirm('You are about to Log Out.')){
        const oleaSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
        fetch(`${BASE_URL}/api/sessions/logout/${oleaSession}`)
          .then(window.location.replace('/login'))
          .catch(err=>console.log(err))
      }else{
        return
      }
    }

    return(
        <div style={{width:'100%'}}>
            <br/>
            <h1 style={{textAlign:'center'}}>Dashboard TWO</h1>
            <h2 style={{textAlign:'center'}}>Protected Route</h2>
            <span onClick={()=>logout()} style={{background:'red',color:'white',padding:'5px 10px',borderRadius:'5px',cursor:'pointer'}}>Logout</span>
        </div>
    )
}