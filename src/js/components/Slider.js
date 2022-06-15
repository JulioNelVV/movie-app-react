import { useEffect, useRef, useState } from 'react';
import '../../css/Slider.css'

function Slider({movieDescriptionRef, movieList, isLoading}){
    const [position, setPosition]=useState(0);
    const backgroundRef=useRef(null);
    let newMovieList=movieList.slice(0,4);
    const setNextPosition=()=>{
        if(position===newMovieList.length-1){
            setPosition(0)
        }else{
            setPosition(position+1)
        }
    }
    const setPreviousPosition=()=>{
        if(position===0){
            setPosition(3)
        }else{
            setPosition(position-1)
        }
    }
    const setCurrentPosition=(index)=>{
        setPosition(index)
    }
    useEffect(()=>{
        
        const interval=setInterval(()=>{
            if(position===newMovieList.length-1){
                setPosition(0)
            }else{
                setPosition(position+1)
            }
            
        },4000)
        if(!isLoading){
            backgroundRef.current.style.backgroundImage=`url('https://image.tmdb.org/t/p/original/${newMovieList[position].poster_path}')` 
        }
        return ()=>clearInterval(interval);
    },[isLoading,position])
    let sliderPointers;
    if(!isLoading){
       sliderPointers=newMovieList.map((movie,index)=>{
            return(
                <div
                    key={index}
                    onClick={()=>setCurrentPosition(index)}
                    className={`slider__pointer ${position===index?"--focus":"--normal"}`}>
                </div>
            )
        })
    }
    return(
        <div className="slider">
            <div
                ref={backgroundRef}
                className='slider__background'
            ></div>
            <button
                className='previous'
                onClick={setPreviousPosition}
            >

            </button>
            <div className='movie-info'>
                <h2 className='movie-title'>{!isLoading?newMovieList[position].title:""}</h2>
                <p  ref={movieDescriptionRef} className='movie-description'>{!isLoading?newMovieList[position].overview:""}</p>
            </div>
            <button 
                className='next'
                onClick={setNextPosition}
            >

            </button>
           <div className='slider__pointers'>
               {sliderPointers}
               
            </div> 
        </div>
    )
}
export default Slider;