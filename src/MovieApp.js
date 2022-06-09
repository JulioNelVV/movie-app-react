import { useEffect } from "react";
import Home from "./js/views/Home";
function MovieApp() {
  useEffect(()=>{
    const $header=document.querySelector(".header");
    const $movieDescription=document.querySelector(".movie-description");
  const changeHeaderBackground=(entries, observer)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        $header.style.backgroundColor="transparent";
      }else{
        $header.style.backgroundColor="#000";
      }
      
  })
  }
  const observer=new IntersectionObserver(changeHeaderBackground,{
    root: null,
    rootMargin: '0px 0px 150px 0px',
      threshold: 0.0
  })
  observer.observe($movieDescription)
  
  },[])
  return (
    <div>
      <Home/>
    </div>
  );
}

export default MovieApp;
