import MovieCard from "../MovieCard";

import './style.css'
function MoviesGrid({moviesList}){
    return(
        <article className="movies-grid">
            {
                moviesList.map(({id, title, poster_path})=>{
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
export default MoviesGrid;