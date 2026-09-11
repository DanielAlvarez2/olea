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

  return(
    <div style={{width:'100%',minHeight:'100vh'}}>
      <br/>
      <div style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',gap:'20px'}}>
        <h1 style={{textAlign:'center'}}>Users Control Panel</h1>
        <FaUserCog size='30' />
      </div>

      {users.map(user=>
        <div key={user._id}>
          {user.username}
          {user.email}<br/>
          {Date.now() - user.accountCreated < 3600000 && `${((Date.now() - user.accountCreated)/60000).toFixed(0)} minutes ago`}
          {Date.now() - user.accountCreated < 86400000 && Date.now() - user.accountCreated >= 3600000 && `${((Date.now() - user.accountCreated)/3600000).toFixed(0)} hours ago`}
          {Date.now() - user.accountCreated >= 86400000 && `${((Date.now() - user.accountCreated)/86400000).toFixed(0)} days ago`}
           <br/><br/>
        </div>)}
    </div>
  )
}