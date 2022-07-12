import { useContext, useEffect } from "react";
import { useLocation } from "wouter";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import globalContext from "../../context/globalContext";
import useFetch from "../../hooks/useFetch";

import "./style.css";
function DetailView({ ...props }) {
  const { params } = props;
  let year = "unknow";
  const { setSliderDisplay } = useContext(globalContext);
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
  useEffect(() => {
    setSliderDisplay("none");
  }, [params]);

  if (!isLoading && error !== null) {
    return (
      <div className="detail">
        <Error error={error} />
      </div>
    );
  }
  if (!isLoading && error === null && data.release_date) {
    year = data.release_date.slice(0, 4);
  }
  if (!isLoading && error === null) {
    return (
      <div className="detail">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
        <div className="movie-details">
          <h2 className="movie-title">
            {data.title} ({year})
          </h2>
          <div className="genres">
            {data.genres.map(({ id, name }) => {
              return (
                <div key={id} className="genres__item"onClick={() => onClickHandler(name, id)}>
                  {name}
                </div>
              );
            })}
          </div>
          <p className="vote">vote average: {data.vote_average}</p>
          <h2 className="overview-title">overview</h2>
          <p className="overview-data">{data.overview}</p>
          <div>
            <h2 className="companies-title">Production companies</h2>
            <ul className="companies-list">
              {data.production_companies.map(({ id, name }) => {
                return <li key={id} className="companies-item">{name}</li>;
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
