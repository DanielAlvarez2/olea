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
        <div key={user._id} style={{border:'1px solid grey',maxWidth:'300px',margin:'0 auto 5px',padding:'5px',borderRadius:'10px',background:'#eee'}}>
          {user.username}<br/>
          {user.email}<br/>
          {Date.now() - user.accountCreated < 3600000 && `${((Date.now() - user.accountCreated)/60000).toFixed(0)} minutes ago`}
          {Date.now() - user.accountCreated < 86400000 && Date.now() - user.accountCreated >= 3600000 && `${((Date.now() - user.accountCreated)/3600000).toFixed(0)} hours ago`}
          {Date.now() - user.accountCreated >= 86400000 && `${((Date.now() - user.accountCreated)/86400000).toFixed(0)} days ago`}
           <br/><br/>
           <span style={{fontSize:'12px',background:'#20aa20ff',color:'white',padding:'5px',borderRadius:'5px',marginRight:'5px',cursor:'pointer'}}>APPROVE</span>
           <span style={{fontSize:'12px',background:'red',color:'white',padding:'5px',borderRadius:'5px',cursor:'pointer'}}>DELETE</span>
           <br/><br/>
        </div>)}
    </div>
  )
}