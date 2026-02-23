import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineRosé(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [rosé, setRosé] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getRosé(){
        fetch(`${BASE_URL}/api/rose`)
            .then(res=>res.json())
            .then(json=>setRosé(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getRosé(),[])

    async function createRosé(formData){
        await fetch(`${BASE_URL}/api/rose`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  grapes: formData.get('grapes'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'), 
                                                                            vintage: formData.get('vintage'), 
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Rosé Created:
${formData.get('name')}
            `))
        // .then(clearForm())
        .then(getRosé())
        .catch(err=>console.log(err))
    }

    function editRosé(id,grapes,name,vintage,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#rosé-id').value = id
            document.querySelector('#grapes').value = grapes
            document.querySelector('#name').value = name
            document.querySelector('#vintage').value = vintage
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    async function updateRosé(formData){
        await fetch(`${BASE_URL}/api/rosé/${formData.get('id')}`,{ method:'PUT',
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
            Rosé Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        // .then(clearForm())
        .then(getRosé())
        .catch(err=>console.log(err))
    }

    async function deleteRosé(id){
        await fetch(`${BASE_URL}/api/rose/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getRosé())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#rosé-id').value = ''
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; bottles &gt; rosé</div>




                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'20px'}}>rosé</div>
                            </div>

                            {rosé.length == 0 && <><br/>This Section is Empty</>}













                            {rosé.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.vintage},</span>
                                        <span> {data.description} / {data.price}</span>
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editRosé(   
                                                                                data._id,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteRosé(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateRosé : createRosé} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit rosé wine' : 'add rosé wine'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='rosé-id' />




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
                                    value = {editMode ? 'update rosé wine' : 'create rosé wine'} />
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