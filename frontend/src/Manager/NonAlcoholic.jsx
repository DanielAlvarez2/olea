import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function NonAlcoholic(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getNonAlcoholicDrinks(){
        fetch(`${BASE_URL}/api/non-alcoholic-drinks`)
            .then(res=>res.json())
            .then(json=>setNonAlcoholicDrinks(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getNonAlcoholicDrinks(),[])

    async function createNonAlcoholicDrink(formData){
        await fetch(`${BASE_URL}/api/non-alcoholic-drinks`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'), 
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Non-Alcoholic Drink Created:
${formData.get('name')}
            `))
        // .then(clearForm())
        .then(getNonAlcoholicDrinks())
        .catch(err=>console.log(err))
    }

    function editNonAlcoholicDrink(id,name,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#non-alcoholic-drink-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    async function updateNonAlcoholicDrink(formData){
        await fetch(`${BASE_URL}/api/non-alcoholic-drinks/${formData.get('id')}`,{ method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'),
                                                                            price: formData.get('price')
                                                                        })
        })
        .then(alert(`
            Non-Alcoholic Drink Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        // .then(clearForm())
        .then(getNonAlcoholicDrinks())
        .catch(err=>console.log(err))
    }

    async function deleteNonAlcoholicDrink(id){
        await fetch(`${BASE_URL}/api/non-alcoholic-drinks/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getNonAlcoholicDrinks())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#non-alcoholic-drink-id').value = ''
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
            <div className='manager-page-wrapper' style={{border:'1px solid red'}}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; non-alcoholic drinks</div>




                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'20px'}}>non-alcoholic drinks</div>
                            </div>

                            {nonAlcoholicDrinks.length == 0 && <><br/>This Section is Empty</>}

                            {nonAlcoholicDrinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editNonAlcoholicDrink(   
                                                                                data._id,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteNonAlcoholicDrink(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateNonAlcoholicDrink : createNonAlcoholicDrink} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit non-alcoholic drink' : 'add non-alcoholic drink'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='non-alcoholic-drink-id' />




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
                            <input  type='text'
                                    name='description' 
                                    id='description'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

                        <label>
                            price<br/>
                            <input  type='text'
                                    required 
                                    id='price'
                                    style={{width:'40px'}}
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
                                    value = {editMode ? 'update n/a drink' : 'create non-alcoholic drink'} />
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