import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function Sherries(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [sherries, setSherries] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getSherries(){
        fetch(`${BASE_URL}/api/sherries`)
            .then(res=>res.json())
            .then(json=>setSherries(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getSherries(),[])

    async function createSherry(formData){
        await fetch(`${BASE_URL}/api/sherries`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  grapes: formData.get('grapes'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'), 
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Sherry Created:
${formData.get('name')}
            `))
        // .then(clearForm())
        .then(getSherries())
        .catch(err=>console.log(err))
    }

    function editSherry(id,grapes,name,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#sherry-id').value = id
            document.querySelector('#grapes').value = grapes
            document.querySelector('#name').value = name
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    async function updateSherry(formData){
        await fetch(`${BASE_URL}/api/sherries/${formData.get('id')}`,{ method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                            grapes: formData.get('grapes'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'),
                                                                            price: formData.get('price')
                                                                        })
        })
        .then(alert(`
            Sherry Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        // .then(clearForm())
        .then(getSherries())
        .catch(err=>console.log(err))
    }

    async function deleteSherry(id){
        await fetch(`${BASE_URL}/api/sherries/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getSherries())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#sherry-id').value = ''
            document.querySelector('#grapes').value = ''
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; sherries</div>




                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'20px'}}>sherries</div>
                            </div>

                            {sherries.length == 0 && <><br/>This Section is Empty</>}













                            {sherries.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSherry(   
                                                                                data._id,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSherry(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateSherry : createSherry} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit sherry' : 'add sherry'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='sherry-id' />




                        <label>
                            grape varietal(s)<br/>
                            <input  type='text' 
                                    name='grapes' 
                                    id='grapes'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

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
                                    value = {editMode ? 'update sherry' : 'create sherry'} />
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