import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function DessertDrinksUpdate(){
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [allDesserts, setAllDesserts] = useState([])
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>getDesserts(),[])
    useEffect(()=>getDessertDrinks(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewDessertDrink(formData){
        await fetch(`${BASE_URL}/api/desserts`,{method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    menu: formData.get('menu'),
                                                    section: formData.get('section'),
                                                    name: formData.get('name'),
                                                    allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                    allergiesComplete: formData.get('allergies-complete'),
                                                    description: formData.get('description'),
                                                    price: formData.get('price')
                                                })
        })
        .then(alert(`
            New Dessert Created:
             - ${formData.get('name')}`))
        .then(getDesserts())
        .catch(err=>console.log(err))
    }

    async function updateDessert(formData){
        await fetch(`${BASE_URL}/api/desserts/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                                                allergiesComplete: formData.get('allergies-complete'),
                                                                                description: formData.get('description'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Dessert Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getDesserts())
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
    function getDessertDrinks(){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks`)
                .then(res=>res.json())
                .then(json=>setAllDessertDrinks(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function archiveDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/archive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function unarchiveDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/unarchive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editDessert(id,section,name,allergiesAbbreviated,allergiesComplete,description,price){
        try{
            setEditMode(true)
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#dessert-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#allergies-abbreviated').value = allergiesAbbreviated
            document.querySelector('#allergies-complete').value = allergiesComplete
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/desserts/move-up/${id}`,{method:'PUT'})
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/desserts/move-down/${id}`,{method:'PUT'})
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#dessert-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#allergies-abbreviated').value = ''
            document.querySelector('#allergies-complete').value = ''
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
                <ManagerNavbar page='desserts' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update &gt; drinks</div>



                        <div className='desserts-update-menu'>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>after dinner drinks</div>
                                <br/>
                            </div>



                            {allDessertDrinks[0] == undefined ? 
                                <div style={{whiteSpace:'pre-wrap'}}>
                                ERROR:<br/>
                                Database is Empty<br/>
                                Please Create a New Dessert Drink Below<br/><br/>
                                </div>                            
                            : 
                                <div>
                                    <div className='desserts-h1'>category:</div>
                                    <select defaultValue=''>
                                        <option disabled value=''>select...</option>
                                        <option>dessert wines</option>
                                        <option>dessert cocktails</option>
                                        <option>japanese whisky</option>
                                        <option>single malt scotch</option>
                                        <option>brandy de Jerez</option>
                                        <option>grappa</option>
                                        <option>patxaran</option>
                                    </select>
                                </div>
                            }



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






                            {allDesserts.filter(item=>item.sequence).map(data=>{
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
                                        {data.allergiesAbbreviated && 
                                            <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                        <span> {data.description}</span>
                                        {data.price.length < 3 ? 
                                            <span className='price'> &nbsp;{data.price}</span> : 
                                            <div className='price'>{data.price}</div> }
                                        <div className='allergies-complete'>{data.allergiesComplete}</div>
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn archive-btn'
                                                    onClick={()=>archiveDessert(data._id)}>ARCHIVE</span>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editDessert(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteDessert(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allDesserts.filter(item=>item.sequence).length && 
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
                      


                    <form   action={editMode ? updateDessertDrink : createNewDessertDrink} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update dessert drink' : 'create new dessert drink'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='dessert-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dessert' />

                        <input  type='hidden'
                                name='section' 
                                value='dessert drinks' />                        
                        
                        <label>
                            pre-description<br/>
                            <input  type='text' 
                                    name='pre-description' 
                                    id='pre-description'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

                        <label>
                            <span style={{fontWeight:'900'}}>name</span><br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%',fontWeight:'900'}} />
                        </label>
                        <br/><br/>
                        <label>
                            post-description<br/>
                            <input  type='text'
                                    id='post-description'
                                    name='post-description' 
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            price<br/>
                            <input  type='text'
                                    required 
                                    id='price'
                                    autoComplete='off'
                                    style={{width:'5ch'}}
                                    name='price' />
                        </label>
                        <br/><br/>

                        <div    id='desserts-form-buttons' 
                                style={{display:'flex',justifyContent:'space-around'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update dessert drink' : 'create new dessert drink'} />
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

            


















                        {allDesserts.filter(item=>item.sequence == 0).length > 0 &&
                            <>
                                <div className='desserts-update-menu'>
                                    <div>
                                        <div className='desserts-h1'>archives</div>
                                    </div>

                                    <br/><br/>

                                    {allDesserts.filter(item=>item.sequence == 0).map(data=>{
                                        return(
                                            <div key={data._id} className='dessert'>  
                                                <div>section: {data.section}</div>                                    
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                {data.price.length < 3 ? 
                                                    <span className='price'> &nbsp;{data.price}</span> : 
                                                    <div className='price'>{data.price}</div> }
                                                <div className='allergies-complete'>{data.allergiesComplete}</div>                                            
                                                <div style={{marginTop:'5px'}}>
                                                    <span   className='btn unarchive-btn'
                                                            onClick={()=>unarchiveDessert(data._id)}>
                                                        UNarchive</span>
                                                    <span   className='btn delete-btn'
                                                            onClick={()=>deleteDessert(data._id)}>DELETE</span>
                                                    <br/><br/><br/>
                                                </div>
                                            </div>
                                        )
                                    })}


                                </div>

                            
                            </>}





            </div>{/* .manager-page-wrapper */}
        </>
    )
}