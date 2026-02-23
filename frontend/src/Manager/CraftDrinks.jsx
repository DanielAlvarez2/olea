import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function CraftDrinks(){
    const [drinks, setDrinks] = useState([])
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>getDrinks(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createDrink(formData){
        await fetch(`${BASE_URL}/api/drinks`,{method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    name: formData.get('name'),
                                                    description: formData.get('description'),
                                                    price: formData.get('price'),
                                                })
        })
        .then(alert(`
            New Craft Drink Created:
             - ${formData.get('name')}`))
        .then(getDrinks())
        .catch(err=>console.log(err))
    }

    async function updateDrink(formData){
        await fetch(`${BASE_URL}/api/drinks/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                description: formData.get('description'),
                                                                                price: formData.get('price'),
                                                    })
        })
        .then(alert(`
            Craft Drink Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getDrinks())
        .catch(err=>console.log(err))
    }

    function getDrinks(){
        try{
            fetch(`${BASE_URL}/api/drinks`)
                .then(res=>res.json())
                .then(json=>setDrinks(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteDrink(id){
        try{
            fetch(`${BASE_URL}/api/drinks/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDrinks())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editDrink(id,name,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#drink-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/drinks/move-up/${id}`,{method:'PUT'})
                .then(()=>getDrinks())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/drinks/move-down/${id}`,{method:'PUT'})
                .then(()=>getDrinks())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#drink-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#description').value = ''
            document.querySelector('#price').value = ''
            setEditMode(false)
        }catch(err){
            console.log(err)
        }
    }


    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='wine list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; craft drinks</div>



                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>craft drinks</div>
                            </div>

                            <br/>


                            {drinks.length == 0 && <>This Section is Empty</>}










                            {drinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>
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
                                        
                                        {/* {data.sequence}<br/> */}
                                        <span className='name'>{data.name} </span>
                                        <span> {data.description}</span>
                                        
                                            
                                            <div className='price'>{data.price}</div> 
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editDrink(   data._id,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price,
                                                                                )}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteDrink(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != drinks.length && 
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
                      


                    <form   action={editMode ? updateDrink : createDrink} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit drink' : 'add drink'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='drink-id' />
                        

                        
                        

                        <label>
                            name<br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%',fontWeight:'900'}} />
                        </label>
                        <br/><br/>

                        <label>
                            description<br/>
                            <textarea   rows='5'
                                        name='description' 
                                        id='description'
                                        style={{width:'100%'}}></textarea>
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

                        <div id='specials-form-buttons' style={{display:'flex',justifyContent:'space-around'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            color:'black',
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update drink' : 'create drink'} />
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