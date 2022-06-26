import './style.css'
function MovieCard({src, title, releaseDate}){
    return(
        <section className="movie-card">
            <div className='movie-card__image-wrapper'>
                <img
                    className="movie-card__image"
                    src={src}
                    alt="movie image"
                />
                 <p className='movie-card__release-year'>{releaseDate.slice(0,4)}</p>
            </div>
            
            <h2 className="movie-card__title">{title}</h2>
           
        </section>
    )
}
export default MovieCard;