import {useState, useEffect} from 'react'
import './index.css'
import './QRdessert.css'
import { AiTwotoneCloseCircle } from "react-icons/ai";


export default function QRdessert(){

    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [lastCoffeeSequenceLine1, setLastCoffeeSequenceLine1] = useState(1)    
    const [allDesserts, setAllDesserts] = useState([])
    useEffect(()=>{
        getCoffees()
        getDesserts()
        getTeaPrice()
        getTeas()
    },[])
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

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

    function getTeaPrice(){
        fetch(`${BASE_URL}/api/teas/price`)
            .then(res=>res.json())
            .then(json=>setTeaPrice(json))
            .catch(err=>console.log(err))
    }

    function getCoffees(){
        try{
            let coffeeArray = []
            let line1 = []
            let line2 = []
            let midpoint
            let finalCoffeeSequenceLine1
            let midpointCoffeeCharsLine1 = []
            let midpointCoffeeCharsLine2 = []
            fetch(`${BASE_URL}/api/coffees`)
                .then(res=>res.json())
                .then(json=>{
                    setAllCoffees(json)
                    json.forEach(coffee=>{
                                    const coffeeName = coffee.name.split('')
                                    const coffeePrice = coffee.price.split('')
                                    for (let i=0;i<coffeeName.length;i++){
                                        coffeeArray.push(coffee.sequence)
                                    }
                                    for (let i=0;i<coffeePrice.length;i++){
                                        coffeeArray.push(coffee.sequence)
                                    }
                                })
                    midpoint = Math.floor(coffeeArray.length/2)
                    finalCoffeeSequenceLine1 = coffeeArray[midpoint]
                    for (let i=0;i<=midpoint;i++){
                        line1.push(coffeeArray[i])
                    }
                    for (let i=midpoint+1;i<coffeeArray.length;i++){
                        line2.push(coffeeArray[i])
                    }
                    for(let i=0;i<line1.length;i++){
                        if (line1[i] == finalCoffeeSequenceLine1) midpointCoffeeCharsLine1.push(finalCoffeeSequenceLine1)
                    }
                    for(let i=0;i<line2.length;i++){
                        if (line2[i] == finalCoffeeSequenceLine1) midpointCoffeeCharsLine2.push(finalCoffeeSequenceLine1)
                    }
                    
                    if(midpointCoffeeCharsLine1 < midpointCoffeeCharsLine2) finalCoffeeSequenceLine1 = finalCoffeeSequenceLine1 - 1
                    setLastCoffeeSequenceLine1(finalCoffeeSequenceLine1)
                    })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getDesserts(){
        try{
            fetch(`${BASE_URL}/api/desserts`)
                .then(res=>res.json())
                .then(json=>setAllDesserts(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }



    function showModal(pic,name,price,description,allergiesComplete){
        if(!pic) return
        document.querySelector('.modal').style.display = 'grid'
        document.querySelector('.modal-image').src = pic
        document.querySelector('.modal-name').innerHTML = name
        if (price.includes('/')){
            document.querySelector('.modal-price').innerHTML = `${price.split('/')[0].trim()}<br/>${price.split('/')[1].trim()}`
        }else{
            document.querySelector('.modal-price').innerHTML = price
        }
        document.querySelector('.modal-description').innerHTML = description   
        document.querySelector('.modal-allergies-complete').innerHTML = allergiesComplete    
    }

    function closeModal(){
        document.querySelector('.modal-image').src = ''
        document.querySelector('.modal-name').innerHTML = ''
        document.querySelector('.modal-price').innerHTML = ''
        document.querySelector('.modal-description').innerHTML = ''
        document.querySelector('.modal').style.display = 'none'
        document.querySelector('.modal-allergies-complete').innerHTML = ''
    }

    return(
        <div style={{position:'relative'}}>{/* wrapper */}
                <div className='modal' style={{ position:'fixed',
                                                    inset:'0',
                                                    height:'100vh',
                                                    width:'100%',
                                                    fontFamily:'FuturaLight',
                                                    zIndex:'3000',
                                                    background:'#888888ee',
                                                    color:'black',
                                                    display:'none',
                                                    placeContent:'center'
                }}>
                        <AiTwotoneCloseCircle   size='70' 
                                                onClick={closeModal}
                                                style={{position:'fixed',
                                                        cursor:'pointer',
                                                        top:'5px',
                                                        right:'5px'}} />
                        <div className='modal-content'>
                            <figure style={{display:'table'}}>
                                <img className='modal-image' style={{maxHeight:'50vh',maxWidth:'90vw',borderRadius:'25px'}} />
                                <figcaption style={{display:'table-caption',padding:'10px',captionSide:'bottom',borderRadius:'25px',background:'#ccc'}}>
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <span className='modal-name' style={{fontWeight:'900'}}></span>
                                        <span className='modal-price'></span>
                                    </div>
                                    <span className='modal-description'></span>
                                    <div className='modal-allergies-complete' style={{color:'red'}}></div>
                                </figcaption>
                            </figure>
                        </div>{/* .modal-content */}
                </div>{/* .modal */}



















            <div style={{width:'100%',minHeight:'100vh',display:'grid',placeContent:'center'}}>
                <div    id='qr-specials' 
                        style={{width:'5.5in',
                                padding:'20px',
                                minHeight:'8.5in',
                                border:'1px solid black'}}>


                                        <span   className='logo dessert-menu-front-content' 
                                                style={{
                                                        color:'black',
                                                        // padding:`0 ${dinnerItemMarginsLeftRight}px`,
                                                        display:'block',
                                                        cursor:'default',
                                                        fontSize:'57px'}}>olea</span>
                                        <hr style={{marginBottom:`5px`}} />





                                                        {allDesserts.map(data=>{
                                                            return (
                                                                <div    key={data._id}
                                                                        onClick={()=>showModal( data.cloudinary_secure_URL,
                                                                                                data.name,
                                                                                                data.price,
                                                                                                data.description,
                                                                                                data.allergiesComplete
                                                                        )}                                                                                                                                    
                                                                        // style={{margin:`${dessertItemMarginsTopBottom}px 0`}} 
                                                                        className='dessert dessert-item'>
                                                                    <span className='dessert-name'>{data.name}</span>
                                                                    {data.allergiesAbbreviated &&   <span className='dessert-allergies'>
                                                                                                        &nbsp;({data.allergiesAbbreviated})
                                                                                                    </span>}
                                                                    <span className='dessert-description'>&nbsp;{data.description}</span>
                                                                    <span className='dessert-price'>&nbsp; &nbsp; {data.price}</span>
                                                                    
                                                                </div>
                                                            )
                                                        })}
                                                        









                                            {
                                                (allCoffees.length > 0) && <>
                                                    <div className='dessert-item'>                                    
                                                        <span className='dessert-menu-heading'>
                                                            coffee
                                                        </span>
                                                        &nbsp;
                                                        <span className='dessert-price'>
                                                            (decaffeinated available)
                                                        </span><br/>


                                                                                    {allCoffees.map(data=>{
                                                                                        return(
                                                                                            <span key={data._id}>
                                                                                                {data.sequence <= lastCoffeeSequenceLine1 && 
                                                                                                
                                                                                                <span>
                                                                                                    <span className='dessert-description'>{data.name} </span> 
                                                                                                    <span className='dessert-price'>{data.price}</span> 
                                                                                                        {data.sequence != allCoffees.length
                                                                                                            && ' / '
                                                                                                        }
                                                                                                    
                                                                                                </span>
                                                                                                }
                                                                                            </span>
                                                                                        )
                                                                                    })}<br/>
                                                                                    {allCoffees.map(data=>{
                                                                                        return(
                                                                                            <span key={data._id}>
                                                                                                {data.sequence > lastCoffeeSequenceLine1 && 
                                                                                                
                                                                                                <span>
                                                                                                    <span className='dessert-description'>{data.name} </span> 
                                                                                                    <span className='dessert-price'>{data.price}</span> 
                                                                                                        {data.sequence != allCoffees.length
                                                                                                            && ' / '
                                                                                                        }
                                                                                                    
                                                                                                </span>
                                                                                                }
                                                                                            </span>
                                                                                        )
                                                                                    })}<br/>

                                                    </div>
                                                
                                                
                                                </> 
                                                
                                            }

                                            <br/>
                                            <div className='dessert-item'>                                    
                                                <span className='dessert-menu-heading'>
                                                    organic-artisan whole leaf tea
                                                </span>
                                                &nbsp;
                                                <span className='dessert-price'>
                                                    (pouch)
                                                </span>
                                                <span className='dessert-price'>
                                                    {teaPrice ? ` ${teaPrice}` : ''}
                                                </span>

                                            
                                            
                                                <br/>
                                            
                                            
                                                
                                                <span   className='dessert-price'
                                                        style={{fontStyle:'normal'}}>
                                                    black &nbsp;
                                                </span>
                                                                            {allTeas.filter(item=>item.type == 'black').map(data=>{
                                                                                return(
                                                                                    <span key={data._id}>
                                                                                        <span className='tea-name'>{data.name} 
                                                                                            {data.sequence != allTeas.filter(item=>item.type == 'black').length
                                                                                                && ', '
                                                                                            }
                                                                                        </span>
                                                                                    </span>
                                                                                )
                                                                            })}
                                                
                                                <br/>
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                <span   className='dessert-price'
                                                        style={{fontStyle:'normal'}}>
                                                    green &nbsp;
                                                </span>
                                                                            {allTeas.filter(item=>item.type == 'green').map(data=>{
                                                                                return(
                                                                                    <span key={data._id}>
                                                                                        <span className='tea-name'>{data.name} 
                                                                                            {data.sequence != allTeas.filter(item=>item.type == 'green').length
                                                                                                && ', '
                                                                                            }
                                                                                        </span>
                                                                                    </span>
                                                                                )
                                                                            })}
                                            
                                            
                                            </div>                                    


                                            <span className='dessert-price'>
                                                <span style={{fontStyle:'normal'}}>herbal</span>
                                                <span>(caffeine free)</span>
                                                &nbsp;
                                            </span>
                                                                        {allTeas.filter(item=>item.type == 'herbal').map(data=>{
                                                                            return(
                                                                                <span key={data._id}>
                                                                                    <span className='tea-name'>{data.name} 
                                                                                        {data.sequence != allTeas.filter(item=>item.type == 'herbal').length
                                                                                            && ', '
                                                                                        }
                                                                                    </span>
                                                                                </span>
                                                                            )
                                                                        })}
                                        
                                            <br/><br/><br/><br/>


                                    <div className='dessert-footer'>
                                        <div className='dessert-menu-front-content'>
                                            jessica delgado, pastry chef
                                        </div>
                                        <hr style={{marginTop:'5px'}}/>
                                        <div className='dessert-menu-front-content'>
                                            please alert your server if you have any special dietary requirements<br/>
                                            <span style={{fontStyle:'italic'}}>gl (gluten), d (dairy), n (nuts)</span>
                                        </div>
                                    </div>




                    
                </div>
                
            </div>
        {/* wrapper */}
        </div>
    )
}