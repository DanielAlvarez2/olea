import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function DessertDrinksUpdate(){
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [displayCategoryDropdown, setDisplayCategoryDropdown] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')
    const [dessertDrinkCategories, setDessertDrinkCategories] = useState([])
    useEffect(()=>getDessertDrinks(),[])
    useEffect(()=>getDessertDrinkCategories(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewDessertDrink(formData){
        await fetch(`${BASE_URL}/api/dessert-drinks`,{  method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            menu: formData.get('menu'),
                                                            section: formData.get('section'),
                                                            category: formData.get('category'),
                                                            preDescription: formData.get('pre-description'),
                                                            name: formData.get('name'),
                                                            postDescription: formData.get('post-description'),
                                                            price: formData.get('price')
                                                })
        })
        .then(alert(`
            New Dessert Drink Created:
             - ${formData.get('name')}`))
        .then(()=>getDessertDrinks())
        .then(()=>getDessertDrinkCategories())
        .then(()=>setCurrentCategory(formData.get('category')))
        .catch(err=>console.log(err))
    }

    async function updateDessertDrink(formData){
        await fetch(`${BASE_URL}/api/dessert-drinks/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                postDescription: formData.get('post-description'),
                                                                                preDescription: formData.get('pre-description'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Dessert Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getDessertDrinks())
        .catch(err=>console.log(err))
    }

    function getDessertDrinks(){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDessertDrinks(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    function getDessertDrinkCategories(){
        try{
            fetch(`${BASE_URL}/api/dessert-drink-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let dessertDrinkCategories = new Set()
                    json.forEach(drink=>dessertDrinkCategories.add(drink.category))
                    setDessertDrinkCategories([...dessertDrinkCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function deleteDessertDrink(id){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDessertDrinks())
                .then(()=>getDessertDrinkCategories())
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

    function editDessertDrink(id,category,preDescription,name,postDescription,price){
        try{
            setEditMode(true)
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#dessert-drink-id').value = id
            document.querySelector('#category-edit').textContent = `: ${category}`
            document.querySelector('#name').value = name
            document.querySelector('#pre-description').value = preDescription
            document.querySelector('#post-description').value = postDescription
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks/move-up/${id}`,{method:'PUT'})
                .then(()=>getDessertDrinks())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks/move-down/${id}`,{method:'PUT'})
                .then(()=>getDessertDrinks())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#dessert-drink-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#category-edit').textContent = ''
            document.querySelector('#pre-description').value = ''
            document.querySelector('#post-description').value = ''
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
        fetch(`${BASE_URL}/api/dessert-drinks/move-category-up/${i}`,{method:'PUT'})
            .then(()=>getDessertDrinks())
            .then(()=>getDessertDrinkCategories())
            .catch(err=>console.log(err))
    }

    function moveCategoryDown(i){
        fetch(`${BASE_URL}/api/dessert-drinks/move-category-down/${i}`,{method:'PUT'})
            .then(()=>getDessertDrinks())
            .then(()=>getDessertDrinkCategories())
            .catch(err=>console.log(err))
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='desserts' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update &gt; drinks</div>



                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>after dinner drinks</div>
                                <br/>
                            </div>

                            

                            {allDessertDrinks[0] == undefined ? 
                                <div style={{whiteSpace:'pre-wrap'}}>
                                    DATABASE IS EMPTY<br/>
                                    Please Create a New Dessert Drink Below<br/><br/>
                                </div>                            
                            : 
                                <div>
                                    <div className='desserts-h1'>category:</div>
                                    <select id='category-dropdown' defaultValue={currentCategory} value={currentCategory} onChange={handleChange}>
                                        <option disabled value=''>select...</option>
                                        {dessertDrinkCategories.map(category=><option key={category} value={category}>{category}</option>)}
                                        
                                    </select>
                                </div>
                            }




                            <br/><br/>



                            {allDessertDrinks.filter(item=>item.category == currentCategory).map(data=>{
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
                                        
                                        
                                        <span> {data.preDescription}</span>
                                        <span className='dessert-drink-name'>&nbsp;{data.name} </span>
                                        <span> {data.postDescription}</span>
                                        <span className='price'> &nbsp;{data.price}</span>  
                                        <div style={{marginTop:'5px'}}>
                                            
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editDessertDrink(  data._id,
                                                                                    data.category,
                                                                                    data.preDescription,
                                                                                    data.name,
                                                                                    data.postDescription,
                                                                                    data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteDessertDrink(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allDessertDrinks.filter(item=>item.category == data.category).length && 
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

                        <input type='hidden' name='id' id='dessert-drink-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dessert' />

                        <input  type='hidden'
                                name='section' 
                                value='dessert drinks' />     

                        <label>
                            category<span id='category-edit'></span><br/>
                            
                            {allDessertDrinks.length == 0 && !editMode &&
                                        <>
                                            <input  type='text'
                                                    required
                                                    id='category-text'
                                                    autoComplete='off'
                                                    name='category' /><br/>
                                        </>
                            }
                            {allDessertDrinks.length > 0 && !editMode &&
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    {displayCategoryDropdown ? 
                                        <select defaultValue='' 
                                                name='category'
                                                required>
                                                <option disabled value=''>select...</option>
                                                {dessertDrinkCategories.map(category=><option key={category} value={category}>{category}</option>)}        
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
                            pre-description<br/>
                            <input  type='text' 
                                    name='pre-description' 
                                    autoComplete='off'
                                    id='pre-description'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

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
                            post-description<br/>
                            <input  type='text'
                                    id='post-description'
                                    autoComplete='off'
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
                {dessertDrinkCategories.length > 1 &&    
                    <>
                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div className='desserts-h1'>
                                categories
                            </div><br/>

                            {dessertDrinkCategories.map((category,i)=>( 
                                                                    
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

                                                {i+1 != dessertDrinkCategories.length && 
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