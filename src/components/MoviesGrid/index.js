import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";
import Spinner  from "../Spinner";
import Error from "../Error";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import style from './style.module.css'


function MoviesGrid({params, viewTitle, defaultTitle}){
    let currentParam=Object.keys(params)[0];
    const [page, setPage]=useState(Number(params.page)||1);
    const [location, setLocation]=useLocation();
    let resultsLength;
    const PAGES_LIMIT=500;
    const API_KEY="583ad481a868c7cb43cca20c20a9d9c2";
    const DISCOVER_URL="https://api.themoviedb.org/3/discover/movie?api_key=";
    const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=";
    const DEFAULT_URL=`${DISCOVER_URL}${API_KEY}&page=${params.page}`;
    const KEYWORD_LOCATION=`/search/${params.keyword}/${page}`;
    const GENRE_LOCATION=`/genre/${params.genre_name}/${params.genre_id}/${page}`;
    const DEFAULT_LOCATION=`/home/${page}`;
    const fetchUrls={
        "keyword": `${SEARCH_URL}${API_KEY}&page=${params.page}&query=${params.keyword}`,
        "genre_name": `${DISCOVER_URL}${API_KEY}&page=${params.page}&with_genres=${params.genre_id}`
    }
    const locations={
        "keyword": KEYWORD_LOCATION,
        "genre_name": GENRE_LOCATION
    }
    let url;
    url=fetchUrls[currentParam]|| DEFAULT_URL;
    const {data, isLoading, error}=useFetch(url, null, params, page);
    const nextPage=()=>{
        if(page>=PAGES_LIMIT){
            setPage(PAGES_LIMIT);
        }else{
            if(page>=data.total_pages){
                setPage(data.total_pages);
            }else{
                setPage(page + 1);
            }   
        }
    }
    const previousPage=()=>{
        if(page===1){
            setPage(1);
        }else{
            setPage(page - 1)
        }
    }
    const lastPage=()=>{
        if(data.total_pages>=PAGES_LIMIT){
            setPage(PAGES_LIMIT)   
        }else{
            setPage(data.total_pages);
        }
    }
  
     
   
   
    useEffect(()=>{
        setLocation(locations[currentParam])||setLocation(DEFAULT_LOCATION);  
    },[page])
    useEffect(()=>{
        setPage(Number(params.page));
    },[params.page])

    if(!isLoading&&error!==null){
        return <Error error={error}/>
        
    }
    if(!isLoading&&error===null&&data.results.length!==0){
        return(
            <>
            <h1 className={style["view-title"]}>{viewTitle[currentParam]||defaultTitle}</h1>
            <article className={style["movies-grid"]}>
                        {
                            data.results.map(({id, title, poster_path, release_date})=>{
                                return <MovieCard
                                            key={id}
                                            id={id}
                                            title={title}
                                            poster_path={poster_path}
                                            releaseDate={release_date}
                                            isLoading={isLoading}
                                            error={error}
                                        />
                            })
                        }
                        
            </article>
            <article className={style["pages"]}>
                <input className={`${style["pages-previous"]} ${style[`pages-previous--${page===1?"hidden":"visible"}`]}`} type="button" onClick={previousPage} value=" "/>
                <div className={style["pages-indicators"]}>
                    <input className={style["pages-indicator"]} type="button" onClick={()=>setPage(page)} value={params.page||1}/>
                    <p className={style["pages-text"]}>of</p>
                    <input className={style["pages-indicator"]} type="button" onClick={lastPage} value={data.total_pages>=500?"500":data.total_pages}/>
                </div>
                <input className={`${style["pages-next"]} ${style[`pages-next--${page===(500||data.total_pages)?"hidden":"visible"}`]}`} type="button" onClick={nextPage} value=" "/>
            </article>
           
            </>
            
        )
    }
    if(!isLoading&&error===null&data.results.length===0){
        return(
            <h1>Not search results were found for {params.keyword}</h1>
        )
    }
    if(isLoading){
        return(
            <Spinner/>
        )
    }
    
   
    
}
export default MoviesGrid;