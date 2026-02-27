import './index.css'
import './Home.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

export default function Home2(){
    useEffect(()=>window.scrollTo(0,0),[])
    useEffect(()=>{
        
            const picLarge0 = document.querySelector(`#pic-large-0`)
            const picLarge1 = document.querySelector(`#pic-large-1`)
            const picLarge2 = document.querySelector(`#pic-large-2`)
            const picLarge3 = document.querySelector(`#pic-large-3`)
            const picLarge4 = document.querySelector(`#pic-large-4`)
            const picLarge5 = document.querySelector(`#pic-large-5`)
            const picLarge6 = document.querySelector(`#pic-large-6`)
            const picLarge7 = document.querySelector(`#pic-large-7`)
            const picLarge8 = document.querySelector(`#pic-large-8`)
            const picLarge9 = document.querySelector(`#pic-large-9`)
            const picLarge10 = document.querySelector(`#pic-large-10`)
            const picLarge11 = document.querySelector(`#pic-large-11`)
            const picLarge12 = document.querySelector(`#pic-large-12`)
            const picLarge13 = document.querySelector(`#pic-large-13`)
            const picLarge14 = document.querySelector(`#pic-large-14`)
            const picLarge15 = document.querySelector(`#pic-large-15`)
            const picLarge16 = document.querySelector(`#pic-large-16`)
            const picLarge17 = document.querySelector(`#pic-large-17`)
            const picLarge18 = document.querySelector(`#pic-large-18`)
            const picLarge19 = document.querySelector(`#pic-large-19`)
            const picLarge20 = document.querySelector(`#pic-large-20`)
            const picLarge21 = document.querySelector(`#pic-large-21`)
            const picLarge22 = document.querySelector(`#pic-large-22`)
            const picLarge23 = document.querySelector(`#pic-large-23`)
            const picLarge24 = document.querySelector(`#pic-large-24`)
            const picLarge25 = document.querySelector(`#pic-large-25`)
            const picLarge26 = document.querySelector(`#pic-large-26`)
            const picLarge27 = document.querySelector(`#pic-large-27`)
            const picLarge28 = document.querySelector(`#pic-large-28`)

            const rightArrow = document.querySelector('#right')
            const leftArrow = document.querySelector('#left')
            leftArrow.addEventListener('click',moveLeft)
            rightArrow.addEventListener('click',moveRight)

            let picLargeCurrent = 0
            const smallSlideshow = document.querySelector('#small-slideshow')

            function moveRight(){
                console.log('moveRight() picLargeCurrent starts: ' + picLargeCurrent)
                document.querySelector('.pic-large-current').classList.toggle('pic-large-current')
                if(picLargeCurrent == 28){
                    picLargeCurrent = 0
                }else{
                    picLargeCurrent++
                }
                console.log('moveRight() picLargeCurrent ends: ' + picLargeCurrent)
                document.querySelector(`#pic-large-${picLargeCurrent}`).classList.toggle('pic-large-current')
                const smallPicMove = document.querySelector('.pic-small')
                const lastSmallPic = document.querySelector('.pic-small:last-child')
                lastSmallPic.after(smallPicMove)
            }

            function moveLeft(){
                document.querySelector('.pic-large-current').classList.toggle('pic-large-current')
                if(picLargeCurrent == 0){
                    picLargeCurrent = 28
                }else{
                    picLargeCurrent--
                }
                document.querySelector(`#pic-large-${picLargeCurrent}`).classList.toggle('pic-large-current')
                const smallPicMove = document.querySelector('.pic-small:last-child')
                const firstSmallPic = smallSlideshow.firstChild 
                smallSlideshow.insertBefore(smallPicMove, firstSmallPic)
            }

            setInterval(moveRight,5000)

        
    },[])

    const pics = [
        'slideshow1.webp',
        'slideshow2.webp',
        'slideshow3.webp',
        'slideshow4.webp',
        'slideshow5.webp',
        'slideshow6.webp',
        'slideshow7.webp',
        'slideshow8.webp',
        'slideshow9.webp',
        'slideshow10.webp',
        'slideshow11.webp',
        'slideshow12.webp',
        'slideshow13.webp',
        'slideshow14.webp',
        'slideshow15.webp',
        'slideshow16.webp',
        'slideshow17.webp',
        'slideshow18.webp',
        'slideshow19.webp',
        'slideshow20.webp',
        'slideshow21.webp',
        'slideshow22.webp',
        'slideshow23.webp',
        'slideshow24.webp',
        'slideshow25.webp',
        'slideshow26.webp',
        'slideshow27.webp',
        'slideshow28.webp',
        'slideshow29.webp',
    ]

    let picsINITIALlength = pics.length

    let picsShuffled = []

    for(let i=0;i<picsINITIALlength;i++){
        let currentPic = Math.floor(Math.random()*pics.length)
        picsShuffled.push(pics[currentPic])
        pics.splice(currentPic,1)
    }

    console.log(picsShuffled)

    return (
        <div className='page-wrapper webpage' >
            <div className='webpage-wrapper'>
                <Navbar />

                <main style={{display:'grid',placeContent:'center'}}>
                    <div>
                        <div id='slideshow'>
                            <div id='left'><div id='left-arrow'>&lt;</div></div>
                            <div id='right'><div id='right-arrow'>&gt;</div></div>
                            {picsShuffled.map((pic,i)=>(
                                <img    src={picsShuffled[i]} 
                                        key={picsShuffled[i]}
                                        id={`pic-large-${i}`} 
                                        className= 
                                        {i == 0 ? 
                                                    'pic-large pic-large-current'
                                            : 
                                                    'pic-large pic-large-hidden'
                                        }
                                         
                                />
                            ))} 
                        </div>{/* #slideshow */}

                        <div id='small-slideshow-wrapper'>
                            <div id='small-slideshow'>
                                {picsShuffled.map((pic,i)=>(
                                    <img    src={picsShuffled[i]}
                                            key={picsShuffled[i]}
                                            className='pic-small'
                                            id={`pic-small-${i}`} 
                                    />
                                ))}
                                {picsShuffled.map((pic,i)=>(
                                    <img    src={picsShuffled[i]}
                                            key={`${picsShuffled[i]}b`}
                                            className='pic-small'
                                            id={`pic-small-${i}`} 
                                    />
                                ))}
                            </div>
                            <div id='shader-left'></div>
                            <div id='shader-right'></div>
                        </div>{/* #small-slideshow-wrapper */}
                    </div>

                </main>
                
                <Footer/>


            </div>{/* .webpage-wrapper */}
        </div>/* .page-wrapper */
    )
}