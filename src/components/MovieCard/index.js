import { useContext } from 'react';
import { useLocation } from 'wouter';
import globalContext from '../../context/globalContext';
import style from './style.module.css'

function MovieCard({src, id, title, releaseDate}){
    const [location, setLocation]=useLocation();
    const onClickHandler=()=>{
        setLocation(`/detail/${title}/${id}`);
    }   
    return(
        <section onClick={onClickHandler} className={style["movie-card"]}>
            <div className={style['movie-card-image-wrapper']}>
                <img
                    className={style["movie-card__image"]}
                    src={src}
                    alt="movie image"
                />
                 <p className={style['movie-card__release-year']}>{releaseDate.slice(0,4)}</p>
            </div>
            <h2 className={style["movie-card__title"]}>{title}</h2>
        </section>
    )
}
export default MovieCard;