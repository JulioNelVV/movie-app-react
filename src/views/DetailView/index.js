import { useContext, useEffect } from "react";
import { useLocation } from "wouter";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import globalContext from "../../context/globalContext";
import useFetch from "../../hooks/useFetch";

import style from "./style.module.css";
function DetailView({ ...props }) {
  const { params } = props;
  let year = "unknow";
  const { sliderDisplay, setSliderDisplay } = useContext(globalContext);
  const [location, setLocation] = useLocation();
  const { data, isLoading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=583ad481a868c7cb43cca20c20a9d9c2`,
    null,
    params,
    1
  );
  const onClickHandler = (name, id) => {
    setLocation(`/genre/${name}/${id}/${1}`);
  };
  useEffect(()=>{
    setSliderDisplay("none");
  },[])
  useEffect(() => {
    setSliderDisplay("none");
  }, [params]);

  if (!isLoading && error !== null) {
    return (
      <div className={style["detail"]}>
        <Error error={error} />
      </div>
    );
  }
  if (!isLoading && error === null && data.release_date) {
    year = data.release_date.slice(0, 4);
  }
  if (!isLoading && error === null) {
    return (
      <div className={style["detail"]}>
        <img
          className={style["movie-poster"]}
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
        <div className={style["movie-details"]}>
          <h2 className={style["movie-title"]}>
            {data.title} ({year})
          </h2>
          <div className={style["genres"]}>
            {data.genres.map(({ id, name }) => {
              return (
                <div key={id} className={style["genres__item"]}onClick={() => onClickHandler(name, id)}>
                  {name}
                </div>
              );
            })}
          </div>
          <p className={style["vote"]}>vote average: {data.vote_average}</p>
          <h2 className={style["overview-title"]}>overview</h2>
          <p className={style["overview-data"]}>{data.overview}</p>
          <div>
            <h2 className={style["companies-title"]}>Production companies</h2>
            <ul className={style["companies-list"]}>
              {data.production_companies.map(({ id, name }) => {
                return <li key={id} className={style["companies-item"]}>{name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <Spinner />;
}
export default DetailView;
