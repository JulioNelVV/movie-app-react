import { useEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './style.css'
function Slider({movieDescriptionRef, delay,length, controls, indicators, info, indicatorShape}){
    const [position, setPosition]=useState(0);
    const backgroundRef=useRef(null);
    const {data, isLoading}=useFetch("https://api.themoviedb.org/3/movie/popular?api_key=583ad481a868c7cb43cca20c20a9d9c2");
    let SliderMovies, increasePosition, decreasePosition;
    
    useEffect(()=>{
        let interval;
        
        if(!isLoading){
            interval=setInterval(()=>{
                if(position===SliderMovies.length-1){
                    setPosition(0)
                }else{
                    setPosition(position+1)
                }
                
            },delay)
            backgroundRef.current.style.backgroundImage=`url('https://image.tmdb.org/t/p/original/${SliderMovies[position].poster_path}')` 
        }
        return ()=>clearInterval(interval);
    },[isLoading,position])
    let sliderIndicators, movieTitle, movieDescription;
    if(!isLoading){
        SliderMovies=data.results.slice(0,length);
    
     increasePosition=()=>{
        if(position===SliderMovies.length-1){
            setPosition(0)
        }else{
            setPosition(position+1)
        }
    }
   decreasePosition=()=>{
        if(position===0){
            setPosition(SliderMovies.length-1)
        }else{
            setPosition(position-1)
        }
    }
    const setCurrentPosition=(index)=>{
        setPosition(index)
    }
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