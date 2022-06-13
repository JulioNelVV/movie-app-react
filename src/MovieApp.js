import { useEffect, useRef, useState } from "react";
import Home from "./js/views/Home";
function MovieApp() {
  const headerRef=useRef(null);
  const movieDescriptionRef=useRef(null);
  const changeHeaderBackground=(entries)=>{
    const [entry]=entries;
    if(entry.isIntersecting){
      headerRef.current.style.backgroundColor="transparent";
    }else{
      headerRef.current.style.backgroundColor="#000";
    }
  }
  const IntersectionObserverOptions={
    root: null,
    rootMargin: '0px 0px 150px 0px',
    threshold: 0.0
  }
  useEffect(()=>{
    
  const observer=new IntersectionObserver(changeHeaderBackground,IntersectionObserverOptions)
  observer.observe(movieDescriptionRef.current)
  return ()=>{
    if(headerRef.current) observer.unobserve(movieDescriptionRef.current)
  }
  },[])


  return (
    <div>
      <Home
        headerRef={headerRef}
        movieDescriptionRef={movieDescriptionRef}
      />
    </div>
  );
}

export default MovieApp;
