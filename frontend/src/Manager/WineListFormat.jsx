import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import './WineListFormat.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function WineListFormat(){

    const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([])
    const [beer, setBeer] = useState([])
    const [sherries, setSherries] = useState([])
    const [drinks, setDrinks] = useState([])
    const [sangrias, setSangrias] = useState([])
    const [winesBTG, setWinesBTG] = useState([])
    const [sparkling, setSparkling] = useState([])
    const [rosé, setRosé] = useState([])
    const [white, setWhite] = useState([])
    const [whiteCategories, setWhiteCategories] = useState([])
    const [red, setRed] = useState([])
    const [redCategories, setRedCategories] = useState([])
    const [spirits, setSpirits] = useState([])
    const [spiritCategories, setSpiritCategories] = useState([])

    const [frontView, setFrontView] = useState(true)
    const [page1, setPage1] =useState(true)
    const [winelistFormatting, setWinelistFormatting] = useState([])
    const [pageMargin, setPageMargin] = useState(50)
    const [winelistItemMarginsTopBottom, setWinelistItemMarginsTopBottom] = useState(0)
    useEffect(()=>{ 
                getWinelistFormatting()
                getWinesBTG()
                getSparkling()
                getRosé()
                getWhite()
                getWhiteCategories()
                getRed()
                getRedCategories()
                getSpirits()
                getSpiritCategories()
                getSangrias()
                getNonAlcoholicDrinks()
                getBeer()
                getDrinks()
                getSherries()
    },[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

    function getSherries(){
        fetch(`${BASE_URL}/api/sherries`)
            .then(res=>res.json())
            .then(json=>setSherries(json))
            .catch(err=>console.log(err))
    }

    function getDrinks(){
        try{
            fetch(`${BASE_URL}/api/drinks`)
                .then(res=>res.json())
                .then(json=>setDrinks(json))
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getBeer(){
        fetch(`${BASE_URL}/api/beer`)
            .then(res=>res.json())
            .then(json=>setBeer(json))
            .catch(err=>console.log(err))
    }

    function getNonAlcoholicDrinks(){
        fetch(`${BASE_URL}/api/non-alcoholic-drinks`)
            .then(res=>res.json())
            .then(json=>setNonAlcoholicDrinks(json))
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

    function getRed(){
        try{
            fetch(`${BASE_URL}/api/red`)
                .then(res=>res.json())
                .then(json=>{
                    setRed(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getRedCategories(){
        try{
            fetch(`${BASE_URL}/api/red-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let redCategories = new Set()
                    json.forEach(wine=>redCategories.add(wine.category))
                    setRedCategories([...redCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getWhite(){
        try{
            fetch(`${BASE_URL}/api/white`)
                .then(res=>res.json())
                .then(json=>{
                    setWhite(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getWhiteCategories(){
        try{
            fetch(`${BASE_URL}/api/white-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let whiteCategories = new Set()
                    json.forEach(drink=>whiteCategories.add(drink.category))
                    setWhiteCategories([...whiteCategories])
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
                    
    function getSpirits(){
        try{
            fetch(`${BASE_URL}/api/spirits`)
                .then(res=>res.json())
                .then(json=>{
                    setSpirits(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }
    
    function getSpiritCategories(){
        try{
            fetch(`${BASE_URL}/api/spirit-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let spiritCategories = new Set()
                    json.forEach(drink=>spiritCategories.add(drink.category))
                    setSpiritCategories([...spiritCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function getRosé(){
        fetch(`${BASE_URL}/api/rose`)
            .then(res=>res.json())
            .then(json=>setRosé(json))
            .catch(err=>console.log(err))
    }

    function getSparkling(){
        fetch(`${BASE_URL}/api/sparkling`)
            .then(res=>res.json())
            .then(json=>setSparkling(json))
            .catch(err=>console.log(err))
    }

    function getWinesBTG(){
        fetch(`${BASE_URL}/api/wines-btg`)
            .then(res=>res.json())
            .then(json=>setWinesBTG(json))
            .catch(err=>console.log(err))
    }



    function getWinelistFormatting(){
        try{
            
            fetch(`${BASE_URL}/api/formats/winelist`)
                .then(res=>res.json())
                .then(json=>{
                    setWinelistFormatting(json[0])
                    
                    console.log(json[0].pageMargin)
                    setPageMargin(json[0].pageMargin)
                    setWinelistItemMarginsTopBottom(json[0].winelistItemMarginsTopBottom)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function decreaseWinelistItemMarginsTopBottom(){
        if (winelistItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/winelist/decreaseWinelistItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getWinelistFormatting())
            .catch(err=>console.log(err))
    }

    function increaseWinelistItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/winelist/increaseWinelistItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getWinelistFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMargin(){
        if (pageMargin <= 0) return
        fetch(`${BASE_URL}/api/formats/winelist/decreasePageMargin`,{method:'PUT'})
        .then(()=>getWinelistFormatting())
        .catch(err=>console.log(err))
    }

    function increasePageMargin(){
        fetch(`${BASE_URL}/api/formats/winelist/increasePageMargin`,{method:'PUT'})
            .then(()=>getWinelistFormatting())
            .catch(err=>console.log(err))
    }


    function toggleFrontView(){
        setFrontView(prev=>!prev)
    }

    function togglePage1(){
        setPage1(prev=>!prev)
    }

    return(
        <>
            <div    className='manager-page-wrapper' 
                    style={{border:'1px solid red',
                            // zoom:'0.75'
                            // color:'red'
                            }}>
                <ManagerNavbar page='wine-list' />
                    <div style={{textAlign:'center',fontSize:'30px'}}>menu manager</div>
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; format</div>
                    <div className='main-menu'>





                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            fontFamily:'FuturaLight',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span>page 1</span>
                                    {page1  ?   <span><FaToggleOff  style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={togglePage1}/></span> 
                                                
                                                : 
                                                    <span><FaToggleOn   style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={togglePage1}/></span>    
                                    }  
                                <span>page 2</span>
                            </div>

                            <div style={{   textAlign:'center',
                                            display:'flex',
                                            gap:'10px',
                                            justifyContent:'center',
                                            border:'1px solid green',
                                            alignItems:'center'}}>
                                <span>front</span>
                                    {frontView  ?   <span><FaToggleOff  style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFrontView}/></span> 
                                                
                                                : 
                                                    <span><FaToggleOn   style={{cursor:'pointer',fontSize:'30px'}}
                                                                        onClick={toggleFrontView}/></span>    
                                    }  
                                <span>back</span>
                            </div>

                                                       
                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreaseWinelistItemMarginsTopBottom} /></span>
                                        <span>menu item margins<br/>top & bottom &#8597;</span>
                                        
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increaseWinelistItemMarginsTopBottom} /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={decreasePageMargin} /></span>
                                        <span>page margin</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={increasePageMargin} /></span>
                                    </div>
                                
                            <br/>
























                        {page1 ? 
                                <>
                            {frontView ?                            
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                border:'1px solid black',
                                                padding:`${pageMargin}px`,
                                                background:'white',
                                                // backgroundSize:'14in 8.5in',
                                                // backgroundPosition:'-51px -54px',
                                                // backgroundImage:'url("./scan-wine-list-p1-front.jpg")'
                                                }}>


                                    
                                    <div    className='winelist-h1'
                                            style={{margin:'0',fontSize:'27px'}}
                                    >
                                        wine by the glass
                                    </div>
                                   
                                    <div    className='winelist-h2'
                                            style={{margin:'0'}}>
                                        Cava
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Cava').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}

                                    <div className='winelist-h2'
                                            style={{margin:'0'}}
                                    >
                                        White
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'White').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}

                                    <div className='winelist-h2'
                                            style={{margin:'0'}}
                                    >
                                        Rosé
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Rosé').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}

                                    <div className='winelist-h2'
                                            style={{margin:'0'}}
                                    >
                                        Red
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Red').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}






















                            
                                    <div className='winelist-h1' >cava & champagne</div>

                                    {sparkling.map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{breakInside:'avoid-column'}} 
                                                    className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}












                                    <div className='winelist-h1'>rosé</div>

                                    {rosé.map(data=>{
                                        return(
                                            <div    key={data._id}
                                                    style={{breakInside:'avoid-column'}} 
                                                    className='special'>                            
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}</span>
                                                <span className='vintage'>, {data.vintage}, </span>
                                                <span className='description'> {data.description} /</span>
                                                <span className='price'> {data.price}</span>
                                            </div>
                                        )
                                    })}










                                    <div className='winelist-h1'>white</div>


                                    {whiteCategories.map(x=>{
                                        return(
                                            <div key={x}>
                                                <div    className='winelist-h2'
                                                        style={{margin:'0'}}>
                                                    {x}
                                                </div>
                                                {white.filter(item=>item.category == x).map(data=>{
                                                    return(
                                                            <div    key={data._id}
                                                                    style={{breakInside:'avoid-column'}}
                                                                    className='special'>                            
                                                                <span className='grapes'>{data.grapes}, </span>
                                                                <span className='name'>{data.name}</span>
                                                                <span className='vintage'>, {data.vintage}, </span>
                                                                <span className='description'> {data.description} /</span>
                                                                <span className='price'> {data.price}</span>
                                                                {data.halfBottlePrice && <div className='half-bottle'>1/2 btl. / {data.halfBottlePrice}</div>}
                                                            </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}

















                                    <div className='winelist-h1'>red</div>


                                    {redCategories.map(x=>{
                                        return(
                                            <div key={x}>
                                                <div    className='winelist-h2'
                                                        style={{margin:'0'}}>
                                                    {x}
                                                </div>
                                                {red.filter(item=>item.category == x).map(data=>{
                                                    return(
                                                            <div    key={data._id}
                                                                    style={{breakInside:'avoid-column'}}
                                                                    className='special'>                            
                                                                <span className='grapes'>{data.grapes}, </span>
                                                                <span className='name'>{data.name}</span>
                                                                <span className='vintage'>, {data.vintage}, </span>
                                                                <span className='description'> {data.description} /</span>
                                                                <span className='price'> {data.price}</span>
                                                                {data.halfBottlePrice && <div className='half-bottle'>1/2 btl. / {data.halfBottlePrice}</div>}
                                                            </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}












                                </div>
                            :
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                background:'white',
                                                padding:`${pageMargin}px`,
                                                border:'1px solid black'}} >
                                    
                                    

                                                                <div className='winelist-h1' style={{marginBottom:'0'}}>sangría</div>
                                                               
                                    
                                                                {sangrias.map(data=>{
                                                                    return(
                                                                        <div key={data._id} className='special'>
                                                                            <span className='name'>{data.name}</span>
                                                                            <span className='description'>, {data.description} (glass/pitcher) {data.glassPrice} / {data.pitcherPrice}</span>
                                                                        </div>
                                                                    )
                                                                })}
                                    
                                    















                            <div className='winelist-h1' style={{marginBottom:'0'}}>non-alcoholic</div>
                           
                            {nonAlcoholicDrinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description}</span>
                                        <span className='price'> / {data.price}</span>                                         
                                    </div>
                                )
                            })}




















                        <div className='winelist-h1' style={{marginBottom:'0'}}>beer</div>
            
                            {beer.filter(item=>item.section == 'DRAFT').length != 0 && 
                                <div className='winelist-h2'
                                        style={{margin:'0'}}>
                                    DRAFT
                                </div>
                            }
                            {beer.filter(item=>item.section == 'DRAFT').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description}</span>
                                        <span className='price'> / {data.price}</span> 
                                    </div>
                                )
                            })}










                            {beer.filter(item=>item.section == 'CAN').length != 0 && 
                                <div className='winelist-h2'
                                        style={{margin:'0'}}>
                                    CAN
                                </div>
                            }
                            {beer.filter(item=>item.section == 'CAN').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description}</span>
                                        <span className='price'> / {data.price}</span> 
                                    </div>
                                )
                            })}











                            {beer.filter(item=>item.section == 'BOTTLE').length != 0 && 
                                <div className='winelist-h2'
                                        style={{margin:'0'}}>
                                    BOTTLE
                                </div>
                            }
                            {beer.filter(item=>item.section == 'BOTTLE').map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description}</span>
                                        <span className='price'> / {data.price}</span> 
                                    </div>
                                )
                            })}





















                            <div className='winelist-h1' style={{marginBottom:'0'}}>craft drinks</div>

                            {drinks.map(data=>{
                                return(
                                    <div key={data._id} className='special'>
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description} / {data.price}</span>
                                    </div>
                                )
                            })}




















                            <div className='winelist-h1' style={{marginBottom:'0'}}>
                                Jerez, Sanlúcar de Barrameda
                            </div>
                            
                            {sherries.map(data=>{
                                return(
                                    <div key={data._id} className='special'>                                        
                                        <span className='grapes'>{data.grapes}, </span>
                                        <span className='name'>{data.name}</span>
                                        <span className='description'>, {data.description}</span>
                                        <span className='price'> / {data.price}</span> 

                                    </div>
                                )
                            })}







                                </div>
                            }
                                </>
                                :
                                <>
                                {
                            frontView ?                            
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                padding:`${pageMargin}px`,
                                                border:'1px solid black',
                                                background:'white'}}>


                                    
                                    

                                    {spiritCategories.map(x=>{
                                        return(
                                            <div key={x} style={{breakInside:'avoid-column'}}>
                                                <div className='winelist-h1' style={{marginBottom:'0'}}>
                                                    {x}
                                                </div>

                                                {spirits.filter(item=>item.category == x).map(data=>{
                                                    return(
                                                        <div key={data.name}>
                                                            {data.name} / {data.price.toString().includes('.') ? data.price.toFixed(2) : data.price}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                    

                                </div>
                            :
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                background:'white',
                                                padding:`${pageMargin}px`,
                                                border:'1px solid black'}}    
                                        
                                >
                                    p2 back<br/>
                                    amaro / beer-cocktails-wines-spirits
                                </div>
                                }
                                </>
                        }



                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}