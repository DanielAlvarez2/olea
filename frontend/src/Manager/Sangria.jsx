import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function Sangria(){
    const [sangrias, setSangrias] = useState([])
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>getSangrias(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createSangria(formData){
        await fetch(`${BASE_URL}/api/sangria`,{method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    name: formData.get('name'),
                                                    description: formData.get('description'),
                                                    glassPrice: formData.get('glassPrice'),
                                                    pitcherPrice: formData.get('pitcherPrice')
                                                })
        })
        .then(alert(`
            New Sangria Created:
             - ${formData.get('name')}`))
        .then(getSangrias())
        .catch(err=>console.log(err))
    }

    async function updateSangria(formData){
        await fetch(`${BASE_URL}/api/sangria/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                name: formData.get('name'),
                                                                                description: formData.get('description'),
                                                                                glassPrice: formData.get('glassPrice'),
                                                                                pitcherPrice: formData.get('pitcherPrice'),
                                                    })
        })
        .then(alert(`
            Sangria Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getSangrias())
        .catch(err=>console.log(err))
    }

    function getSangrias(){
        try{
            fetch(`${BASE_URL}/api/sangria`)
                .then(res=>res.json())
                .then(json=>setSangrias(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteSangria(id){
        try{
            fetch(`${BASE_URL}/api/sangria/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getSangrias())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editSangria(id,name,description,glassPrice, pitcherPrice){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#sangria-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#description').value = description
            document.querySelector('#glass-price').value = glassPrice
            document.querySelector('#pitcher-price').value = pitcherPrice
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/sangria/move-up/${id}`,{method:'PUT'})
                .then(()=>getSangrias())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/sangria/move-down/${id}`,{method:'PUT'})
                .then(()=>getSangrias())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#sangria-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#description').value = ''
            document.querySelector('#glass-price').value = ''
            document.querySelector('#pitcher-price').value = ''
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; sangria</div>



                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>sangria</div>
                            </div>















                            {sangrias.map(data=>{
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
                                        
                                            
                                            <div className='price'>{data.glassPrice}</div> 
                                            <div className='price'>{data.pitcherPrice}</div> 
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSpecial(   data._id,
                                                                                data.name,
                                                                                data.description,
                                                                                data.pitcherPrice,
                                                                                data.glassPrice)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSangria(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != sangrias.length && 
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
                      


                    <form   action={editMode ? updateSangria : createSangria} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update sangria' : 'create sangria'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='special-id' />
                        

                        
                        

                        <label>
                            name<br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%'}} />
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
                            glass price<br/>
                            <input  type='text'
                                    required 
                                    id='price'
                                    name='price' />
                        </label>
                        <br/><br/>

                        <label>
                            pitcher price<br/>
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
                                    value = {editMode ? 'update sangria' : 'create sangria'} />
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