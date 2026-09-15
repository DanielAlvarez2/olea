export default function Dashboard(){

    function logout(){
      alert('LOGOUT')
    }
    return(
        <div style={{width:'100%'}}>
            <br/>
            <h1 style={{textAlign:'center'}}>Dashboard</h1>
            <h2 style={{textAlign:'center'}}>Protected Route</h2>
            <span onClick={()=>logout()} style={{background:'red',color:'white',padding:'5px 10px',borderRadius:'5px',cursor:'pointer'}}>Logout</span>
        </div>
    )
}