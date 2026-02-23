import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function WineWhite(){
    const [white, setWhite] = useState([])
    const [displayCategoryDropdown, setDisplayCategoryDropdown] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [currentCategory, setCurrentCategory] = useState('')
    const [whiteCategories, setWhiteCategories] = useState([])
    useEffect(()=>getWhite(),[])
    useEffect(()=>getWhiteCategories(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createWhite(formData){
        await fetch(`${BASE_URL}/api/white`,{  method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            category: formData.get('category'),
                                                            grapes: formData.get('grapes'),
                                                            name: formData.get('name'),
                                                            vintage: formData.get('vintage'),
                                                            description: formData.get('description'),
                                                            price: formData.get('price')
                                                })
        })
        .then(alert(`
            New White Wine Created:
             - ${formData.get('name')}`))
        .then(()=>getWhite())
        .then(()=>getWhiteCategories())
        .then(()=>setCurrentCategory(formData.get('category')))
        .catch(err=>console.log(err))
    }

    async function updateWhite(formData){
        await fetch(`${BASE_URL}/api/white/${formData.get('id')}`,{  method:'PUT',
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
            White Wine Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getWhite())
        .catch(err=>console.log(err))
    }

    function getWhite(){
        try{
            fetch(`${BASE_URL}/api/white`)
                .then(res=>res.json())
                .then(json=>{
                    setWhite(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getWhiteCategories(){
        try{
            fetch(`${BASE_URL}/api/white-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let whiteCategories = new Set()
                    json.forEach(drink=>whiteCategories.add(drink.category))
                    setWhiteCategories([...whiteCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteWhite(id){
        try{
            fetch(`${BASE_URL}/api/white/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getWhite())
                .then(()=>getWhiteCategories())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editWhite(id,category,grapes,name,vintage,description,price){
        try{
            setEditMode(true)
            document.querySelector('#white-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#white-id').value = id
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
            document.querySelector('#white-id').value = ''
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
        fetch(`${BASE_URL}/api/white/move-category-up/${i}`,{method:'PUT'})
            .then(()=>getWhite())
            .then(()=>getWhiteCategories())
            .catch(err=>console.log(err))
    }

    function moveCategoryDown(i){
        fetch(`${BASE_URL}/api/white/move-category-down/${i}`,{method:'PUT'})
            .then(()=>getWhite())
            .then(()=>getWhiteCategories())
            .catch(err=>console.log(err))
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; bottles &gt; white</div>



                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>white</div>
                                <br/>
                            </div>

                            

                            {white[0] == undefined ? 
                                <div style={{whiteSpace:'pre-wrap'}}>
                                    DATABASE IS EMPTY<br/>
                                    <br/>
                                </div>                            
                            : 
                                <div>
                                    <div className='desserts-h1'>country:</div>
                                    <select id='category-dropdown' defaultValue={currentCategory} value={currentCategory} onChange={handleChange}>
                                        <option disabled value=''>select...</option>
                                        {whiteCategories.map(category=><option key={category} value={category}>{category}</option>)}
                                        
                                    </select>
                                </div>
                            }




                            <br/><br/>



                            {white.filter(item=>item.category == currentCategory).map(data=>{
                                return(
                                    <div key={data._id} className='dessert-drinks-display'>
                                        
                                        
                                        <span> {data.grapes}, </span>
                                        <span className='dessert-drink-name'>{data.name}</span>
                                        <span>, {data.description} / {data.price}</span>
                                        <div style={{marginTop:'5px'}}>
                                            
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editWhite(  data._id,
                                                                                    data.category,
                                                                                    data.grapes,
                                                                                    data.name,
                                                                                    data.vintage,
                                                                                    data.description,
                                                                                    data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteWhite(data._id)}>DELETE</span>

                                        </div>
                                        <br/><br/>

                                    </div>
                                )
                            })}

































                        </div>
                      


                    <form   action={editMode ? updateWhite : createWhite} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit white wine' : 'add white wine'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='white-id' />

                        <label>
                            country<span id='category-edit'></span><br/>
                            
                            {white.length == 0 && !editMode &&
                                        <>
                                            <input  type='text'
                                                    required
                                                    id='category-text'
                                                    autoComplete='off'
                                                    name='category' /><br/>
                                        </>
                            }
                            {white.length > 0 && !editMode &&
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    {displayCategoryDropdown ? 
                                        <select defaultValue='' 
                                                name='category'
                                                required>
                                                <option disabled value=''>select...</option>
                                                {whiteCategories.map(category=><option key={category} value={category}>{category}</option>)}        
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
                                    style={{width:'100%',width:'40px'}} />
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
                                    value = {editMode ? 'update white wine' : 'create white wine'} />
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
                {whiteCategories.length > 1 &&    
                    <>
                        <div className='desserts-update-menu' style={{minHeight:'auto'}}>
                            <div className='desserts-h1'>
                                countries
                            </div><br/>

                            {whiteCategories.map((category,i)=>( 
                                                                    
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

                                                {i+1 != whiteCategories.length && 
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