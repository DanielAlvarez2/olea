import { FaUserCheck } from "react-icons/fa";

export default function GuestUser(){
    return(
            <div style={{ width:'100%',
                          minHeight:'100vh',
                          display:'grid',
                          placeContent:'center'}}>
                <div style={{background:'#ccc',padding:'30px',borderRadius:'10px'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                    <h1 style={{textAlign:'center'}}>Account Created</h1> 
                    <FaUserCheck size="35" />
                  </div>
                  <br/>
                  <hr/>
                  <br/>
                  Your account has been created successfully.<br/>
                  Notify your admin to upgrade your account from<br/>
                  temporary "Guest" status to "Approved" status.
                </div>
            </div>
    )
}