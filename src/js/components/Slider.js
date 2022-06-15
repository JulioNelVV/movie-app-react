import { useEffect, useRef, useState } from 'react';
import '../../css/Slider.css'

function Slider({movieDescriptionRef, moviesList, isLoading, delay,length, controls, indicators, info, indicatorShape}){
    const [position, setPosition]=useState(0);
    const backgroundRef=useRef(null);
    let SliderMovies=moviesList.slice(0,length);
    const increasePosition=()=>{
        if(position===SliderMovies.length-1){
            setPosition(0)
        }else{
            setPosition(position+1)
        }
    }
    const decreasePosition=()=>{
        if(position===0){
            setPosition(SliderMovies.length-1)
        }else{
            setPosition(position-1)
        }
    }
    const setCurrentPosition=(index)=>{
        setPosition(index)
    }
    useEffect(()=>{
        
        const interval=setInterval(()=>{
            if(position===SliderMovies.length-1){
                setPosition(0)
            }else{
                setPosition(position+1)
            }
            
        },delay)
        if(!isLoading){
            backgroundRef.current.style.backgroundImage=`url('https://image.tmdb.org/t/p/original/${SliderMovies[position].poster_path}')` 
        }
        return ()=>clearInterval(interval);
    },[isLoading,position])
    let sliderIndicators, movieTitle, movieDescription;
    if(!isLoading){
       sliderIndicators=SliderMovies.map((movie,index)=>{
            return(
                <div
                    key={index}
                    onClick={()=>setCurrentPosition(index)}
                    className={`slider__indicator ${position===index?"--focus":"--normal"} --${indicatorShape}`}>
                </div>
            )
        })
        movieTitle=SliderMovies[position].title;
        movieDescription=SliderMovies[position].overview;
    }
    return(
        <div className="slider">
            <div
                ref={backgroundRef}
                className='slider__background'
            ></div>
            <button
                className={`previous ${controls?"--show":"--hide"}`}
                onClick={decreasePosition}
            >

            </button>
            <div className={`movie-info ${info?"--show":"--hide"}`}>
                <h2 className='movie-title'>{movieTitle}</h2>
                <p  ref={movieDescriptionRef} className='movie-description'>{movieDescription}</p>
            </div>
            <button 
                className={`next ${controls?"--show":"--hide"}`}
                onClick={increasePosition}
            >

            </button>
           <div className={`slider__indicators ${indicators?"--show":"--hide"}`}>
               {sliderIndicators}
            </div> 
        </div>
    )
}
export default Slider;