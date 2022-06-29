import { useContext } from 'react';
import { useLocation } from 'wouter';
import globalContext from '../../context/globalContext';
import './style.css'

function MovieCard({src, title, releaseDate, overview, vote_average}){
    const [location, setLocation]=useLocation();
    const {currentMovie, setCurrentMovie, setSliderDisplay}=useContext(globalContext);
    const onClickHandler=()=>{
        setLocation(`/detail/${title}`);
        setCurrentMovie({src, title, releaseDate, overview, vote_average});
        setSliderDisplay("none");
    }   
    return(
        <section onClick={onClickHandler} className="movie-card">
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