import { useEffect, useRef, useState } from "react";
import { Router } from "wouter";
import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Spinner from "./components/Spinner";
import useHashLocation from "./hooks/useHashLocation";
import Category from "./views/Category";

import Home from "./views/Home";
import Search from "./views/Search";

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
      <Router hook={useHashLocation}>
        <Header
          headerRef={headerRef}
        />
        <Slider
          movieDescriptionRef={movieDescriptionRef}
          delay={3000}
          length={4}
          controls={true}
          indicators={true}
          info={true}
          indicatorShape="circle"
        />
      
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/category/:category_id" component={Category}/>
          <Route path="/search/:movie" component={Search}/>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default MovieApp;
