import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function DessertMenuFormat(){

    const [allDesserts, setAllDesserts] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    useEffect(()=>getDesserts(),[])
    useEffect(()=>getTeaPrice(),[])
    useEffect(()=>getTeas(),[])
    useEffect(()=>getCoffees(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getTeas(){
        try{
            fetch(`${BASE_URL}/api/teas`)
                .then(res=>res.json())
                .then(json=>setAllTeas(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getCoffees(){
        try{
            fetch(`${BASE_URL}/api/coffees`)
                .then(res=>res.json())
                .then(json=>setAllCoffees(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    function getTeaPrice(){
        fetch(`${BASE_URL}/api/teas/price`)
            .then(res=>res.json())
            .then(json=>setTeaPrice(json))
            .catch(err=>console.log(err))
    }

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
            <div className='manager-page-wrapper' style={{border:'1px solid red',color:'red'}}>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; format</div>
                    <div className='main-menu'>
                        <div    id='dessert-menu-format-front' 
                                style={{backgroundImage:'url("scan-dessert-menu-front.jpg")',backgroundSize:'5.5in 8.5in'}}>
                            <div id='footer-top'>
                                <span   className='logo dessert-menu-front-content' 
                                        style={{color:'red',
                                                fontSize:'57px'}}>olea</span>
                                <hr style={{marginBottom:'7px'}}/>

                                <div className='dessert-menu-front-content'>
                                    {allDesserts.map(data=>{
                                        return (
                                            <div key={data._id} className='dessert'>
                                                <span className='dessert-name'>{data.name}</span>
                                                {data.allergiesAbbreviated &&   <span className='dessert-allergies'>
                                                                                    &nbsp;({data.allergiesAbbreviated})
                                                                                </span>}
                                                <span className='dessert-description'>&nbsp;{data.description}</span>
                                                <span className='dessert-price'>&nbsp; &nbsp; {data.price}</span>
                                                
                                            </div>
                                        )
                                    })}
                                    
                                    
                                    
                                    
                                    
                                    
                                    <span className='coffee-tea-heading'>
                                        coffee
                                    </span>
                                    &nbsp;
                                    <span className='dessert-price'>
                                        (decaffeinated available)
                                    </span><br/>

                                                                {allCoffees.map(data=>{
                                                                    return(
                                                                        <span key={data._id}>
                                                                            <span className='dessert-description'>{data.name} </span> 
                                                                            <span className='dessert-price'>{data.price}</span> 
                                                                                {data.sequence != allCoffees.length
                                                                                    && ' / '
                                                                                }
                                                                            
                                                                        </span>
                                                                    )
                                                                })}



                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    
                                    
                                    
                                    <span className='coffee-tea-heading'>
                                        organic-artisan whole leaf tea
                                    </span>
                                    &nbsp;
                                    <span className='dessert-price'>
                                        (pouch)
                                    </span>
                                    <span className='dessert-price'>
                                        {teaPrice ? ` ${teaPrice}` : ''}
                                    </span>
                                    <br/>
                                    
                                    
                                    
                                    
                                    
                                    
                                    <span   className='dessert-price'
                                            style={{fontStyle:'normal'}}>
                                        black &nbsp;
                                    </span>
                                                                {allTeas.filter(item=>item.type == 'black').map(data=>{
                                                                    return(
                                                                        <span key={data._id}>
                                                                            <span className='tea-name'>{data.name} 
                                                                                {data.sequence != allTeas.filter(item=>item.type == 'black').length
                                                                                    && ', '
                                                                                }
                                                                            </span>
                                                                        </span>
                                                                    )
                                                                })}
                                    
                                    <br/>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    <span   className='dessert-price'
                                            style={{fontStyle:'normal'}}>
                                        green &nbsp;
                                    </span>
                                                                {allTeas.filter(item=>item.type == 'green').map(data=>{
                                                                    return(
                                                                        <span key={data._id}>
                                                                            <span className='tea-name'>{data.name} 
                                                                                {data.sequence != allTeas.filter(item=>item.type == 'green').length
                                                                                    && ', '
                                                                                }
                                                                            </span>
                                                                        </span>
                                                                    )
                                                                })}
                                    
                                    <br/>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    <span className='dessert-price'>
                                        <span style={{fontStyle:'normal'}}>herbal</span>
                                        <span>(caffeine free)</span>
                                        &nbsp;
                                    </span>
                                                                {allTeas.filter(item=>item.type == 'herbal').map(data=>{
                                                                    return(
                                                                        <span key={data._id}>
                                                                            <span className='tea-name'>{data.name} 
                                                                                {data.sequence != allTeas.filter(item=>item.type == 'herbal').length
                                                                                    && ', '
                                                                                }
                                                                            </span>
                                                                        </span>
                                                                    )
                                                                })}
                                
                                    <br/>










                                </div>
                            </div>












                            <footer>
                                <div className='dessert-menu-front-content'>
                                    jessica delgado, pastry chef
                                </div>
                                <hr style={{marginTop:'5px'}}/>
                                <div className='dessert-menu-front-content'>
                                    please alert your server if you have any special dietary requirements<br/>
                                    <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                </div>
                            </footer>
                        </div>
                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}