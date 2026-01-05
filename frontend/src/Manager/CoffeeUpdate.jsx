import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './CoffeeUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function CoffeeUpdate(){
    const [allCoffees, setAllCoffees] = useState([])
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>getCoffees(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewCoffee(formData){
        await fetch(`${BASE_URL}/api/coffees`,{method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    menu: formData.get('menu'),
                                                    section: formData.get('section'),
                                                    name: formData.get('name'),
                                                    price: formData.get('price')
                                                })
        })
        .then(alert(`
            New Coffee Created:
             - ${formData.get('name')}`))
        .then(getCoffees())
        .catch(err=>console.log(err))
    }

    async function updateCoffee(formData){
        await fetch(`${BASE_URL}/api/coffees/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Coffee Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getCoffees())
        .catch(err=>console.log(err))
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

    function deleteCoffee(id){
        try{
            fetch(`${BASE_URL}/api/coffees/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getCoffees())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }


    function editCoffee(id,section,name,price){
        try{
            setEditMode(true)
            document.querySelector('#coffee-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#coffee-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/coffees/move-up/${id}`,{method:'PUT'})
                .then(()=>getCoffees())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/coffees/move-down/${id}`,{method:'PUT'})
                .then(()=>getCoffees())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#coffee-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#price').value = ''
            setEditMode(false)
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='desserts' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update &gt; coffee</div>



                        <div className='desserts-update-menu'>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>coffees</div>
                                <br/>
                            </div>















                            {allCoffees.filter(item=>item.sequence).map(data=>{
                                return(
                                    <div key={data._id} className='dessert'>

                                        {data.sequence != '1' && 
                                            <FaCaretUp style={{ margin:'0 auto',
                                                                fontSize:'60px',
                                                                position:'relative',
                                                                top:'10px',
                                                                color:'grey',
                                                                cursor:'pointer',
                                                                width:'100%'}}
                                                        onClick={(()=>moveUp(data._id))} />
                                        }
                                        
                                        
                                        <span className='name'>{data.name} </span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editCoffee(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteCoffee(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allCoffees.filter(item=>item.sequence).length && 
                                            <FaCaretUp style={{ margin:'0 auto',
                                                                fontSize:'60px',
                                                                position:'relative',
                                                                top:'0px',
                                                                color:'grey',
                                                                cursor:'pointer',
                                                                transform:'rotate(180deg',
                                                                width:'100%'}}
                                                        onClick={(()=>moveDown(data._id))} />
                                        }

                                    </div>
                                )
                            })}

































                        </div>
                      


                    <form   action={editMode ? updateCoffee : createNewCoffee} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update coffee' : 'create new coffee'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='coffee-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dessert' />

                        <input  type='hidden'
                                name='section' 
                                value='coffees' />                        
                        

                        <label>
                            name<br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            price<br/>
                            <input  type='text'
                                    required 
                                    id='price'
                                    name='price' />
                        </label>
                        <br/><br/>

                        <div id='coffee-form-buttons' style={{display:'flex',justifyContent:'space-around'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update coffee' : 'create new coffee'} />
                            {editMode &&                             
                                        <div onClick={clearForm}
                                             style={{   display:'grid',
                                                        placeContent:'center',
                                                        cursor:'pointer',
                                                        borderRadius:'10px',
                                                        border:'2px solid black',
                                                        background:'rgb(255, 89, 118)',
                                                        fontWeight:'900',
                                                        color:'black',
                                                        // height:'60px',
                                                        padding:'10px 10px',
                                                        fontSize:'20px'
                                                    }}>
                                            cancel
                                        </div>
                            }
                        </div>

                    </form>   

            





















            </div>{/* .manager-page-wrapper */}
        </>
    )
}