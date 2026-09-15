import { FaUserCog } from "react-icons/fa";
import {useState,useEffect} from 'react'

export default function UsersControlPanel(){

      const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'    

    useEffect(()=>getAllUsers(),[])
    const [users, setUsers] = useState([])

    function getAllUsers(){
        fetch(`${BASE_URL}/api/users/`)
            .then(res=>res.json())
            .then(data=>{
                setUsers(data)
                // alert(data)
                console.log(data)
            })
            .catch(err=>console.log(err))      
    }

    function deleteUser(id,username,email){
      if(confirm(`
Are you sure you want to delete this user?
  - ${username}
  - ${email}
`)){
        fetch(`${BASE_URL}/api/users/delete/${id}`,{method:'DELETE'})
          .then(()=>getAllUsers())
          .then(alert(`User Deleted`))
          .catch(err=>console.log(err))
      }else{
        return
      }
    }

    function approveUser(id,username,email){
      if(confirm(`
Are you sure you want to approve this user?
  - ${username}
  - ${email}
`)){
        fetch(`${BASE_URL}/api/users/approve/${id}`,{method:'PUT'})
          .then(()=>getAllUsers())
          .then(alert(`User Approved`))
          .catch(err=>console.log(err))
      }else{
        return
      }
    }

  return(
    <div style={{width:'100%',minHeight:'100vh'}}>
      <br/>
      <div style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <h1 style={{textAlign:'center'}}>Users Control Panel</h1>
        <FaUserCog size='30' />
      </div>
      <br/>

      {users.map(user=>
        <div key={user._id} style={{border:'1px solid grey',maxWidth:'300px',margin:'0 auto 5px',padding:'5px',borderRadius:'10px',background:'#eee'}}>
          {user.username}<br/>
          {user.email}<br/>
          {Date.now() - user.accountCreated < 3600000 && `${((Date.now() - user.accountCreated)/60000).toFixed(0)} minutes ago`}
          {Date.now() - user.accountCreated < 86400000 && Date.now() - user.accountCreated >= 3600000 && `${((Date.now() - user.accountCreated)/3600000).toFixed(0)} hours ago`}
          {Date.now() - user.accountCreated >= 86400000 && `${((Date.now() - user.accountCreated)/86400000).toFixed(0)} days ago`}
           <br/><br/>
           <div style={{textAlign:'center'}}>
            <span style={{fontSize:'12px',background:'red',color:'white',padding:'5px',borderRadius:'5px',cursor:'pointer',marginRight:'15px'}}
                  onClick={()=>deleteUser(user._id,user.username,user.email)}
            >
              DELETE
            </span>
            {user.role == 'guest' && 
              <span style={{fontSize:'12px',background:'#20aa20ff',color:'white',padding:'5px',borderRadius:'5px',cursor:'pointer'}}
                    onClick={()=>approveUser(user._id,user.username,user.email)}
              >
                APPROVE
              </span>
            }
           </div>
           <br/>
        </div>)}
    </div>
  )
}