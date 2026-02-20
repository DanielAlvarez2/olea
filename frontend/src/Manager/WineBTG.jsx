import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineBTG(){
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'
    
    const [winesBTG, setWinesBTG] = useState([])
    const [editMode, setEditMode] = useState(false)

    function getWinesBTG(){
        fetch(`${BASE_URL}/api/wines-btg`)
            .then(res=>res.json())
            .then(json=>setWinesBTG(json))
            .catch(err=>console.log(err))
    }

    useEffect(()=>getWinesBTG(),[])

    async function createWineBTG(formData){
        await fetch(`${BASE_URL}/api/wines-btg`,{   method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({  menu: formData.get('menu'),
                                                                            section: formData.get('section'),
                                                                            grapes: formData.get('grapes'),
                                                                            name: formData.get('name'),
                                                                            description: formData.get('description'),
                                                                            vintage: formData.get('vintage'),
                                                                            price: formData.get('price')
                                                    })
        })
        .then(alert(`
New Wine BTG Created:
${formData.get('name')}
            `))
        .then(getWinesBTG())
        .catch(err=>console.log(err))
    }

    function editWineBTG(id,section,grapes,name,vintage,description,price){
        try{
            setEditMode(true)
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#wine-btg-id').value = id
            document.querySelector('#section').innerHTML = section
            document.querySelector('#section-wrapper').style.display = 'block'
            document.querySelector('#grapes').value = grapes
            document.querySelector('#name').value = name
            document.querySelector('#vintage').value = vintage
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price

        }catch(err){
            console.log(err)
        }
    }

    async function updateWineBTG(formData){
        alert(`formData.get('grapes): ${formData.get('grapes')}`)
        await fetch(`${BASE_URL}/api/wines-btg/${formData.get('id')}`,{ method:'PUT',
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
            Wine BTG Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(getWinesBTG())
        .catch(err=>console.log(err))
    }

    async function deleteWineBTG(id){
        await fetch(`${BASE_URL}/api/wines-btg/${id}`,{method:'DELETE'})
        .then(res=>res.json())
        .then(json=>alert(json))
        .then(()=>getWinesBTG())
        .catch(err=>console.log(err))
    }

    function clearForm(){
        try{
            document.querySelector('#wine-btg-id').value = ''
            document.querySelector('#section').innerHTML = ''
            document.querySelector('#section-wrapper').style.display = 'none'
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; wine by the glass</div>




                        <div className='specials-update-menu'>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>wines by the glass</div>
                            </div>















                        <div className='specials-h2 specials-update-heading'>Cava</div>

                            {winesBTG.filter(item=>item.section == 'Cava').length == 0 && <>This Section is Empty</>}
                            {winesBTG.filter(item=>item.section == 'Cava').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span className='vintage'>{data.vintage}, </span>
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{margin:'5px 0'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editWineBTG(   data._id,
                                                                                data.section,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteWineBTG(data._id)}>DELETE</span>

                                        </div>
                                        <br/>


                                    </div>
                                )
                            })}










                        <div className='specials-h2 specials-update-heading'>White</div>

                            {winesBTG.filter(item=>item.section == 'White').length == 0 && <>This Section is Empty</>}
                            {winesBTG.filter(item=>item.section == 'White').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span className='vintage'>{data.vintage}, </span>                                        
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editWineBTG(   data._id,
                                                                                data.section,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteWineBTG(data._id)}>DELETE</span>

                                        </div>
                                        <br/>

                                    </div>
                                )
                            })}











                        <div className='specials-h2 specials-update-heading'>Rosé</div>

                            {winesBTG.filter(item=>item.section == 'Rosé').length == 0 && <>This Section is Empty</>}
                            {winesBTG.filter(item=>item.section == 'Rosé').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span className='vintage'>{data.vintage}, </span>                                        
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editWineBTG(   data._id,
                                                                                data.section,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteWineBTG(data._id)}>DELETE</span>

                                        </div>
                                        <br/>

                                    </div>
                                )
                            })}










                        <div className='specials-h2 specials-update-heading'>Red</div>

                            {winesBTG.filter(item=>item.section == 'Red').length == 0 && <>This Section is Empty</>}
                            {winesBTG.filter(item=>item.section == 'Red').map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}, </span>
                                        <span className='vintage'>{data.vintage}, </span>                                        
                                        <span> {data.description}</span>
                                        <span className='price'> &nbsp;{data.price}</span> 
                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editWineBTG(   data._id,
                                                                                data.section,
                                                                                data.grapes,
                                                                                data.name,
                                                                                data.vintage,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteWineBTG(data._id)}>DELETE</span>

                                        </div>
                                        <br/>

                                    </div>
                                )
                            })}



                        </div>{/* .specials-update-menu */}
                      

                    <form   action={editMode ? updateWineBTG : createWineBTG} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'edit wine BTG' : 'add wine BTG'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='wine-btg-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='wine btg' />
                        
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
                                                <option>Cava</option>
                                                <option>White</option>
                                                <option>Rosé</option>
                                                <option>Red</option>
                                            </select>

                                            <br/><br/>
                                        </label>

                        }             
                        
                        


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
                                    name='vintage' 
                                    id='vintage'
                                    required
                                    style={{width:'50px'}} />
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
                                    value = {editMode ? 'update wine BTG' : 'create wine BTG'} />
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