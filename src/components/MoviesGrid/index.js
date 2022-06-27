import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";
import Spinner  from "../Spinner";
import './style.css'
import { useContext, useEffect, useState } from "react";
import { useLocation } from "wouter";
import CategoryContext from "../../context/CategoryContext";
function MoviesGrid({params}){
    let hasParams=Object.keys(params).length>0;
    let url;
   
    const [page, setPage]=useState(Number(params.page)||1);
    const [location, setLocation]=useLocation();
    const {category, updateCategory}=useContext(CategoryContext);
    
    const nextPage=()=>{
        if(page>=500){
            setPage(500);
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
        if(data.total_pages>=500){
            setPage(500)
            
        }else{
            setPage(data.total_pages);
            
        }
    }
    if(hasParams){
        if(params.hasOwnProperty("movie")){
            url=`https://api.themoviedb.org/3/search/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&page=${params.page}&query=${params.movie}`;
        }else{
            if(params.hasOwnProperty("category_name")){
                url=`https://api.themoviedb.org/3/discover/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&page=${params.page}&with_genres=${hasParams?category.id:""}`;
            }else{
                url=`https://api.themoviedb.org/3/discover/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&page=${params.page}`;
                
            }
           
        }
    }else{
        url=`https://api.themoviedb.org/3/discover/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&page=${page}}`;
        
    }
    
    const {data, isLoading, error}=useFetch(url, null, params, page);
    useEffect(()=>{
        if(hasParams){
            if(params.hasOwnProperty("movie")){
                setLocation(`/search/${params.movie}/${page}`);
            }
            else{
                if(params.hasOwnProperty("category_name")){
                    setLocation(`/category/${params.category_name}/${page}`);
                }else{
                    setLocation(`/home/${page}`);
                }
                
            }
           }else{
            setLocation(`/home/${page}`);
           }
           
    },[page])
    useEffect(()=>{
        setPage(Number(params.page));
        
    },[params.page])

    if(!isLoading){
        if(error!==null){
            return <p>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</p>
        }
        else{
            return(
                <>
                <article className="movies-grid">
                            {
                                data.results.map(({id, title, poster_path, release_date})=>{
                                    return <MovieCard
                                                key={id}
                                                title={title}
                                                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                                releaseDate={release_date}
                                            />
                                })
                            }
                            
                </article>
                <article className="pages">
                    <input className={`pages-previous ${page===1?"--hidden":"visible"}`} type="button" onClick={previousPage} value=" "/>
                    <div className="pages-indicators">
                        <input className="pages-indicator" type="button" onClick={()=>setPage(page)} value={params.page||1}/>
                        <p>of</p>
                        <input className="pages-indicator" type="button" onClick={lastPage} value={data.total_pages>=500?"500":data.total_pages}/>
                    </div>
                    
                    <input className={`pages-next ${page===(500||data.total_pages)?"--hidden":"visible"}`} type="button" onClick={nextPage} value=" "/>
                </article>
                </>
                
            )
        }
        
    }
    return(
        <Spinner/>
    )
   
    
}
export default MoviesGrid;