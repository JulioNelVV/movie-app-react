function MovieCard({src}){
    return(
        <section className="movie-card">
            <img
                className="movie-image"
                src={src}
                alt="movie image"
            />
            <h2 className="movie-title">Movie title</h2>
        </section>
    )
}
export default MovieCard;