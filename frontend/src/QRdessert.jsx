import {useState, useEffect} from 'react'
import './index.css'
import './QRdessert.css'

export default function QRdessert(){

    const [allSpecials, setAllSpecials] = useState([])
    useEffect(()=>getSpecials(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getSpecials(){
        try{
            fetch(`${BASE_URL}/api/specials`)
                .then(res=>res.json())
                .then(json=>setAllSpecials(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    return(
        <div>{/* wrapper */}
            <div style={{width:'100%',minHeight:'100vh',display:'grid',placeContent:'center'}}>
                <div    id='qr-specials' 
                        style={{width:'4.25in',
                                padding:'20px',
                                minHeight:'5.5in',
                                border:'1px solid black'}}>
                    <div style={{fontSize:'21px',fontFamily:'FuturaExtraBold'}}>
                        today's specials
                    </div>

                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                    <div className='specials-h2'>appetizer</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                    <div className='specials-h2'>appetizers</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
                                    return(
                                        <div    key={data._id}
                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                        
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}

                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length == 1 && 
                                    <div className='specials-h2'>entrée</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length > 1 && 
                                    <div className='specials-h2'>entrées</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                            
                                    
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}

                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                    <div className='specials-h2'>dessert</div>}
                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                    <div className='specials-h2'>desserts</div>}

                                {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
                                    return(
                                        <div    key={data._id} 
                                                // style={{margin:`${menuItemMarginsTopBottom}px 0`}} 
                                                className='special'>
                                            
                                    
                                            <span className='name'>{data.name} </span>
                                            {data.allergiesAbbreviated && 
                                                <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }


                                        </div>
                                    )
                                })}
                    
                </div>
            </div>
        {/* wrapper */}
        </div>
    )
}