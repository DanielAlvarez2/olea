import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function WineRed(){
    const [red, setRed] = useState([])
    const [displayCategoryDropdown, setDisplayCategoryDropdown] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')
    const [redCategories, setRedCategories] = useState([])
    useEffect(()=>getRed(),[])
    useEffect(()=>getRedCategories(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createRed(formData){
        await fetch(`${BASE_URL}/api/red`,{  method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            category: formData.get('category'),
                                                            grapes: formData.get('grapes'),
                                                            name: formData.get('name'),
                                                            vintage: formData.get('vintage'),
                                                            description: formData.get('description'),
                                                            price: formData.get('price'),
                                                            halfBottlePrice: formData.get('half-bottle-price'),
                                                })
        })
        .then(alert(`
            New Red Wine Created:
             - ${formData.get('name')}`))
        .then(()=>getRed())
        .then(()=>getRedCategories())
        .then(()=>setCurrentCategory(formData.get('category')))
        .catch(err=>console.log(err))
    }

    async function updateRed(formData){
        await fetch(`${BASE_URL}/api/red/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                grapes: formData.get('grapes'),
                                                                                name: formData.get('name'),
                                                                                vintage: formData.get('vintage'),
                                                                                description: formData.get('description'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Red Wine Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(clearForm())
        .then(getRed())
        .catch(err=>console.log(err))
    }

    function getRed(){
        try{
            fetch(`${BASE_URL}/api/red`)
                .then(res=>res.json())
                .then(json=>{
                    setRed(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getRedCategories(){
        try{
            fetch(`${BASE_URL}/api/red-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let redCategories = new Set()
                    json.forEach(wine=>redCategories.add(wine.category))
                    setRedCategories([...redCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteRed(id){
        try{
            fetch(`${BASE_URL}/api/red/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getRed())
                .then(()=>getRedCategories())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editRed(id,category,grapes,name,vintage,description,price){
        try{
            setEditMode(true)
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#red-id').value = id
            document.querySelector('#category-edit').textContent = `: ${category}`
            document.querySelector('#grapes').value = grapes
            document.querySelector('#name').value = name
            document.querySelector('#vintage').value = vintage
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#red-id').value = ''
            document.querySelector('#grapes').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#category-edit').textContent = ''
            document.querySelector('#vintage').value = ''
            document.querySelector('#description').value = ''
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
        fetch(`${BASE_URL}/api/red/move-category-up/${i}`,{method:'PUT'})
            .then(()=>getRed())
            .then(()=>getRedCategories())
            .catch(err=>console.log(err))
    }

    function moveCategoryDown(i){
        fetch(`${BASE_URL}/api/red/move-category-down/${i}`,{method:'PUT'})
            .then(()=>getRed())
            .then(()=>getRedCategories())
            .catch(err=>console.log(err))
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; bottles &gt; red</div>



                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>red wines</div>
                                <br/>
                            </div>

                            

                            {red[0] == undefined ? 
                                <div style={{whiteSpace:'pre-wrap'}}>
                                    DATABASE IS EMPTY<br/>
                                    <br/>
                                </div>                            
                            : 
                                <div>
                                    <div className='desserts-h1'>country:</div>
                                    <select id='category-dropdown' defaultValue={currentCategory} value={currentCategory} onChange={handleChange}>
                                        <option disabled value=''>select...</option>
                                        {redCategories.map(category=><option key={category} value={category}>{category}</option>)}
                                        
                                    </select>
                                </div>
                            }




                            <br/><br/>



                            {red.filter(item=>item.category == currentCategory).map(data=>{
                                return(
                                    <div key={data._id} className='dessert-drinks-display'>
                                        
                                        
                                        <span> {data.grapes}, </span>
                                        <span className='dessert-drink-name'>{data.name}</span>
                                        <span>, {data.description} / {data.price}</span>
                                        {data.halfBottlePrice &&
                                                                <div>1/2 btl. / {data.halfBottlePrice}</div>
                                        }
                                        <div style={{marginTop:'5px'}}>
                                            
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editRed(  data._id,
                                                                                    data.category,
                                                                                    data.grapes,
                                                                                    data.name,
                                                                                    data.vintage,
                                                                                    data.description,
                                                                                    data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteRed(data._id)}>DELETE</span>

                                        </div>
                                        <br/><br/>

                                    </div>
                                )
                            })}

































                        </div>
                      


                    <form   action={editMode ? updateRed : createRed} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit red wine' : 'add red wine'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='red-id' />

                        <label>
                            country<span id='category-edit'></span><br/>
                            
                            {red.length == 0 && !editMode &&
                                        <>
                                            <input  type='text'
                                                    required
                                                    id='category-text'
                                                    autoComplete='off'
                                                    name='category' /><br/>
                                        </>
                            }
                            {red.length > 0 && !editMode &&
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    {displayCategoryDropdown ? 
                                        <select defaultValue='' 
                                                name='category'
                                                required>
                                                <option disabled value=''>select...</option>
                                                {redCategories.map(category=><option key={category} value={category}>{category}</option>)}        
                                        </select>                                
                                    : 
                                        <input  type='text'
                                                required
                                                id='category-text'
                                                placeholder=' + add new country'
                                                autoComplete='off'
                                                name='category' />
                                    }
                                    
                                    <div    style={{background:'lightgrey',
                                                    padding:'0px 10px',
                                                    cursor:'pointer',
                                                    border:'1px solid black',
                                                    borderRadius:'5px'}}
                                            onClick={toggleCategoryDropdown}>
                                        {displayCategoryDropdown ? 'New Country' : 'Existing Countries'}
                                    </div>

                                </div>
                            }
                        </label>                   
                        <br/>

                        <label>
                            grapes<br/>
                            <input  type='text' 
                                    name='grapes' 
                                    autoComplete='off'
                                    id='grapes'
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
                            <span>vintage</span><br/>
                            <input  type='text' 
                                    name='vintage' 
                                    autoComplete='off'
                                    id='vintage'
                                    required
                                    style={{width:'40px'}} />
                        </label>
                        <br/><br/>

                        <label>
                            description<br/>
                            <input  type='text'
                                    id='description'
                                    autoComplete='off'
                                    name='description' 
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

                        <div style={{display:'flex',alignItems:'flex-end',gap:'20px'}}>

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

                            <label>
                                <span style={{fontSize:'12px'}}>1/2 btl.</span>
                                <br/>
                                price<br/>
                                <input  type='text'
                                        id='half-bottle-price'
                                        autoComplete='off'
                                        style={{width:'5ch'}}
                                        name='half-bottle-price' />
                            </label>
                        </div>
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
                                    value = {editMode ? 'update red wine' : 'create red wine'} />
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
                {redCategories.length > 1 &&    
                    <>
                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div className='desserts-h1'>
                                countries
                            </div><br/>

                            {redCategories.map((category,i)=>( 
                                                                    
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

                                                {i+1 != redCategories.length && 
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