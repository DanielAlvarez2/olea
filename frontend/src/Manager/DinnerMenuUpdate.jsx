import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";


export default function DinnerMenuUpdate(){
    const [allDinnerItems, setAllDinnerItems] = useState([])
    const [tastingMenuPrices, setTastingMenuPrices] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [displaySection, setDisplaySection] = useState('cured meats')
    const [currentImage, setCurrentImage] = useState('')
    const [cloudinaryPublicID, setCloudinaryPublicID] = useState('')
    const [cloudinarySecureURL, setCloudinarySecureURL] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    useEffect(()=>getDinnerItems(),[])
    useEffect(()=>getTastingMenuPrices(),[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    async function createItem(formData){
        await fetch(`${BASE_URL}/api/dinner-menu-items`,{method:'POST',
                                                    headers:{'Content-Type':'application/json'},
                                                    body: JSON.stringify({
                                                        menu: formData.get('menu'),
                                                        section: formData.get('section'),
                                                        name: formData.get('name'),
                                                        allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                        allergiesComplete: formData.get('allergies-complete'),
                                                        description: formData.get('description'),
                                                        postDescription: formData.get('post-description'),
                                                        descriptionIntro: formData.get('description-intro'),
                                                        price: formData.get('price'),
                                                        previewSource
                                                    })
        })
        .then(alert(`
            New Dinner Item Created:
             - ${formData.get('name')}`))
        .then(()=>getDinnerItems())
        .catch(err=>console.log(err))
    }

    async function updateItem(formData){
        await fetch(`${BASE_URL}/api/dinner-menu-items/${formData.get('id')}`,{ method:'PUT',
                                                                                headers:{'Content-Type':'application/json'},
                                                                                body: JSON.stringify({
                                                                                    name: formData.get('name'),
                                                                                    allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                                                    allergiesComplete: formData.get('allergies-complete'),
                                                                                    description: formData.get('description'),
                                                                                    postDescription: formData.get('post-description'),
                                                                                    descriptionIntro: formData.get('description-intro'),
                                                                                    price: formData.get('price'),
                                                                                    cloudinary_public_ID: formData.get('cloudinary_public_ID'),
                                                                                    cloudinary_secure_URL: formData.get('cloudinary_secure_URL'),
                                                                                    previewSource,
                                                                                    isChecked
                                                                                })
        })
        .then(alert(`
            Dinner Menu Item Updated:
             - ${formData.get('name')}`))
        .then(setEditMode(false))
        .then(document.querySelector('#section-wrapper').style.display = 'none')
        .then(()=>getDinnerItems())
        .catch(err=>console.log(err))
    }

    function getDinnerItems(){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items`)
                .then(res=>res.json())
                .then(json=>setAllDinnerItems(json))
                .then(clearForm())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getTastingMenuPrices(){
        try{
            fetch(`${BASE_URL}/api/tasting-menu-prices`)
                .then(res=>res.json())
                .then(json=>setTastingMenuPrices(json[0]))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteDinnerItem(id){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items/delete/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDinnerItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function archiveItem(id){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items/archive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDinnerItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function unarchiveItem(id){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items/unarchive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getDinnerItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function editItem(  id,
                        section,
                        name,
                        allergiesAbbreviated,
                        allergiesComplete,
                        descriptionIntro,
                        description,
                        postDescription,
                        price,
                        cloudinary_public_ID,
                        cloudinary_secure_URL){
        try{
            setEditMode(true)
            setIsChecked(false)
            setCurrentImage(cloudinary_secure_URL ? cloudinary_secure_URL : '')
            setCloudinaryPublicID(cloudinary_public_ID ? cloudinary_public_ID : '')
            setCloudinarySecureURL(cloudinary_secure_URL ? cloudinary_secure_URL : '')
            document.querySelector('.specials-form').scrollIntoView({behavior:'smooth'})
            document.querySelector('#item-id').value = id
            document.querySelector('#section').innerHTML = section
            document.querySelector('#section-wrapper').style.display = 'block'
            document.querySelector('#name').value = name
            document.querySelector('#allergies-abbreviated').value = allergiesAbbreviated
            document.querySelector('#allergies-complete').value = allergiesComplete
            document.querySelector('#description').value = description
            document.querySelector('#description-intro').value = descriptionIntro
            document.querySelector('#post-description').value = postDescription
            document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items/move-up/${id}`,{method:'PUT'})
                .then(()=>getDinnerItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/dinner-menu-items/move-down/${id}`,{method:'PUT'})
                .then(()=>getDinnerItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function clearForm(){
        try{
            document.querySelector('#item-id').value = ''
            document.querySelector('#section').innerHTML = ''
            document.querySelector('#section-wrapper').style.display = 'none'
            document.querySelector('#name').value = ''
            document.querySelector('#allergies-abbreviated').value = ''
            document.querySelector('#allergies-complete').value = ''
            document.querySelector('#description').value = ''
            document.querySelector('#description-intro').value = ''
            document.querySelector('#post-description').value = ''
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

    function handleChangeDisplaySection(e){
        setDisplaySection(e.target.value)
    }

    function updateTastingMenu(formData){
        fetch(`${BASE_URL}/api/tasting-menu-prices/update`,{method:'PUT',
                                                            headers:{'Content-Type':'application/json'},
                                                            body: JSON.stringify({
                                                                tastingMenuPrice:formData.get('tasting-menu-price'),
                                                                winePairingPrice:formData.get('wine-pairing-price')
                                                            })
        })
        .then(res=>res.json())
        .then(json=>setTastingMenuPrices(json[0]))
        .catch(err=>console.log(err))
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
                <ManagerNavbar page='dinner' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>dinner &gt; update</div>



                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>dinner menu</div>
                            </div>

                            <br/>
                            section &nbsp; 
                                <select name='display-section' defaultValue={displaySection} onChange={handleChangeDisplaySection}>
                                    <option value='cured meats'>cured meats</option>
                                    <option value='appetizers'>appetizers</option>
                                    <option value='entrées'>entrées</option>
                                    <option value='sides'>sides</option>
                                </select>


































                            {displaySection == 'cured meats' && 
                                <>
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'cured meats').length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>cured meat</div>}
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'cured meats').length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>cured meats</div>}

                                {allDinnerItems.filter(item=>item.sequence && item.section == 'cured meats').map(data=>{
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
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            <div className='allergies-complete'>{data.allergiesComplete}</div>
                                            {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}
                                            <div style={{marginTop:'5px'}}>
                                                <span   className='btn archive-btn'
                                                        onClick={()=>archiveItem(data._id)}>ARCHIVE</span>
                                                <span   className='btn edit-btn'
                                                        onClick={()=>editItem(  data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL)}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteDinnerItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allDinnerItems.filter(item=>item.section == 'cured meats' && item.sequence).length && 
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
                                
                                </>
                            }




























                            {displaySection == 'appetizers' && 
                                <>
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'appetizers').length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>appetizer</div>}
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'appetizers').length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>appetizers</div>}

                                {allDinnerItems.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
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
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            <div className='allergies-complete'>{data.allergiesComplete}</div>
                                            {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                            
                                            <div style={{marginTop:'5px'}}>
                                                <span   className='btn archive-btn'
                                                        onClick={()=>archiveItem(data._id)}>ARCHIVE</span>
                                                <span   className='btn edit-btn'
                                                        onClick={()=>editItem(  data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteDinnerItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allDinnerItems.filter(item=>item.section == 'appetizers' && item.sequence).length && 
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
                                
                                </>
                            }


















































                            {displaySection == 'entrées' && 
                                <>
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'entrées').length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>entrée</div>}
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'entrées').length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>entrées</div>}

                                {allDinnerItems.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
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
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            <div className='allergies-complete'>{data.allergiesComplete}</div>
                                            {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                            
                                            <div style={{marginTop:'5px'}}>
                                                <span   className='btn archive-btn'
                                                        onClick={()=>archiveItem(data._id)}>ARCHIVE</span>
                                                <span   className='btn edit-btn'
                                                        onClick={()=>editItem(  data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteDinnerItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allDinnerItems.filter(item=>item.section == 'entrées' && item.sequence).length && 
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
                                
                                </>
                            }

















































                            {displaySection == 'sides' && 
                                <>
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'sides').length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>side</div>}
                                {allDinnerItems.filter(item=>item.sequence && item.section == 'sides').length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>sides</div>}

                                {allDinnerItems.filter(item=>item.sequence && item.section == 'sides').map(data=>{
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
                                            <div>
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                            </div>
                                            {data.descriptionIntro && <span style={{fontStyle:'italic'}}>{data.descriptionIntro};</span>}
                                            <span> {data.description}</span>
                                            {data.price.length < 3 ? 
                                                <span className='price'> &nbsp;{data.price}</span> : 
                                                <div className='price'>{data.price}</div> }
                                            {data.postDescription && <div style={{fontStyle:'italic'}}>{data.postDescription}</div>}
                                            <div className='allergies-complete'>{data.allergiesComplete}</div>
                                            {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                            
                                            <div style={{marginTop:'5px'}}>
                                                <span   className='btn archive-btn'
                                                        onClick={()=>archiveItem(data._id)}>ARCHIVE</span>
                                                <span   className='btn edit-btn'
                                                        onClick={()=>editItem(  data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteDinnerItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allDinnerItems.filter(item=>item.section == 'sides' && item.sequence).length && 
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
                                
                                </>
                            }





















                        </div>
                      


                    <form   action={editMode ? updateItem : createItem} 
                            id='specials-item-form'
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update dinner item' : 'create new dinner item'}

                        </h2>
                        <br/>

                        <input  type='hidden' 
                                name='id' 
                                id='item-id' />

                        <input  type='hidden'
                                name='menu' 
                                value='dinner' />
                        
                       
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
                                                <option>cured meats</option>
                                                <option>appetizers</option>
                                                <option>entrées</option>
                                                <option>sides</option>
                                            </select>

                                            <br/><br/>
                                        </label>

                        }             
                        
                        

                        <label>
                            name <span className='required-field'> *required</span><br/>
                            <input  type='text' 
                                    name='name' 
                                    id='name'
                                    maxLength='100'
                                    required
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - abbreviated<br/>
                            <input  type='text' 
                                    name='allergies-abbreviated' 
                                    id='allergies-abbreviated'
                                    maxLength='100'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete<br/>
                            <input  type='text'
                                    id='allergies-complete'
                                    maxLength='100'
                                    name='allergies-complete' 
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>

                        <label>
                            description-intro<br/>
                            <input  type='text'
                                    name='description-intro'
                                    maxLength='100'
                                    id='description-intro'
                                    style={{width:'100%'}} />
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
                            extra description<br/>
                            <input  type='text'
                                    id='post-description'
                                    maxLength='100'
                                    placeholder='(please allow 40 minutes cooking time)'
                                    style={{width:'100%'}}
                                    name='post-description' />
                        
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
                        <div id='specials-form-buttons' style={{display:'flex',justifyContent:'space-around'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            color:'black',
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = {editMode ? 'update dinner item' : 'create new dinner item'} />
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
                                                        padding:'10px 10px',
                                                        fontSize:'20px'
                                                    }}>
                                            cancel
                                        </div>
                            }
                        </div>

                    </form>   

            



                    <form   action={updateTastingMenu} 
                            id='tasting-menu-form'
                            className='specials-form'
                            style={{background:`lightblue`}}>
                        <h2 style={{textAlign:'center'}}>
                            tasting menu prices
                        </h2>
                        <br/>

                        tasting menu:<br/> 
                        ${tastingMenuPrices.tastingMenuPrice}/person &rarr; 
                        $<input type='number'
                                min='1'
                                max='999' 
                                maxLength='100'
                                name='tasting-menu-price'
                                style={{width:'6ch'}} />/person
                        <br/><br/>

                        wine pairing:<br/> 
                        &nbsp; ${tastingMenuPrices.winePairingPrice}/person &rarr; 
                        $<input type='number'
                                min='1'
                                max='999'
                                maxLength='100'
                                name='wine-pairing-price'
                                style={{width:'6ch'}} />/person
                        <br/><br/>

                        <div style={{display:'flex', justifyContent:'center'}}>
                            <input  type='submit' 
                                    style={{padding:'10px 10px',
                                            cursor:'pointer',
                                            borderRadius:'10px',
                                            border:'2px solid black',
                                            color:'black',
                                            background:'lightgrey',
                                            fontSize:'20px'}}
                                    value = 'update' />                        
                        </div>
                        
                    </form>
















                        {allDinnerItems.filter(item=>item.sequence == 0).length != 0 &&
                            <>
                                <div className='specials-update-menu' style={{minHeight:'auto'}}>
                                    <div>
                                        <div className='specials-h1'>archives</div>
                                    </div>

                                    <br/><br/>

                                    {allDinnerItems.filter(item=>item.sequence == 0).map(data=>{
                                        return(
                                            <div key={data._id} className='special'>  
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
                                                            onClick={()=>unarchiveItem(data._id)}>
                                                        UNarchive</span>
                                                    <span   className='btn delete-btn'
                                                            onClick={()=>deleteDinnerItem(data._id)}>DELETE</span>
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