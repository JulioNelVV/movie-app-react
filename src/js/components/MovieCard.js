import '../../css/MovieCard.css'
function MovieCard({src}){
    return(
        <section className="movie-card">
            <img
                className="movie-card__image"
                src={src}
                alt="movie image"
            />
            <h2 className="movie-card__title">Movie title</h2>
        </section>
    )
}
export default MovieCard;