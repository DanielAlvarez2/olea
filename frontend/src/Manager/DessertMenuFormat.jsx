import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";


export default function DessertMenuFormat(){

    const [allDesserts, setAllDesserts] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [dessertsFormatting, setDessertsFormatting] = useState([])
    const [pageMarginRight, setPageMarginRight] = useState(0)
    const [dessertItemMarginsTopBottom, setDessertItemMarginsTopBottom] = useState(20)
    useEffect(()=>getDessertsFormatting(),[])
    useEffect(()=>getDesserts(),[])
    useEffect(()=>getTeaPrice(),[])
    useEffect(()=>getTeas(),[])
    useEffect(()=>getCoffees(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getDessertsFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/desserts`)
                .then(res=>res.json())
                .then(json=>{
                    setDessertsFormatting(json[0])
                    setPageMarginRight(json[0].pageMarginRight)
                    setDessertItemMarginsTopBottom(json[0].dessertItemMarginsTopBottom)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

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

    function decreaseMenuItemMarginsTopBottom(){
    
    }

    function increaseMenuItemMarginsTopBottom(){
        
    }

    function decreasePageMarginRight(){
        if (pageMarginRight == 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreasePageMarginRight`,{method:'PUT'})
        .then(()=>getDessertsFormatting())
        .catch(err=>console.log(err))
    }
    
    function increasePageMarginRight(){
        fetch(`${BASE_URL}/api/formats/desserts/increasePageMarginRight`,{method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    return(
        <>
            <div    className='manager-page-wrapper' 
                    style={{border:'1px solid red',
                            // color:'red'
                            }}>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; format</div>
                    <div className='main-menu'>





                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                            onClick={decreaseMenuItemMarginsTopBottom} /></span>
                                <span>menu item margins<br/>top & bottom</span>
                                <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                            onClick={increaseMenuItemMarginsTopBottom} /></span>
                            </div>

                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                            onClick={decreasePageMarginRight} /></span>
                                <span>page margin: right</span>
                                <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                            onClick={increasePageMarginRight} /></span>
                            </div>


                            <br/>




                        <div    id='dessert-menu-format-front' 
                                // style={{backgroundImage:'url("scan-dessert-menu-front.jpg")',backgroundSize:'5.5in 8.5in'}}
                        >
                            <div id='footer-top'>
                                <span   className='logo dessert-menu-front-content' 
                                        style={{
                                            // color:'red',
                                                display:'block',
                                                fontSize:'57px'}}>olea</span>
                                <hr style={{marginBottom:'7px'}}/>







                                <div className='dessert-menu-front-content'
                                        style={{paddingRight:`${pageMarginRight + 20}px`}}
                                        // style={{paddingRight:'83px'}}
                                        >








                                    {allDesserts.map(data=>{
                                        return (
                                            <div    key={data._id}
                                                    style={{margin:`${dessertItemMarginsTopBottom}px 0`}} 
                                                    className='dessert dessert-item'>
                                                <span className='dessert-name'>{data.name}</span>
                                                {data.allergiesAbbreviated &&   <span className='dessert-allergies'>
                                                                                    &nbsp;({data.allergiesAbbreviated})
                                                                                </span>}
                                                <span className='dessert-description'>&nbsp;{data.description}</span>
                                                <span className='dessert-price'>&nbsp; &nbsp; {data.price}</span>
                                                
                                            </div>
                                        )
                                    })}
                                    
                                    
                                    
                                    
                                    <div className='dessert-item'>                                    
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
                                    </div>



                                    






                                    <div className='dessert-item'>                                    
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
                                    
                                    
                                    </div>                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
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












                            <div className='dessert-footer'>
                                <div className='dessert-menu-front-content'>
                                    jessica delgado, pastry chef
                                </div>
                                <hr style={{marginTop:'5px'}}/>
                                <div className='dessert-menu-front-content'>
                                    please alert your server if you have any special dietary requirements<br/>
                                    <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                </div>
                            </div>
                        </div>
                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}