import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";


export default function TeaUpdate(){
    const [allTeas, setAllTeas] = useState([])
    const [displayTeas, setDisplayTeas] = useState('black')
    const [editMode, setEditMode] = useState(false)
    useEffect(()=>getTeas(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewTea(formData){
        await fetch(`${BASE_URL}/api/teas`,{method:'POST',
                                                headers:{'Content-Type':'application/json'},
                                                body: JSON.stringify({
                                                    menu: formData.get('menu'),
                                                    section: formData.get('section'),
                                                    type: formData.get('type'),
                                                    name: formData.get('name'),
                                                })
        })
        .then(alert(`
            New Tea Created:
             - ${formData.get('name')}`))
        .then(getTeas())
        .catch(err=>console.log(err))
    }

    async function updateTea(formData){
        await fetch(`${BASE_URL}/api/teas/${formData.get('id')}`,{  method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                                type: formData.get('type'),
                                                                                name: formData.get('name'),
                                                                                price: formData.get('price')
                                                    })
        })
        .then(alert(`
            Tea Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getTeas())
        .catch(err=>console.log(err))
    }

    function getTeas(){
        try{
            fetch(`${BASE_URL}/api/teas`)
                .then(res=>res.json())
                .then(json=>setAllTeas(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteTea(id){
        try{
            fetch(`${BASE_URL}/api/teas/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getTeas())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editTea(id,section,type,name,price){
        try{
            setEditMode(true)
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#tea-id').value = id
            document.querySelector('#tea-type').value = type
            document.querySelector('#name').value = name
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/teas/move-up/${id}`,{method:'PUT'})
                .then(()=>getTeas())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/teas/move-down/${id}`,{method:'PUT'})
                .then(()=>getTeas())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#tea-id').value = ''
            document.querySelector('#tea-type').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#price').value = ''
            setEditMode(false)
        }catch(err){
            console.log(err)
        }
    }

    function changeTeaTypeDisplay(e){
        setDisplayTeas(e.target.value)
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='desserts' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update &gt; tea</div>



                        <div className='desserts-update-menu'>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>teas</div>
                                <br/>

                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <label>
                                        <input  type='radio'
                                                value='black' 
                                                checked={displayTeas == 'black'}
                                                onChange={changeTeaTypeDisplay}
                                                name='display-type' /> &nbsp;black
                                    </label>
                                        
                                    <label>
                                        <input  type='radio'
                                                value='green' 
                                                checked={displayTeas == 'green'}
                                                onChange={changeTeaTypeDisplay}
                                                name='display-type' /> &nbsp;green
                                    </label>

                                    <label>
                                        <input  type='radio'
                                                value='herbal'
                                                checked={displayTeas == 'herbal'}
                                                onChange={changeTeaTypeDisplay}
                                                name='display-type' /> &nbsp;herbal
                                    </label>
                                </div>
                                
                            </div>















                            {allTeas.filter(item=>item.sequence).map(data=>{
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
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editTea(   data._id,
                                                                                data.section,
                                                                                data.type,
                                                                                data.name)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteTea(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allTeas.filter(item=>item.sequence).length && 
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
                      


                    <form   action={editMode ? updateTea : createNewTea} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update tea' : 'create new tea'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='coffee-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dessert' />

                        <input  type='hidden'
                                name='section' 
                                value='teas' />       

                        <label>
                            type:&nbsp;
                            <select defaultValue=''
                                    name='type'>
                                <option disabled value=''>select...</option>
                                <option>black</option>
                                <option>green</option>
                                <option>herbal</option>
                            </select>
                        </label>
                        <br/><br/>

                        <label>
                            name<br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

                        <div id='tea-form-buttons' style={{display:'flex',justifyContent:'space-around'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update tea' : 'create new tea'} />
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