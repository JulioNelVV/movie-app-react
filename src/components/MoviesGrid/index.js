import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";
import Spinner  from "../Spinner";
import './style.css'
function MoviesGrid({params}){
    let hasParams=Object.keys(params).length>0;
    let url;
    if(params.hasOwnProperty("movie")){
        url=`https://api.themoviedb.org/3/search/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&page=1&query=${params.movie}`;
    }else{
        url=`https://api.themoviedb.org/3/discover/movie?api_key=583ad481a868c7cb43cca20c20a9d9c2&&with_genres=${hasParams?params.category_id:""}`;
    }
    const {data, isLoading, error}=useFetch(url, null, params);
    if(!isLoading){
        if(error!==null){
            return <p>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</p>
        }
        else{
            return(
                <article className="movies-grid">
                            {
                                data.results.map(({id, title, poster_path})=>{
                                    return <MovieCard
                                                key={id}
                                                title={title}
                                                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                            />
                                })
                            }
                </article>
            )
        }
        
    }
    return(
        <Spinner/>
    )
   
    
}
export default MoviesGrid;