import { useEffect, useRef, useState } from "react";
import Home from "./js/views/Home";
function MovieApp() {
  const headerRef=useRef(null);
  const movieDescriptionRef=useRef(null);
  const apiURL="https://api.themoviedb.org/3/discover/movie/?"
  const apiKey="api_key=583ad481a868c7cb43cca20c20a9d9c2";
  const [mode, setMode]=useState("category");
  const [currentCategory, setCurrentCategory]=useState("All");
  const [isLoading, setIsLoading]=useState(true);
  const [moviesList, setMoviesList]=useState([])
  const [genresList, setGenresList]=useState([]);
 
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
  const getMovies=async()=>{
    try{
      setIsLoading(true);
      let data= await fetch(`${apiURL}${apiKey}`);
      let dataJSON= await data.json();
      if(!data.ok) throw "there's an error"
      setMoviesList(dataJSON.results)
      setIsLoading(false);
    }catch(e){
      console.log(e)
    }
  }
  const getGenres=async()=>{
    try{
      let data= await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=583ad481a868c7cb43cca20c20a9d9c2");
      let dataJSON= await data.json();
      if(!data.ok) throw "there's an error"
      setGenresList(dataJSON.genres)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{

    
  const observer=new IntersectionObserver(changeHeaderBackground,IntersectionObserverOptions)
  observer.observe(movieDescriptionRef.current)
  getMovies();
  getGenres();
  return ()=>{
    if(headerRef.current) observer.unobserve(movieDescriptionRef.current)
  }
  },[mode,currentCategory])


  return (
    <div>
      <Home
        headerRef={headerRef}
        movieDescriptionRef={movieDescriptionRef}
        moviesList={moviesList}
        genresList={genresList}
        isLoading={isLoading}
      />
      
    </div>
  );
}

export default MovieApp;
