import { useState,useEffect } from 'react'

export default function App() {
  const [specials, setSpecials] = useState([])

  const getSpecials = ()=>{
    fetch('/api/special')
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

