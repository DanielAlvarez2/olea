import {Link} from 'react-router'
import {useState, useEffect} from 'react'
import './Manager.css'
import './Specials.css'
import './SpecialsMenuUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { FaCaretUp } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function MothersDayUpdate(){
    const [updatingMenu, setUpdatingMenu] = useState(false)
    const [updatingImage, setUpdatingImage] = useState(false)
    const [allAnnualEventsMenuItems, setAllAnnualEventsMenuItems] = useState([])
    const [annualEventPrice, setAnnualEventPrice] = useState(0)
    const [editMode, setEditMode] = useState(false)
    const [displaySection, setDisplaySection] = useState('appetizers')
    const [currentImage, setCurrentImage] = useState('')
    const [cloudinaryPublicID, setCloudinaryPublicID] = useState('')
    const [cloudinarySecureURL, setCloudinarySecureURL] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isNoWebsiteImageChecked, setIsNoWebsiteImageChecked] = useState(false)
    const [websiteImageURL, setWebsiteImageURL] = useState('')
    const [websiteImageID, setWebsiteImageID] = useState('')

    useEffect(()=>getAnnualEventsMenuItems(),[])
    useEffect(()=>getAnnualEventPrice(),[])
    useEffect(()=>getWebsiteImage(),[])

    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    const event = "Mother's Day"
    const event_url = 'mothers-day'

    function getWebsiteImage(){
        fetch(`${BASE_URL}/api/events/website-image/${event_url}`)
            .then(res=>res.json())
            .then(data=>{
                setWebsiteImageURL(data.cloudinary_secure_URL)
                setWebsiteImageID(data.cloudinaryPublicID)
            })
            .catch(err=>console.log(err))
    }

    async function createItem(formData){
        setUpdatingMenu(true)
        setTimeout(postItem,0)
        async function postItem(){
            await fetch(`${BASE_URL}/api/annual-events-menu-items`,{method:'POST',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            event: formData.get('event'),
                                                            section: formData.get('section'),
                                                            name: formData.get('name'),
                                                            allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                            allergiesComplete: formData.get('allergies-complete'),
                                                            description: formData.get('description'),
                                                            postDescription: formData.get('post-description'),
                                                            descriptionIntro: formData.get('description-intro'),
                                                            previewSource
                                                        })
            })
            .then(setUpdatingMenu(true))
            .then(()=>alert(`
                ${event}
                New Menu Item Created:
                - ${formData.get('name')}`))
            .then(()=>getAnnualEventsMenuItems())
            .then(()=>setUpdatingMenu(false))
            .catch(err=>console.log(err))
        }
    }

    async function updateItem(formData){
        setUpdatingMenu(true)
        setTimeout(putItem,0)
        async function putItem(){
            await fetch(`${BASE_URL}/api/annual-events-menu-items/${formData.get('id')}`,{ method:'PUT',
                                                                                    headers:{'Content-Type':'application/json'},
                                                                                    body: JSON.stringify({
                                                                                        name: formData.get('name'),
                                                                                        allergiesAbbreviated: formData.get('allergies-abbreviated'),
                                                                                        allergiesComplete: formData.get('allergies-complete'),
                                                                                        description: formData.get('description'),
                                                                                        postDescription: formData.get('post-description'),
                                                                                        // descriptionIntro: formData.get('description-intro'),
                                                                                        // price: formData.get('price'),
                                                                                        cloudinary_public_ID: formData.get('cloudinary_public_ID'),
                                                                                        cloudinary_secure_URL: formData.get('cloudinary_secure_URL'),
                                                                                        previewSource,
                                                                                        isChecked
                                                                                    })
            })
            .then(()=>alert(`
                Menu Item Updated:
                - ${formData.get('name')}`))
            .then(()=>setEditMode(false))
            .then(document.querySelector('#section-wrapper').style.display = 'none')
            .then(()=>getAnnualEventsMenuItems())
            .then(()=>setUpdatingMenu(false))
            .catch(err=>console.log(err))
        }
    }


    function getAnnualEventsMenuItems(){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items`)
                .then(res=>res.json())
                .then(json=>setAllAnnualEventsMenuItems(json))
                .then(clearForm())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getAnnualEventPrice(){
        try{
            fetch(`${BASE_URL}/api/annual-event-prices`)
                .then(res=>res.json())
                .then(json=>setAnnualEventPrice(json[0].MothersDay))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function deleteAnnualEventsMenuItem(id){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items/${id}`,{method:'DELETE'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getAnnualEventsMenuItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function archiveItem(id){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items/archive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getAnnualEventsMenuItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function unarchiveItem(id){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items/unarchive/${id}`,{method:'PUT'})
                .then(res=>res.json())
                .then(data=>alert(data))
                .then(()=>getAnnualEventsMenuItems())
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
                        // descriptionIntro,
                        description,
                        postDescription,
                        // price,
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
            // document.querySelector('#description-intro').value = descriptionIntro
            document.querySelector('#post-description').value = postDescription
            // document.querySelector('#price').value = price
        }catch(err){
            console.log(err)
        }
    }

    function moveUp(id){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items/move-up/${id}`,{method:'PUT'})
                .then(()=>getAnnualEventsMenuItems())
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function moveDown(id){
        try{
            fetch(`${BASE_URL}/api/annual-events-menu-items/move-down/${id}`,{method:'PUT'})
                .then(()=>getAnnualEventsMenuItems())
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
            // document.querySelector('#description-intro').value = ''
            document.querySelector('#post-description').value = ''
            // document.querySelector('#price').value = ''
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

    function updateAnnualEventPrice(formData){
        fetch(`${BASE_URL}/api/annual-events-prices`,{method:'PUT',
                                                            headers:{'Content-Type':'application/json'},
                                                            body: JSON.stringify({
                                                                annualEventName:formData.get('annual-event-name'),
                                                                annualEventPrice:formData.get('annual-event-price'),
                                                            })
        })
        .then(res=>res.json())
        .then(json=>setAnnualEventPrice(json[0].MothersDay))
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

    const [previewSource2, setPreviewSource2] = useState()
    function handleWebsiteImageFileInputChange(e){
        alert(`File Size: ${(e.target.files[0].size * 0.000001).toFixed(1)} Mb`)
        const file = e.target.files[0]
        previewFile2(file)
    }
    function previewFile2(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setPreviewSource2(reader.result)
        }
    }

    function updateWebsiteImage(formData){
        if (!previewSource2 && !isNoWebsiteImageChecked) return
        setUpdatingImage(true)
        fetch(`${BASE_URL}/api/events/website-image/${event_url}`,{  method:'PUT',
                                                        headers:{'Content-Type':'application/json'},
                                                        body: JSON.stringify({
                                                            event:formData.get('annual-event-name'),
                                                            cloudinary_public_ID:formData.get('cloudinary_public_ID'),
                                                            cloudinary_secure_URL:formData.get('cloudinary_secure_URL'),
                                                            previewSource2
                                                        })
        }) 
        .then(res=>res.json())
        .then(()=>{
            document.querySelector('#do-not-circle2').style.color = 'transparent'
            setIsNoWebsiteImageChecked(false)
            document.querySelector('#file-input-website-image').style.visibility = 'visible'
        })
        .then(()=>getWebsiteImage())
        .then(()=>setPreviewSource2(''))
        .then(()=>setUpdatingImage(false))
        .catch(err=>console.log(err))        
    }

    function toggleNoWebsiteImage(){
        !isNoWebsiteImageChecked && setPreviewSource2('')
        if(!isNoWebsiteImageChecked){
            document.querySelector('#website-image-file').value = ''
            document.querySelector('#file-input-website-image').style.visibility = 'hidden'
        }else{
            document.querySelector('#file-input-website-image').style.visibility = 'visible'
        }
        setIsNoWebsiteImageChecked(!isNoWebsiteImageChecked)
        document.querySelector('#do-not-circle2').style.color = isNoWebsiteImageChecked ? 'transparent' : 'red'
    }    

















    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar page='events' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>{event.toLowerCase()} &gt; update</div>



                        <div className='specials-update-menu' style={{minHeight:'auto'}}>
                            <div>
                                <div className='specials-h1' style={{marginBottom:'0'}}>{event.toLowerCase()} menu</div>
                            </div>

                            <br/>
                            section &nbsp; 
                                <select name='display-section' defaultValue={displaySection} onChange={handleChangeDisplaySection}>
                                    <option value='appetizers'>appetizers</option>
                                    <option value='entrées'>entrées</option>
                                    <option value='desserts'>desserts</option>
                                </select>






























































                            {displaySection == 'appetizers' && 
                                <>
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>appetizer</div>}
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>appetizers</div>}

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'appetizers' && item.event == event).map(data=>{
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
                                                                                // data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                // data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteAnnualEventsMenuItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allAnnualEventsMenuItems.filter(item=>item.section == 'appetizers' && item.sequence && item.event == event).length && 
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
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>entrée</div>}
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>entrées</div>}

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'entrées' && item.event == event).map(data=>{
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
                                                                                // data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                // data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteAnnualEventsMenuItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allAnnualEventsMenuItems.filter(item=>item.section == 'entrées' && item.sequence && item.event == event).length && 
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

















































                            {displaySection == 'desserts' && 
                                <>
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).length == 1 && 
                                    <div className='specials-h2 specials-update-heading'>dessert</div>}
                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).length > 1 && 
                                    <div className='specials-h2 specials-update-heading'>desserts</div>}

                                {allAnnualEventsMenuItems.filter(item=>item.sequence && item.section == 'desserts' && item.event == event).map(data=>{
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
                                                                                // data.descriptionIntro,
                                                                                data.description,
                                                                                data.postDescription,
                                                                                // data.price,
                                                                                data.cloudinary_public_ID,
                                                                                data.cloudinary_secure_URL                                                                                
                                                                                )}>EDIT</span>                                                    
                                                <span   className='btn delete-btn'
                                                        onClick={()=>deleteAnnualEventsMenuItem(data._id)}>DELETE</span>

                                            </div>

                                            {data.sequence != allAnnualEventsMenuItems.filter(item=>item.section == 'desserts' && item.sequence && item.event == event).length && 
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
                        
                        <h2 style={{textAlign:'center'}}>{event.toLowerCase()}</h2>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update menu item' : 'create new menu item'}

                        </h2>
                        <br/>

                        <input  type='hidden' 
                                name='id' 
                                id='item-id' />

                        <input  type='hidden'
                                name='event' 
                                value={event} />
                        
                       
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
                                                <option>appetizers</option>
                                                <option>entrées</option>
                                                <option>desserts</option>
                                            </select>
                                             <span className='required-field'> *required</span>
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
                            allergies - abbreviated &nbsp;ex: gl.d.n<br/>
                            <input  type='text' 
                                    name='allergies-abbreviated' 
                                    id='allergies-abbreviated'
                                    maxLength='100'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete &nbsp;ex: gluten, DAIRY, nuts<br/>
                            <input  type='text'
                                    id='allergies-complete'
                                    maxLength='100'
                                    name='allergies-complete' 
                                    style={{width:'100%'}} /><br/>
                            UPPER-CASE = CAN NOT BE REMOVED<br/>
                            lower-case = can be omitted
                        </label>
                        <br/><br/>

                        {/* <label>
                            description-intro<br/>
                            <input  type='text'
                                    name='description-intro'
                                    maxLength='100'
                                    id='description-intro'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/> */}

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
                            {!updatingMenu &&                             
                                <input  type='submit' 
                                        style={{padding:'10px 10px',
                                                cursor:'pointer',
                                                borderRadius:'10px',
                                                border:'2px solid black',
                                                color:'black',
                                                background:'lightgrey',
                                                fontSize:'20px'}}
                                        value = {editMode ? 'update menu item' : 'create new menu item'} />
                            }
                            {updatingMenu &&                             
                                <div style={{   padding:'10px',
                                                borderRadius:'10px',
                                                border:'2px solid black',
                                                color:'#000000',
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
                                                        padding:'10px 10px',
                                                        fontSize:'20px'
                                                    }}>
                                            cancel
                                        </div>
                            }
                        </div>

                    </form>   

            



                    <form   action={updateAnnualEventPrice} 
                            id='tasting-menu-form'
                            className='specials-form'
                            style={{background:`lightblue`}}>
                        <h2 style={{textAlign:'center'}}>
                            {event.toLowerCase()}
                        </h2>
                        <h2 style={{textAlign:'center'}}>
                            prix-fixe price
                        </h2>
                        <br/><br/>
                        <input  type='hidden'
                                name='annual-event-name'
                                value='MothersDay'
                        />
                        
                        <div style={{textAlign:'center'}}>
                            ${annualEventPrice}/person &rarr; 
                            $<input type='number'
                                    min='1'
                                    max='999' 
                                    maxLength='100'
                                    name='annual-event-price'
                                    style={{width:'6ch'}} />/person
                        </div>
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
                                    value = 'update price' />                        
                        </div>
                        
                    </form>














                    <form   
                            action={updateWebsiteImage} 
                            id='website-graphic'
                            className='specials-form'
                            style={{background:`orange`}}>

                        <h2 style={{textAlign:'center'}}>
                            {event.toLowerCase()}
                        </h2>
                        <h2 style={{textAlign:'center'}}>
                            website image
                        </h2>
                        
                        <br/><br/>
                        
                        <input  type='hidden'
                                name='annual-event-name'
                                value={event_url}
                        />

                        <input  type='hidden' 
                                name='cloudinary_secure_URL' 
                                value={websiteImageURL}
                                id='cloudinary_secure_URL' />

                        <input  type='hidden' 
                                value={websiteImageID}
                                name='cloudinary_public_ID' 
                                id='cloudinary_public_ID' />
                        
                        <div style={{position:'relative',display:'inline-block'}}>
                            <div style={{
                                            position:'absolute',
                                            width:'100%',
                                            height:'100%',
                                            display:'grid',
                                            placeContent:'center',
                                            top:'0',
                                            left:'0'
                            }}>
                                <MdDoNotDisturbAlt size='150' id='do-not-circle2' style={{color:'transparent'}} />
                            </div>
                            <img src={websiteImageURL ? websiteImageURL : '/no-image.jpg' } style={{maxWidth:'100%'}} />
                        </div>
                        
                        <br/>
                        <div style={{textAlign:'center'}}>current image</div>
                        <br/><br/>
                        
                        <div id='file-input-website-image'>
                            <label>
                                {websiteImageURL ? <div>replace image (optional)</div> : <div>add image (optional)</div>}
                                <input  name='website-image-file' 
                                        id='website-image-file'
                                        onChange={handleWebsiteImageFileInputChange}
                                        type='file' />
                            </label>
                        </div>
                        <br/><br/>
                                                
                        {previewSource2 &&  <>
                                                <img src={previewSource2} style={{maxWidth:'300px',maxHeight:'300px'}} /><br/><br/>
                                            </>}

                        {websiteImageURL &&                         
                                            <>                        
                                                <br/>
                                                <label style={{display:'flex',alignItems:'center'}}>
                                                    <input  type='checkbox' 
                                                            name='no-image'
                                                            checked={isNoWebsiteImageChecked}
                                                            onChange={toggleNoWebsiteImage}
                                                    /> 
                                                    <span>&nbsp;&nbsp;remove image / display NO image</span>
                                                </label>
                                                <br/>
                                            </>
                        }
                        
                        <br/><br/>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            {!updatingImage &&                             
                                <input  type='submit' 
                                        style={{padding:'10px 10px',
                                                cursor:'pointer',
                                                borderRadius:'10px',
                                                border:'2px solid black',
                                                color:'black',
                                                background:'lightgrey',
                                                fontSize:'20px'}}
                                        value = 'update image'/>
                            }
                            {updatingImage &&                             
                                <div style={{   padding:'10px',
                                                borderRadius:'10px',
                                                border:'2px solid black',
                                                color:'#000000',
                                                fontWeight:'900',
                                                background:'darkgrey',
                                                fontSize:'20px',
                                                cursor:'wait'}}>
                                                    <span className='flashing-text'>updating image</span>
                                </div>
                            }

                        </div>

                                                
                    </form>

                    <br/><br/><br/>











                        {allAnnualEventsMenuItems.filter(item=>item.sequence == 0).length != 0 &&
                            <>
                                <div className='specials-update-menu' style={{minHeight:'auto'}}>
                                    <div>
                                        <div className='specials-h1'>archives</div>
                                    </div>

                                    <br/><br/>

                                    {allAnnualEventsMenuItems.filter(item=>item.sequence == 0).map(data=>{
                                        return(
                                            <div key={data._id} className='special'>  
                                                <div>section: {data.section}</div>                                    
                                                <span className='name'>{data.name} </span>
                                                {data.allergiesAbbreviated && 
                                                    <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                                <span> {data.description}</span>
                                                <div className='allergies-complete'>{data.allergiesComplete}</div> 
                                                {data.cloudinary_secure_URL && <img src={data.cloudinary_secure_URL}
                                                                                style={{maxWidth:'100px',maxHeight:'100px'}}    
                                                                            />}                                            

                                                <div style={{marginTop:'5px'}}>
                                                    <span   className='btn unarchive-btn'
                                                            onClick={()=>unarchiveItem(data._id)}>
                                                        UNarchive</span>
                                                    <span   className='btn delete-btn'
                                                            onClick={()=>deleteAnnualEventsMenuItem(data._id)}>DELETE</span>
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