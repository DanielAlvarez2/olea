import {Link} from 'react-router'
import {useState,useEffect} from 'react'
import './Manager.css'
import './DessertMenuFormat.css'
import './DessertDrinksUpdate.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'
import { PiPlusCircleDuotone } from "react-icons/pi";
import { PiMinusCircleDuotone } from "react-icons/pi";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";



export default function WineBTBFormat(){

    const [winesBTG, setWinesBTG] = useState([])
    const [sparkling, setSparkling] = useState([])
    const [rosé, setRosé] = useState([])

    const [frontView, setFrontView] = useState(true)
    const [allDesserts, setAllDesserts] = useState([])
    const [allDessertDrinks, setAllDessertDrinks] = useState([])
    const [dessertDrinkCategories, setDessertDrinkCategories] = useState([])
    const [teaPrice, setTeaPrice] = useState('')
    const [allTeas, setAllTeas] = useState([])
    const [allCoffees, setAllCoffees] = useState([])
    const [lastCoffeeSequenceLine1, setLastCoffeeSequenceLine1] = useState(1)
    const [dessertsFormatting, setDessertsFormatting] = useState([])
    const [pageMarginRight, setPageMarginRight] = useState(0)
    const [pageMarginRightBack, setPageMarginRightBack] = useState(0)
    const [categoriesMarginTop, setCategoriesMarginTop] = useState(0)
    const [dessertItemMarginsTopBottom, setDessertItemMarginsTopBottom] = useState(0)
    useEffect(()=>{ 
                getDessertsFormatting()
                getDesserts()
                getDessertDrinks()
                getDessertDrinkCategories()
                getTeaPrice()
                getTeas()
                getCoffees()

                getWinesBTG()
                getSparkling()
                getRosé()
    },[])
    
    const BASE_URL = (process.env.NODE_ENV == 'production') ?
                    'https://olea-iwpz.onrender.com' : 
                    'http://localhost:1436'

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


    function getDessertDrinks(){
        try{
            fetch(`${BASE_URL}/api/dessert-drinks`)
                .then(res=>res.json())
                .then(json=>{
                    setAllDessertDrinks(json)
                    // console.log(json)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    }

    function getDessertDrinkCategories(){
        try{
            fetch(`${BASE_URL}/api/dessert-drink-categories`)
                .then(res=>res.json())
                .then(json=>{
                    let dessertDrinkCategories = new Set()
                    json.forEach(drink=>dessertDrinkCategories.add(drink.category))
                    setDessertDrinkCategories([...dessertDrinkCategories])
                    // console.log([...dessertDrinkCategories])
                })
                .catch(err=>console.log(err))

        }catch(err){
            console.log(err)
        }
    }

    function getDessertsFormatting(){
        try{
            fetch(`${BASE_URL}/api/formats/desserts`)
                .then(res=>res.json())
                .then(json=>{
                    setDessertsFormatting(json[0])
                    setPageMarginRight(json[0].pageMarginRight)
                    setPageMarginRightBack(json[0].pageMarginRightBack)
                    setCategoriesMarginTop(json[0].categoriesMarginTop)
                    setDessertItemMarginsTopBottom(json[0].dessertItemMarginsTopBottom)
                })
                .catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
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


    function getTeaPrice(){
        fetch(`${BASE_URL}/api/teas/price`)
            .then(res=>res.json())
            .then(json=>setTeaPrice(json))
            .catch(err=>console.log(err))
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

    function decreaseDessertItemMarginsTopBottom(){
        if (dessertItemMarginsTopBottom <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreaseDessertItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function decreaseCategoriesMarginTop(){
        if (categoriesMarginTop <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreaseCategoriesMarginTop`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increaseCategoriesMarginTop(){
        fetch(`${BASE_URL}/api/formats/desserts/increaseCategoriesMarginTop`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increaseDessertItemMarginsTopBottom(){
        fetch(`${BASE_URL}/api/formats/desserts/increaseDessertItemMarginsTopBottom`, {method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function decreasePageMarginRight(){
        if (pageMarginRight <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreasePageMarginRight`,{method:'PUT'})
        .then(()=>getDessertsFormatting())
        .catch(err=>console.log(err))
    }

    function decreasePageMarginRightBack(){
        if (pageMarginRightBack <= 0) return
        fetch(`${BASE_URL}/api/formats/desserts/decreasePageMarginRightBack`,{method:'PUT'})
        .then(()=>getDessertsFormatting())
        .catch(err=>console.log(err))
    }
    
    function increasePageMarginRight(){
        fetch(`${BASE_URL}/api/formats/desserts/increasePageMarginRight`,{method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }

    function increasePageMarginRightBack(){
        fetch(`${BASE_URL}/api/formats/desserts/increasePageMarginRightBack`,{method:'PUT'})
            .then(()=>getDessertsFormatting())
            .catch(err=>console.log(err))
    }


    function toggleFrontView(){
        setFrontView(prev=>!prev)
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
                    <div style={{textAlign:'center',fontSize:'30px'}}>wine list &gt; wine bottles &gt; format</div>
                    <div className='main-menu'>





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
                                                                    onClick={frontView  ? decreaseDessertItemMarginsTopBottom
                                                                                        : decreaseCategoriesMarginTop
                                                                    } /></span>
                                        {
                                            frontView   ? <span>menu item margins<br/>top & bottom &#8597;</span>
                                                        : <span>categories<br/>margin top &#8593;</span>
                                        }
                                        
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={frontView  ? increaseDessertItemMarginsTopBottom
                                                                                        : increaseCategoriesMarginTop
                                                                    } /></span>
                                    </div>

                                    <div style={{   textAlign:'center',
                                                    display:'flex',
                                                    gap:'10px',
                                                    justifyContent:'center',
                                                    border:'1px solid green',
                                                    alignItems:'center'}}>

                                                        
                                        <span><PiMinusCircleDuotone style={{fontSize:'40px',cursor:'pointer'}}
                                                                    onClick={frontView ? decreasePageMarginRight : decreasePageMarginRightBack} /></span>
                                        <span>page margin: right &#8592;</span>
                                        <span><PiPlusCircleDuotone  style={{fontSize:'40px',cursor:'pointer'}} 
                                                                    onClick={frontView ? increasePageMarginRight : increasePageMarginRightBack} /></span>
                                    </div>
                                
                            <br/>
























                        {
                            frontView ?                            
                                <div style={{   width:'14in',
                                                height:'8.5in',
                                                columns:'4',
                                                columnFill:'auto',
                                                border:'1px solid black',
                                                background:'white'}}>

                                    <div    className='specials-h1 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        wine by the glass
                                    </div>
                                   
                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Cava
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Cava').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        White
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'White').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Rosé
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Rosé').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}

                                    <div className='specials-h2 specials-update-heading'
                                            style={{margin:'0'}}
                                    >
                                        Red
                                    </div>

                                    {winesBTG.filter(item=>item.section == 'Red').map(data=>{
                                        return(
                                            <div key={data._id} className='special'>
                                                
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span className='vintage'>{data.vintage}, </span>
                                                <span> {data.description}</span>
                                                <span className='price'> &nbsp;{data.price}</span> 
                                                    
                                                <br/>
                                            </div>
                                        )
                                    })}






















                            
                                    <div className='specials-h1' >cava & champagne</div>

                                    {sparkling.map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>
                                            </div>
                                        )
                                    })}












                                    <div className='specials-h1'>rosé</div>

                                    {rosé.map(data=>{
                                        return(
                                            <div key={data._id} className='special'>                                        
                                                <span className='grapes'>{data.grapes}, </span>
                                                <span className='name'>{data.name}, </span>
                                                <span> {data.vintage},</span>
                                                <span> {data.description} / {data.price}</span>

                                            </div>
                                        )
                                    })}




                                </div>
                                // <div    className='dessert-menu-format-front' 
                                //         style={{width:'14in',columnCount:'4',columnFill:'auto'}}
                                //         style={{backgroundImage:'url("scan-dessert-menu-front.jpg")',backgroundSize:'5.5in 8.5in'}}
                                // >
                                //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta reprehenderit veritatis accusamus eos fugit hic, officiis velit odio impedit labore nam culpa amet optio omnis harum, totam delectus deleniti, consectetur veniam vitae natus. Voluptatum in atque aliquid quod officiis? Temporibus voluptatibus vitae, tenetur perferendis rem nemo enim. Perspiciatis a eius laborum tempora illum, ratione aliquam doloremque quam repellendus! Eius odit obcaecati alias voluptatum necessitatibus? Ea ut corrupti iste excepturi esse velit eum quae molestiae, maxime aperiam, quia quod cumque nihil voluptatibus in veniam earum? Facilis quisquam cumque nostrum harum repellat voluptatum similique iusto, saepe, iure quidem delectus nisi deserunt doloribus! Architecto maiores tempore nisi laudantium unde culpa quasi asperiores reprehenderit iusto in? Deleniti perferendis pariatur nam! Corporis ut vitae suscipit, repudiandae amet eius consectetur iure enim cupiditate eligendi modi velit soluta a adipisci error, culpa molestiae officia! Consequatur dolores beatae aliquam, temporibus sit molestias quasi quaerat at, earum et officiis. Autem, ad reprehenderit. Vitae praesentium pariatur accusamus dicta voluptatem illum atque, reiciendis at fuga obcaecati! Itaque saepe autem ex odit labore aliquam sequi, voluptates dolorum, non adipisci laudantium velit, corporis unde perspiciatis harum. Nisi earum amet quod libero alias optio laborum, minus vel quos, quo praesentium illum! Dolorum voluptate omnis similique nam sint quia. Repellendus ducimus impedit nemo facilis nihil adipisci eligendi perspiciatis quam labore, laboriosam, quaerat dolor suscipit saepe, asperiores nobis quod ad recusandae sequi eius vero cum illum dolores doloremque minima. Voluptatum, sequi quas. Animi dolore necessitatibus ea unde tenetur. Architecto atque eum quam nihil sapiente hic, illum veniam. Quo animi laudantium, nisi error dolor corrupti sint officia accusamus incidunt aut. Accusamus ipsam dolore ad maiores, quasi aspernatur. Quidem amet maxime dolore error cupiditate eligendi harum labore nesciunt a. Neque, adipisci officiis dolorum ullam aliquam, a, ab delectus voluptatibus nostrum facere eligendi deleniti ratione enim illum quisquam facilis porro ut amet officia ad ipsa! Tempore ad quas repudiandae quo delectus voluptatem ut, recusandae beatae natus sapiente modi eius dolore officia in. Expedita soluta illo, eos veniam nobis facere cum hic eveniet sint. Pariatur, quo ducimus. Fugiat assumenda corporis aliquid maxime debitis vitae commodi? Adipisci similique possimus quo nemo voluptas voluptatibus ad modi porro magni nesciunt. Dolor velit cumque nam provident molestias earum consequuntur quibusdam perspiciatis quas laborum? Esse commodi veniam eum totam nisi sint omnis earum pariatur et itaque, temporibus, cumque fugit blanditiis perspiciatis recusandae iste dolorem exercitationem consectetur rerum ratione optio dolores! Odit laborum vero maxime perferendis eum laudantium quibusdam explicabo ipsa non mollitia, aperiam, repellat pariatur! Quia quibusdam aliquam quam voluptate architecto fugit, omnis sed nemo earum amet, pariatur tempora nesciunt blanditiis eos exercitationem ratione! Recusandae, enim deserunt aliquam dolor deleniti nostrum quo eos, non at, esse veniam nulla ratione vitae. Animi temporibus ducimus provident reiciendis beatae non distinctio corrupti natus, nesciunt culpa recusandae magni ab delectus ipsum, aliquid fuga laboriosam aspernatur quia esse unde sequi. Numquam accusamus, repudiandae molestias commodi ipsa, voluptates magni quas doloribus perferendis autem enim dolor tempora explicabo nobis labore nihil et veritatis! Beatae officia ipsa nemo tenetur iste eveniet nesciunt, et, minima molestiae aperiam optio recusandae sit culpa voluptatibus. Nisi ducimus officiis est velit ullam temporibus vero non voluptatum, impedit asperiores, tempore sed iure similique veniam illo corporis aliquam pariatur doloribus error distinctio eligendi unde ab. Ullam eveniet odit cupiditate possimus veniam delectus eum nihil ad est, saepe perferendis quam rem recusandae voluptates dolore reprehenderit aut voluptatibus facere dolores expedita. Inventore dolorem veniam expedita consectetur impedit placeat consequuntur, sint saepe quae veritatis quo ab nulla, fugit rem perferendis omnis, libero unde culpa. Accusamus alias blanditiis natus enim neque ea quas ullam suscipit quam id facilis quisquam labore dignissimos, dolores inventore nihil totam aperiam distinctio illo aliquam porro atque. Beatae, minima minus. Consectetur asperiores voluptatibus excepturi, odio nobis natus sapiente optio et incidunt atque. Dolores, ab corrupti, animi, tempora vitae quo dolorum tempore excepturi deserunt veniam accusantium explicabo! Est dolorum praesentium aliquid unde natus! Nam quidem fuga reprehenderit suscipit doloribus ullam veritatis, perspiciatis quos dolores quis nulla facere minus molestiae consequatur recusandae, distinctio beatae ad reiciendis voluptate atque ab eos laborum expedita sint? Magni quos facilis inventore sed commodi, temporibus saepe atque repellat! Quam doloremque, magnam voluptas quisquam inventore sit qui ratione reiciendis officia eum delectus nulla aliquid voluptatum? Esse, culpa, quae numquam nisi necessitatibus ullam mollitia natus ducimus odit a distinctio aliquid nam modi, quo quos explicabo. Corporis recusandae aut cumque id quidem fugit voluptate voluptatem officiis distinctio quisquam itaque, ipsum tempore. Totam rerum nemo iste nihil, quos repellat corrupti, a molestiae similique libero aut expedita modi cumque saepe distinctio magni ab necessitatibus sapiente quaerat inventore vel! Nostrum, quia iste commodi voluptas, neque ipsam vel laudantium praesentium similique eius aperiam eum cumque in at, modi alias. Porro accusamus pariatur modi provident corporis nulla. Dolores, distinctio quod optio, hic voluptas ipsum, dolorem ratione excepturi quas non corrupti laudantium totam asperiores? Quod tempora veniam officia deserunt distinctio quas molestias dolor quaerat corrupti ipsum, enim adipisci incidunt numquam eveniet vitae necessitatibus accusantium natus doloremque quidem magnam? Consectetur provident quod eum deserunt iure odit ut amet inventore dolore fugiat vel voluptate delectus obcaecati, nesciunt doloremque debitis sequi modi eos enim quasi eveniet consequuntur impedit! Aspernatur, alias cupiditate corporis id nostrum reiciendis nobis qui repellat ipsum obcaecati, tenetur, fuga laudantium optio quia voluptate unde soluta repudiandae! Officia minus, vitae dolores autem ut impedit architecto incidunt ullam laudantium quaerat, libero sed optio dolorum deleniti quis ipsum natus facilis nesciunt consequuntur sit eveniet blanditiis. Incidunt sunt tenetur hic cumque sint illum adipisci, reprehenderit accusantium enim assumenda quae dolores, eius ratione sit eum possimus odit illo quos corrupti similique quibusdam! Repellat assumenda animi odit corporis a facere earum eum eos. Quas, recusandae blanditiis accusantium ratione, corrupti doloremque ducimus neque a veniam quod eos eum? Exercitationem, cumque hic similique corrupti saepe in velit vel soluta quo ea quod architecto. Quas perspiciatis impedit, enim eum sit asperiores est nobis natus, delectus aut aliquid eius. Repellendus ab magnam rerum perspiciatis ducimus culpa inventore harum voluptatem porro. Distinctio harum quod fugiat dolore, dignissimos quasi unde impedit officia ipsa? Esse maiores eum quos libero!
                                // </div>
                            :
                                <div    className='dessert-menu-format-front' 
                                        // style={{backgroundImage:'url("scan-dessert-menu-back.jpg"),',color:'red',backgroundSize:'5.5in 8.5in'}}
                                        
                                >
                                </div>
                        }



                    </div>

            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}