import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function Beer(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [beer, setBeer] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getBeer(){
        fetch(`${BASE_URL}/api/beer`)
            .then(res=>res.json())
            .then(json=>setBeer(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getBeer(),[])

    async function createBeer(formData){
        await fetch(`${BASE_URL}/api/beer`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  
                                                                            section: formData.get('section'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'),
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Beer Created:
${formData.get('name')}
            `))
        .then(getBeer())
        .catch(err=>console.log(err))
    }

    function editBeer(id,section,name,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#beer-id').value = id
            document.querySelector('#section').innerHTML = section
            document.querySelector('#section-wrapper').style.display = 'block'
            document.querySelector('#name').value = name
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    async function updateBeer(formData){
        await fetch(`${BASE_URL}/api/beer/${formData.get('id')}`,{ method:'PUT',
                                                                        headers:{'Content-Type':'application/json'},
                                                                        body: JSON.stringify({
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'),
                                                                            price: formData.get('price')
                                                                        })
        })
        .then(alert(`
            Beer Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getBeer())
        .catch(err=>console.log(err))
    }

    async function deleteBeer(id){
        await fetch(`${BASE_URL}/api/beer/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getBeer())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#beer-id').value = ''
            document.querySelector('#section').innerHTML = ''
            document.querySelector('#section-wrapper').style.display = 'none'
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; beer</div>




                        <div className='specials-update-menu'>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>beer</div>
                            </div>















                        <div className='specials-h2 specials-update-heading'>DRAFT</div>

                            {beer.filter(item=>item.section == 'DRAFT').length == 0 && <>This Section is Empty</>}
                            {beer.filter(item=>item.section == 'DRAFT').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editBeer(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteBeer(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        <div className='specials-h2 specials-update-heading'>CAN</div>

                            {beer.filter(item=>item.section == 'CAN').length == 0 && <>This Section is Empty</>}
                            {beer.filter(item=>item.section == 'CAN').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editBeer(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteBeer(data._id)}>DELETE</span>

                                        </div>
                                        <br/>

                                    </div>
                                )
                            })}











                        <div className='specials-h2 specials-update-heading'>BOTTLE</div>

                            {beer.filter(item=>item.section == 'BOTTLE').length == 0 && <>This Section is Empty</>}
                            {beer.filter(item=>item.section == 'BOTTLE').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        <span className='name'>{data.name}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editBeer(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteBeer(data._id)}>DELETE</span>

                                        </div>
                                        <br/>

                                    </div>
                                )
                            })}










                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateBeer : createBeer} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit beer' : 'add beer'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='beer-id' />

                        
                        <div    style={{display:'none'}}
                                id='section-wrapper'>
                                            section: <span id='section'></span>
                                <br/><br/>
                        </div> 

                        {!editMode &&                         
                                        <label>
                                            section    
                                            &nbsp; 
                                            <select name='section' required defaultValue=''>
                                                <option disabled value=''>select...</option>
                                                <option>DRAFT</option>
                                                <option>CAN</option>
                                                <option>BOTTLE</option>
                                            </select>

                                            <br/><br/>
                                        </label>

                        }             
                        
                        





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
                                    value = {editMode ? 'update beer' : 'create beer'} />
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