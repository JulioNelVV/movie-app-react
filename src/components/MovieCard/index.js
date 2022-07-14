import { useContext } from "react";
import { useLocation } from "wouter";
import globalContext from "../../context/globalContext";
import style from "./style.module.css";

function MovieCard({ id, title, releaseDate, isLoading, error, poster_path }) {
  const [location, setLocation] = useLocation();
  const { setSliderDisplay } = useContext(globalContext);
  let year = "unknow";
  const onClickHandler = () => {
    setSliderDisplay("none");
    setLocation(`/detail/${title}/${id}`);
  };
  if (releaseDate) {
    year = releaseDate.slice(0, 4);
  }
  if (!isLoading && error === null && poster_path) {
    return (
      <section onClick={onClickHandler} className={style["movie-card"]}>
        <div className={style["movie-card-image-wrapper"]}>
          <img
            className={style["movie-card__image"]}
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt="movie image"
          />
          <p className={style["movie-card__release-year"]}>{year}</p>
        </div>
        <h2 className={style["movie-card__title"]}>{title}</h2>
      </section>
    );
  }
}
export default MovieCard;
