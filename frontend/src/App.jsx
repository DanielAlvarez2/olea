import { useState,useEffect } from 'react'

export default function App() {
  const BASE_URL = (process.env.NODE_ENV == 'production') ? 
                    'https://olea-iwpz.onrender.com/' :
                    'http://localhost:1436'

  const [specials, setSpecials] = useState([])

  const getSpecials = ()=>{
    fetch(`${BASE_URL}/api/special`)
      .then(res=>res.json())
      .then(json=>setSpecials(json))
      .catch(err=>console.log(err))
  }

  useEffect(()=>getSpecials(),[])

  return (
    <>
      {specials.map(data=>{
        return(
          <div key={data._id}>
            {data.name}
          </div>
        )
      })}
    </>
  )
}

