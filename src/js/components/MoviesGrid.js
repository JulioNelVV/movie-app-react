import MovieCard from "./MovieCard";

import '../../css/MoviesGrid.css'
function MoviesGrid({moviesList}){
    return(
        <article className="movies-grid">
            {
                moviesList.map((movie, index)=>{
                    return <MovieCard key={index} title={movie.title} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}/>
                })
            }
        </article>
    )
}
export default MoviesGrid;