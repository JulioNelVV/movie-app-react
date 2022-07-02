import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'wouter';
import globalContext from '../../context/globalContext';
import useFetch from '../../hooks/useFetch';
import style from './style.module.css'
import Spinner  from "../Spinner";
function Slider({movieDescriptionRef, delay,length, controls, indicators, info, indicatorShape}){
    const [position, setPosition]=useState(0);
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    const backgroundRef=useRef(null);
    const [location, setLocation]=useLocation();
    const {data, isLoading, error}=useFetch("https://api.themoviedb.org/3/movie/popular?api_key=583ad481a868c7cb43cca20c20a9d9c2");
    let SliderMovies;
    let sliderIndicators, movieTitle, movieId, movieDescription;
    let interval;
    const onClickHandler=()=>{
        setLocation(`/detail/${movieTitle}/${movieId}`);
    }
    const increasePosition=()=>{
        if(position===length-1){
            setPosition(0)
        }else{
            setPosition(position+1)
        }
    }
    const decreasePosition=()=>{
        if(position===0){
            setPosition(length-1)
        }else{
            setPosition(position-1)
        }
    }
    useEffect(()=>{
        
        if(!isLoading&&error===null){
            interval=setInterval(()=>{
                increasePosition();
            },delay)
            let image=SliderMovies[position].poster_path;
            backgroundRef.current.style.backgroundImage=`url('https://image.tmdb.org/t/p/original/${image}')` 
        }
        return ()=>clearInterval(interval);
    },[isLoading,position, window.screen.width])
   
    if(!isLoading&&error===null){
        SliderMovies=data.results.slice(0,length);
        sliderIndicators=SliderMovies.map((movie,index)=>{
                return(
                    <div
                        key={movie.id}
                        onClick={()=>setPosition(index)}
                        className={`${style["slider__indicator"]} ${style[`slider__indicator--${position===index?"focus":"normal"}`]} ${style[`slider__indicator--${indicatorShape}`]}`}>
                    </div>
                )
            })
        movieTitle=SliderMovies[position].title;
        movieId=SliderMovies[position].id;
        movieDescription=SliderMovies[position].overview;
    }
    if(!isLoading&&error!==null){
        return(
            <p style={{color: 'white', zIndex: '9999'}}>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</p>
        )
    }
    
        return(
            <div className={`${style["slider"]} ${style[`slider--${sliderDisplay}`]}`}>
                <div
                    ref={backgroundRef}
                    className={style['slider__background']}
                ></div>
                <button
                    className={`${style["previous-button"]} ${style[`previous-button--${controls?"flex":"none"}`]}`}
                    onClick={decreasePosition}
                >
    
                </button>
                <div className={`${style["movie-info"]} ${style[`movie-info--${info?"flex":"none"}`]}`}>
                    <h2
                        className={style['movie-title']}
                        onClick={onClickHandler}
                    >{movieTitle}</h2>
                    <p  ref={movieDescriptionRef} className={style['movie-description']}>{movieDescription}</p>
                </div>
                <button 
                    className={`${style["next-button"]} ${style[`next-button--${controls?"flex":"none"}`]}`}
                    onClick={increasePosition}
                >
    
                </button>
               <div className={`${style["slider__indicators"]} ${style[`slider__indicators--${indicators?"flex":"none"}`]}`}>
                   {sliderIndicators}
                </div> 
               
            </div>
        )
    
    
}
export default Slider;