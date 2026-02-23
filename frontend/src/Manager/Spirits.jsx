import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function Spirits(){
    const [spirits, setSpirits] = useState([])
    const [displayCategoryDropdown, setDisplayCategoryDropdown] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')
    const [spiritCategories, setSpiritCategories] = useState([])
    useEffect(()=>getSpirits(),[])
    useEffect(()=>getSpiritCategories(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createSpirit(formData){
        await fetch(`${BASE_URL}/api/spirits`,{  method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            category: formData.get('category'),
                                                            name: formData.get('name'),
                                                            price: formData.get('price')
                                                })
        })
        .then(alert(`
            New Spirit Created:
             - ${formData.get('name')}`))
        .then(()=>getSpirits())
        .then(()=>getSpiritCategories())
        .then(()=>setCurrentCategory(formData.get('category')))
        .catch(err=>console.log(err))
    }

    async function updateSpirit(formData){
        await fetch(`${BASE_URL}/api/spirits/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Spirit Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getSpirits())
        .catch(err=>console.log(err))
    }

    function getSpirits(){
        try{
            fetch(`${BASE_URL}/api/spirits`)
                .then(res=>res.json())
                .then(json=>{
                    setSpirits(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getSpiritCategories(){
        try{
            fetch(`${BASE_URL}/api/spirit-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let spiritCategories = new Set()
                    json.forEach(drink=>spiritCategories.add(drink.category))
                    setSpiritCategories([...spiritCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function deleteSpirit(id){
        try{
            fetch(`${BASE_URL}/api/spirits/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getSpirits())
                .then(()=>getSpiritCategories())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editSpirit(id,category,nameprice){
        try{
            setEditMode(true)
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#spirit-id').value = id
            document.querySelector('#category-edit').textContent = `: ${category}`
            document.querySelector('#name').value = name
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/spirits/move-up/${id}`,{method:'PUT'})
                .then(()=>getSpirits())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/spirits/move-down/${id}`,{method:'PUT'})
                .then(()=>getSpirits())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#spirit-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#category-edit').textContent = ''
            document.querySelector('#price').value = ''
            setEditMode(false)
        }catch(err){
            console.log(err)
        }
    }

    function handleChange(e){
        setCurrentCategory(e.target.value)
    }

    function toggleCategoryDropdown(){
        setDisplayCategoryDropdown(prev=>!prev)
    }

    function moveCategoryUp(i){
        fetch(`${BASE_URL}/api/spirits/move-category-up/${i}`,{method:'PUT'})
            .then(()=>getSpirits())
            .then(()=>getSpiritCategories())
            .catch(err=>console.log(err))
    }

    function moveCategoryDown(i){
        fetch(`${BASE_URL}/api/spirits/move-category-down/${i}`,{method:'PUT'})
            .then(()=>getSpirits())
            .then(()=>getSpiritCategories())
            .catch(err=>console.log(err))
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='desserts' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; spirits</div>



                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>spirits</div>
                                <br/>
                            </div>

                            

                            {spirits[0] == undefined ? 
                                <div style={{whiteSpace:'pre-wrap'}}>
                                    DATABASE IS EMPTY<br/>
                                    <br/>
                                </div>                            
                            : 
                                <div>
                                    <div className='desserts-h1'>category:</div>
                                    <select id='category-dropdown' defaultValue={currentCategory} value={currentCategory} onChange={handleChange}>
                                        <option disabled value=''>select...</option>
                                        {spiritCategories.map(category=><option key={category} value={category}>{category}</option>)}
                                        
                                    </select>
                                </div>
                            }




                            <br/><br/>



                            {spirits.filter(item=>item.category == currentCategory).map(data=>{
                                return(
                                    <div key={data._id} className='dessert-drinks-display'>

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
                                        
                                        
                                        <span className='dessert-drink-name'>&nbsp;{data.name} </span>
                                        <span className='price'> &nbsp;{data.price}</span>  
                                        <div style={{marginTop:'5px'}}>
                                            
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSpirit(  data._id,
                                                                                    data.category,
                                                                                    data.name,
                                                                                    data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSpirit(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != spirits.filter(item=>item.category == data.category).length && 
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
                      


                    <form   action={editMode ? updateSpirit : createSpirit} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit spirit' : 'add spirit'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='spirit-id' />

                        <label>
                            category<span id='category-edit'></span><br/>
                            
                            {spirits.length == 0 && !editMode &&
                                        <>
                                            <input  type='text'
                                                    required
                                                    id='category-text'
                                                    autoComplete='off'
                                                    name='category' /><br/>
                                        </>
                            }
                            {spirits.length > 0 && !editMode &&
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    {displayCategoryDropdown ? 
                                        <select defaultValue='' 
                                                name='category'
                                                required>
                                                <option disabled value=''>select...</option>
                                                {spiritCategories.map(category=><option key={category} value={category}>{category}</option>)}        
                                        </select>                                
                                    : 
                                        <input  type='text'
                                                required
                                                id='category-text'
                                                placeholder=' + add new category'
                                                autoComplete='off'
                                                name='category' />
                                    }
                                    
                                    <div    style={{background:'lightgrey',
                                                    padding:'0px 10px',
                                                    cursor:'pointer',
                                                    border:'1px solid black',
                                                    borderRadius:'5px'}}
                                            onClick={toggleCategoryDropdown}>
                                        {displayCategoryDropdown ? 'New Category' : 'Existing Categories'}
                                    </div>

                                </div>
                            }
                        </label>                   
                        <br/>

                        <label>
                            <span style={{fontWeight:'900'}}>name</span><br/>
                            <input  type='text' 
                                    name='name' 
                                    autoComplete='off'
                                    id='name'
                                    required
                                    style={{width:'100%',fontWeight:'900'}} />
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
                                            color:'black',
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update spirit' : 'create spirit'} />
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

                {spiritCategories.length > 1 &&    
                    <>
                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div className='desserts-h1'>
                                categories
                            </div><br/>

                            {spiritCategories.map((category,i)=>( 
                                                                    
                                            <div key={category} style={{textAlign:'center'}}>

                                                {i+1 != '1' && 
                                                    <FaCaretUp style={{ margin:'0 auto',
                                                                        fontSize:'60px',
                                                                        position:'relative',
                                                                        top:'10px',
                                                                        color:'grey',
                                                                        cursor:'pointer',
                                                                        width:'100%'}}
                                                                onClick={(()=>moveCategoryUp(i+1))} />
                                                }


                                                                        {i+1} {category}

                                                {i+1 != spiritCategories.length && 
                                                    <FaCaretUp style={{ margin:'0 auto',
                                                                        fontSize:'60px',
                                                                        position:'relative',
                                                                        top:'0px',
                                                                        color:'grey',
                                                                        cursor:'pointer',
                                                                        transform:'rotate(180deg',
                                                                        width:'100%'}}
                                                                onClick={(()=>moveCategoryDown(i+1))} />
                                                }


                                            </div>))}

                        </div><br/><br/>
                    </>             
                }








                    














            </div>{/* .manager-page-wrapper */}
        </>
    )
}