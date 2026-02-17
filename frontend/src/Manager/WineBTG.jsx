import {Link} from 'react-router'
import './Manager.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function WineBTG(){
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















                        <div className='specials-h2 specials-update-heading'>cava</div>
                        <div className='specials-h2 specials-update-heading'>white</div>
                        <div className='specials-h2 specials-update-heading'>rosé</div>
                        <div className='specials-h2 specials-update-heading'>red</div>

                            {allSpecials.filter(item=>item.sequence && item.section == 'appetizers').map(data=>{
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
                                        {data.allergiesAbbreviated && 
                                            <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                        <span> {data.description}</span>
                                        {data.price.length < 3 ? 
                                            <span className='price'> &nbsp;{data.price}</span> : 
                                            <div className='price'>{data.price}</div> }
                                        <div className='allergies-complete'>{data.allergiesComplete}</div>
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn archive-btn'
                                                    onClick={()=>archiveSpecial(data._id)}>ARCHIVE</span>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSpecial(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSpecial(data._id)}>DELETE</span>

                                        </div>

                                        {data.sequence != allSpecials.filter(item=>item.section == 'appetizers' && item.sequence).length && 
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



















                            {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length == 1 && 
                                <div className='specials-h2 specials-update-heading'>entrée</div>}
                            {allSpecials.filter(item=>item.sequence && item.section == 'entrées').length > 1 && 
                                <div className='specials-h2 specials-update-heading'>entrées</div>}

                            {allSpecials.filter(item=>item.sequence && item.section == 'entrées').map(data=>{
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
                                        {data.allergiesAbbreviated && 
                                            <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                        <span> {data.description}</span>
                                        {data.price.length < 3 ? 
                                            <span className='price'> &nbsp;{data.price}</span> : 
                                            <div className='price'>{data.price}</div> }
                                        <div className='allergies-complete'>{data.allergiesComplete}</div>                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn archive-btn'
                                                    onClick={()=>archiveSpecial(data._id)}>ARCHIVE</span>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSpecial(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSpecial(data._id)}>DELETE</span>                                                                                
                                        </div>     

                                        {data.sequence != allSpecials.filter(item=>item.section == 'entrées' && item.sequence).length && 
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


















                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length == 1 && 
                                <div className='specials-h2 specials-update-heading'>dessert</div>}
                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').length > 1 && 
                                <div className='specials-h2 specials-update-heading'>desserts</div>}

                            {allSpecials.filter(item=>item.sequence && item.section == 'desserts').map(data=>{
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
                                        {data.allergiesAbbreviated && 
                                            <span className='allergies-abbreviated'> ({data.allergiesAbbreviated})</span>}
                                        <span> {data.description}</span>
                                        {data.price.length < 3 ? 
                                            <span className='price'> &nbsp;{data.price}</span> : 
                                            <div className='price'>{data.price}</div> }
                                        <div className='allergies-complete'>{data.allergiesComplete}</div>                                            
                                        <div style={{marginTop:'5px'}}>
                                            <span   className='btn archive-btn'
                                                    onClick={()=>archiveSpecial(data._id)}>ARCHIVE</span>
                                            <span   className='btn edit-btn'
                                                    onClick={()=>editSpecial(   data._id,
                                                                                data.section,
                                                                                data.name,
                                                                                data.allergiesAbbreviated,
                                                                                data.allergiesComplete,
                                                                                data.description,
                                                                                data.price)}>EDIT</span>                                                    
                                            <span   className='btn delete-btn'
                                                    onClick={()=>deleteSpecial(data._id)}>DELETE</span>
                                        </div>

                                        {data.sequence != allSpecials.filter(item=>item.section == 'desserts' && item.sequence).length && 
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
                      


                    <form   action={editMode ? updateSpecial : createNewSpecial} 
                            className='specials-form'
                            style={{background:`${editMode ? 'lightblue' : 'lightgreen'}`}}>
                        <h2 style={{textAlign:'center'}}>
                            {editMode ? 'update special' : 'create new special'}

                        </h2>
                        <br/>

                        <input type='hidden' name='id' id='special-id' />
                        <input  type='hidden'
                                name='menu' 
                                value='specials' />
                        
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

                                            <br/><br/>
                                        </label>

                        }             
                        
                        

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
                            allergies - abbreviated<br/>
                            <input  type='text' 
                                    name='allergies-abbreviated' 
                                    id='allergies-abbreviated'
                                    style={{width:'100%'}} />
                        </label>
                        <br/><br/>
                        <label>
                            allergies - complete<br/>
                            <input  type='text'
                                    id='allergies-complete'
                                    name='allergies-complete' 
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
                            price<br/>
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
                                    value = {editMode ? 'update special' : 'create new special'} />
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