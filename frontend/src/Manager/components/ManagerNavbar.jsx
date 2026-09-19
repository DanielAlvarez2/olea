import {Link} from 'react-router'
import './ManagerNavbar.css'

export default function ManagerNavbar(props){

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    // if (!props.session) window.location.replace('/login')
    // alert(props.session)

    function approveAccess(){
    //   console.log('document.cookie:')
    //   console.log(document.cookie)
      let currentSession 
      if (document.cookie != '') currentSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
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

    function logoutUser(){
      if(confirm('You are about to Log Out.')){
        const oleaSession = document.cookie.split('; ').filter(cookie=>cookie.startsWith('olea-session'))[0].split('=')[1]
        fetch(`${BASE_URL}/api/sessions/logout/${oleaSession}`)
          .then(setTimeout(()=>window.location.replace('/login'),100))
          .catch(err=>console.log(err))
      }else{
        return
      }
    }


    return(
        <>
            <nav    className='manager-navbar no-print' 
                    style={{display:'flex',width:'100%',alignItems:'center'}}>
                <Link to='/manager'><div className='logo' style={{paddingRight:'0'}}>
                    olea
                </div></Link>
                <div style={{width:'100%'}}>
                    <ul style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                        <li className={props.page=='dinner' ? 'current-page' : ''}><Link to='/dinner-menu'>dinner</Link></li>
                        <li className={props.page=='specials' ? 'current-page' : ''}><Link to='/specials-menu'>specials</Link></li>
                        <li className={props.page=='dessert' ? 'current-page' : ''}><Link to='/dessert-menu'>dessert</Link></li>
                        <li className={props.page=='wine-list' ? 'current-page' : ''}><Link to='/wine-list'>wine list</Link></li>
                        <li className={props.page=='takeout' ? 'current-page' : ''}><Link to='/takeout'>takeout</Link></li>
                        <li className={props.page=='events' ? 'current-page' : ''}><Link to='/manager/events'>events</Link></li>
                    </ul>
                </div>
                <div>
                </div>
            </nav>        
                <hr className='no-print' style={{width:'100%'}}/>

                  <div className='no-print' style={{width:'100%',textAlign:'right',marginTop:'10px'}}>
                    <span onClick={logoutUser} style={{border:'1px solid black',borderRadius:'5px',marginRight:'15px',background:'yellow',padding:'5px 10px',cursor:'pointer'}}>logout</span>
                    <span onClick={()=>window.location.replace('/manage-users')} style={{borderRadius:'5px',marginRight:'15px',border:'1px solid black',background:'yellow',padding:'5px 10px',cursor:'pointer'}}>users</span>
                  </div>
        </>
    )
}