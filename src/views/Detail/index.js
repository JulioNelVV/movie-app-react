import { useContext, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import MovieCard from "../../components/MovieCard";
import globalContext from "../../context/globalContext";

import './style.css'
function Detail({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    const [match, parameters]=useRoute("/detail/:movie_name");
    useEffect(()=>{
        setSliderDisplay("none")
    },[])
    return(
        <div className="detail">
            <MovieCard src={"none"} title="puto" releaseDate="a998"/>

            
            <div className="movie-details">
                <p>Puto</p>
            </div>
        </div>
    )
}
export default Detail;