import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineSparkling(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [sparkling, setSparkling] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getSparkling(){
        fetch(`${BASE_URL}/api/sparkling`)
            .then(res=>res.json())
            .then(json=>setSparkling(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getSparkling(),[])

    async function createSparkling(formData){
        await fetch(`${BASE_URL}/api/sparkling`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  grapes: formData.get('grapes'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'), 
                                                                            vintage: formData.get('vintage'), 
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Sparkling Created:
${formData.get('name')}
            `))
        // .then(clearForm())
        .then(getSparkling())
        .catch(err=>console.log(err))
    }

    function editSparkling(id,grapes,name,vintage,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#sparkling-id').value = id
            document.querySelector('#grapes').value = grapes
            document.querySelector('#name').value = name
            document.querySelector('#vintage').value = vintage
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    async function updateSparkling(formData){
        await fetch(`${BASE_URL}/api/sparkling/${formData.get('id')}`,{ method:'PUT',
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
            Sparkling Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        // .then(clearForm())
        .then(getSparkling())
        .catch(err=>console.log(err))
    }

    async function deleteSparkling(id){
        await fetch(`${BASE_URL}/api/sparkling/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getSparkling())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#sparkling-id').value = ''
            document.querySelector('#grapes').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#vintage').value = ''
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; bottles &gt; sparkling</div>




                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'20px'}}>cava & champagne</div>
                            </div>

                            {sparkling.length == 0 && <><br/>This Section is Empty</>}













                            {sparkling.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.vintage},</span>
                                        <span> {data.description} / {data.price}</span>
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSparkling(   
                                                                                data._id,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSparkling(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateSparkling : createSparkling} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit sparkling wine' : 'add sparkling wine'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='sparkling-id' />




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
                            vintage<br/>
                            <input  type='text'
                                    required 
                                    id='vintage'
                                    style={{width:'40px'}}
                                    name='vintage' />
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
                                    value = {editMode ? 'update sparkling wine' : 'create sparkling wine'} />
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