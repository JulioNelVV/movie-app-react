import { useContext, useEffect } from "react";
import Spinner from "../../components/Spinner";
import globalContext from "../../context/globalContext";
import useFetch from "../../hooks/useFetch";

import './style.css'
function DetailView({...props}){
    const {params}=props;
    const {setSliderDisplay}=useContext(globalContext);
    
    const {data, isLoading, error}=useFetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=583ad481a868c7cb43cca20c20a9d9c2`, null, params, 1);
    useEffect(()=>{
        setSliderDisplay("none");
    },[params])
    if(!isLoading&&error!==null){
        return <p>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</p>
    }
    if(!isLoading&&error===null){
        return(
            <div className="detail">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} />
                <div className="movie-details">
                    <h2>{data.title} ({data.release_date.slice(0,4)})</h2>
                    <div>Genres: 
                        {
                            data.genres.map(({id, name})=>{
                                return <div key={id}> {name}</div>
                            })
                        }
                    </div>
                    <p>vote average: {data.vote_average}</p>
                    <h2>overview</h2>
                    <p>{data.overview}</p>
                    <div>
                        <h2>Production companies</h2>
                        <ul>
                            {
                                data.production_companies.map(({id, name})=>{
                                    return(
                                        <li key={id}>
                                            {name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
        return(
            <Spinner/>
        )
    
    
}
export default DetailView;