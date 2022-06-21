import MovieCard from "../MovieCard";
import useFetch from "../../hooks/useFetch";

import './style.css'
function MoviesGrid({}){
    const {data, isLoading}=useFetch("https://api.themoviedb.org/3/movie/popular?api_key=583ad481a868c7cb43cca20c20a9d9c2");
    
    if(!isLoading){
        
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
export default MoviesGrid;