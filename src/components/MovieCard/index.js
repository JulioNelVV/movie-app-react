import './style.css'
function MovieCard({src, title, releaseDate}){
    return(
        <section className="movie-card">
            <img
                className="movie-card__image"
                src={src}
                alt="movie image"
            />
            <h2 className="movie-card__title">{title}</h2>
            <p>{releaseDate.slice(0,4)}</p>
        </section>
    )
}
export default MovieCard;