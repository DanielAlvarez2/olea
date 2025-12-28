import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function DessertMenuFormat(){

    const [allDesserts, setAllDesserts] = useState([])
    useEffect(()=>getDesserts(),[])

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getDesserts(){
        try{
            fetch(`${BASE_URL}/api/desserts`)
                .then(res=>res.json())
                .then(json=>setAllDesserts(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; format</div>
                    <div className='main-menu'>
                        <div id='dessert-menu-format-front'>
                            <div id='footer-top'>
                                <span className='logo'>olea</span>
                                <hr/>

                                {allDesserts.map(data=>{
                                    return (
                                        <div key={data._id}>
                                            <span className='dessert-name'>{data.name}</span>
                                            {data.allergiesAbbreviated &&   <span className='dessert-allergies'>
                                                                                &nbsp;({data.allergiesAbbreviated})
                                                                            </span>}
                                            <span className='dessert-description'>&nbsp;{data.description}</span>
                                            <span className='dessert-price'>&nbsp; &nbsp; {data.price}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <footer>
                                jessica delgado, pastry chef
                                <hr/>
                                please alert your server if you have any special dietary requirements<br/>
                                <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                            </footer>
                        </div>
                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}