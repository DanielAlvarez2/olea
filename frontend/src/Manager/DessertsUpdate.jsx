import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import './DessertsUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function DessertsUpdate(){
    const [updatingMenu, setUpdatingMenu] = useState(false)
    const [allDesserts, setAllDesserts] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [currentImage, setCurrentImage] = useState('')
    const [cloudinaryPublicID, setCloudinaryPublicID] = useState('')
    const [cloudinarySecureURL, setCloudinarySecureURL] = useState('')
    const [isChecked, setIsChecked] = useState(false)


    useEffect(()=>getDesserts(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createNewDessert(formData){
        setUpdatingMenu(true)
        setTimeout(postDessert,0)
        async function postDessert(){
            await fetch(`${BASE_URL}/api/desserts`,{method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({
                                                        menu: formData.get('menu'),
                                                        section: formData.get('section'),
                                                        name: formData.get('name'),
                                                        allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                        allergiesComplete: formData.get('allergies-complete'),
                                                        description: formData.get('description'),
                                                        price: formData.get('price'),
                                                        previewSource
                                                    })
            })
            .then(()=>alert(`
                New Dessert Created:
                - ${formData.get('name')}`))
            .then(()=>getDesserts())
            .then(()=>setUpdatingMenu(false))
            .catch(err=>console.log(err))
        }
    }

    async function updateDessert(formData){
        setUpdatingMenu(true)
        setTimeout(putDessert,0)
        async function putDessert(){
            await fetch(`${BASE_URL}/api/desserts/${formData.get('id')}`,{  method:'PUT',
                                                                            headers:{'Content-Type':'application/json'},
                                                                            body: JSON.stringify({
                                                                                    name: formData.get('name'),
                                                                                    allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                                                    allergiesComplete: formData.get('allergies-complete'),
                                                                                    description: formData.get('description'),
                                                                                    price: formData.get('price'),
                                                                                    cloudinary_public_ID: formData.get('cloudinary_public_ID'),
                                                                                    cloudinary_secure_URL: formData.get('cloudinary_secure_URL'),
                                                                                    previewSource,
                                                                                    isChecked
                                                        })
            })
            .then(()=>alert(`
                Dessert Updated:
                - ${formData.get('name')}`))
            .then(setEditMode(false))
            .then(()=>getDesserts())
            .then(()=>setUpdatingMenu(false))
            .catch(err=>console.log(err))
        }
    }

    function getDesserts(){
        try{
            fetch(`${BASE_URL}/api/desserts`)
                .then(res=>res.json())
                .then(json=>setAllDesserts(json))
                .then(clearForm())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function archiveDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/archive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function unarchiveDessert(id){
        try{
            fetch(`${BASE_URL}/api/desserts/unarchive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editDessert(   id,
                            section,
                            name,
                            allergiesAbbreviated,
                            allergiesComplete,
                            description,
                            price,
                            cloudinary_public_ID,
                            cloudinary_secure_URL
                        ){
        try{
            setEditMode(true)
            setIsChecked(false)
            setCurrentImage(cloudinary_secure_URL ? cloudinary_secure_URL : '')
            setCloudinaryPublicID(cloudinary_public_ID ? cloudinary_public_ID : '')
            setCloudinarySecureURL(cloudinary_secure_URL ? cloudinary_secure_URL : '')
            document.querySelector('#desserts-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#dessert-id').value = id
            document.querySelector('#name').value = name
            document.querySelector('#allergies-abbreviated').value = allergiesAbbreviated
            document.querySelector('#allergies-complete').value = allergiesComplete
            document.querySelector('#description').value = description
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/desserts/move-up/${id}`,{method:'PUT'})
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/desserts/move-down/${id}`,{method:'PUT'})
                .then(()=>getDesserts())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#dessert-id').value = ''
            document.querySelector('#name').value = ''
            document.querySelector('#allergies-abbreviated').value = ''
            document.querySelector('#allergies-complete').value = ''
            document.querySelector('#description').value = ''
            document.querySelector('#price').value = ''
            document.querySelector('#image-file').value = ''
            document.querySelector('#new-image-dropdown').style.visibility = 'visible'

            setEditMode(false)
            setIsChecked(false)
            setCurrentImage('')
            setCloudinaryPublicID('')
            setCloudinarySecureURL('')
            setPreviewSource('')
        }catch(err){
            console.log(err)
        }
    }

    const [previewSource, setPreviewSource] = useState()
    function handleFileInputChange(e){
        const file = e.target.files[0]
        previewFile(file)
    }
    function previewFile(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setPreviewSource(reader.result)
        }
    }
    function handleToggleChange(){
        !isChecked && setPreviewSource('')
        if(!isChecked){
            document.querySelector('#image-file').value = ''
            document.querySelector('#new-image-dropdown').style.visibility = 'hidden'
        }else{
            document.querySelector('#new-image-dropdown').style.visibility = 'visible'
        }
        setIsChecked(!isChecked)
        document.querySelector('#do-not-circle').style.color = isChecked ? 'transparent' : 'red'
    }

    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='dessert' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dessert &gt; update &gt; desserts</div>



                        <div className='desserts-update-menu'>
                            <div>
                                <div className='desserts-h1' style={{marginBottom:'0'}}>desserts</div>
                                <br/>
                            </div>















                            {allDesserts.filter(item=>item.sequence).map(data=>{
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
                                        {data.allergiesAbbreviated && 
                                            <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                        <span> {data.description}</span>
                                        {data.price.length < 3 ? 
                                            <span className='price'> &nbsp;{data.price}</span> : 
                                            <div className='price'>{data.price}</div> }
                                        <div className='allergies-complete'>{data.allergiesComplete}</div>
                                        {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                        
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn archive-btn'
                                                    onClick={()=>archiveDessert(data._id)}>ARCHIVE</span>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editDessert(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.description,
                                                                                data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL
                                                                                )}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteDessert(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allDesserts.filter(item=>item.sequence).length && 
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
                      


                    <form   action={editMode ? updateDessert : createNewDessert} 
                            id='desserts-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update dessert' : 'create new dessert'}

                        </h2>
                        <br/>

                        <input  type='hidden' 
                                name='id' 
                                id='dessert-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dessert' />

                        <input  type='hidden'
                                name='section' 
                                value='desserts' />                        
                        

                        <label>
                            name <span className='required-field'> *required</span><br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - abbreviated &nbsp;ex: gl.d.n<br/>
                            <input  type='text' 
                                    maxLength='100'
                                    name='allergies-abbreviated' 
                                    id='allergies-abbreviated'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete &nbsp;ex: gluten, DAIRY, nuts<br/>
                            <input  type='text'
                                    maxLength='100'
                                    id='allergies-complete'
                                    name='allergies-complete' 
                                    style={{width:'100%'}} /><br/>
                            UPPER-CASE = CAN NOT BE REMOVED<br/>
                            lower-case = can be omitted
                        </label>
                        <br/><br/>
                        <label>
                            description<br/>
                            <textarea   rows='5'
                                        maxLength='500'
                                        name='description' 
                                        id='description'
                                        style={{width:'100%'}}></textarea>
                        </label>
                        <br/><br/>
                        <label>
                            price <span className='required-field'> *required</span><br/>
                            <input  type='text'
                                    required 
                                    maxLength='100'
                                    id='price'
                                    name='price' />
                        </label>
                        <br/><br/>

                        {editMode && currentImage && <>current image:<br/></>}

                        {currentImage &&    <>
                                                <div style={{   position:'relative',
                                                                display:'inline-block'}}>
                                                    <div style={{   position:'absolute',
                                                                    width:'100%',
                                                                    height:'100%',
                                                                    display:'grid',
                                                                    placeContent:'center',
                                                                    top:'0',
                                                                    left:'0'}}><MdDoNotDisturbAlt   size='60' 
                                                                                                    id='do-not-circle'
                                                                                                    style={{color:'transparent'}} /></div>
                                                    <img    id='current-image'
                                                            src={currentImage} 
                                                            style={{maxWidth:'100px',maxHeight:'100px'}} />
                                                </div>                    
                                            </>
                        }
                        
                    
                        
                        
                        {editMode && currentImage && <><br/><br/></>}
                        
                        <input  type='hidden' 
                                value={cloudinaryPublicID}
                                id='cloudinary_public_ID'                                                    
                                name='cloudinary_public_ID' />
                        <input  type='hidden'
                                value={cloudinarySecureURL}
                                id='cloudinary_secure_URL'
                                name='cloudinary_secure_URL' />

                        {editMode && currentImage &&    <>                                                        
                                                            <label>
                                                                <input  type='checkbox'
                                                                        checked={isChecked}
                                                                        onChange={handleToggleChange} 
                                                                        name='no-image-checkbox'
                                                                        id='no-image-checkbox'
                                                                />
                                                                &nbsp;display NO image
                                                                <br/><br/>
                                                            </label>
                                                        </>}

                        <label id='new-image-dropdown'>
                            {editMode   ? currentImage ? 'update image (optional)' : 'add image (optional)' 
                                        : 'image file (optional)'}
                            
                            <input  name='image-file' 
                                    id='image-file'
                                    onChange={handleFileInputChange} 
                                    type='file'/>
                            
                        </label>

                        {previewSource && <img src={previewSource} style={{maxWidth:'300px',maxHeight:'300px'}} />}


                        <br/><br/>

                        <div id='desserts-form-buttons' style={{display:'flex',justifyContent:'space-around'}}>
                            {!updatingMenu && 
                                <input  type='submit' 
                                style={{padding:'10px 10px',
                                    cursor:'pointer',
                                    borderRadius:'10px',
                                    border:'2px solid black',
                                    color:'black',
                                    background:'lightgrey',
                                    fontSize:'20px'}}
                                    value = {editMode ? 'update dessert' : 'create new dessert'} />
                            }
                            {updatingMenu && 
                                <div style={{   padding:'10px',
                                                borderRadius:'10px',
                                                border:'2px solid black',
                                                color:'white',
                                                fontWeight:'900',
                                                background:'darkgrey',
                                                fontSize:'20px',
                                                cursor:'wait'}}>
                                                    <span className='flashing-text'>updating menu</span>
                                    </div>                                    
                            }
                            {editMode && !updatingMenu &&                            
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

            


















                        {allDesserts.filter(item=>item.sequence == 0).length > 0 &&
                            <>
                                <div className='desserts-update-menu'>
                                    <div>
                                        <div className='desserts-h1'>archives</div>
                                    </div>

                                    <br/><br/>

                                    {allDesserts.filter(item=>item.sequence == 0).map(data=>{
                                        return(
                                            <div key={data._id} className='dessert'>  
                                                <div>section: {data.section}</div>                                    
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                {data.price.length < 3 ? 
                                                    <span className='price'> &nbsp;{data.price}</span> : 
                                                    <div className='price'>{data.price}</div> }
                                                <div className='allergies-complete'>{data.allergiesComplete}</div> 
                                                {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                                                                           
                                                <div style={{marginTop:'5px'}}>
                                                    <span   className='btn unarchive-btn'
                                                            onClick={()=>unarchiveDessert(data._id)}>
                                                        UNarchive</span>
                                                    <span   className='btn delete-btn'
                                                            onClick={()=>deleteDessert(data._id)}>DELETE</span>
                                                    <br/><br/><br/>
                                                </div>
                                            </div>
                                        )
                                    })}


                                </div>

                            
                            </>}





            </div>{/* .manager-page-wrapper */}
        </>
    )
}