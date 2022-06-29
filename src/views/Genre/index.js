import { useContext, useEffect } from "react";
import { useRoute } from "wouter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesGrid from "../../components/MoviesGrid";
import Slider from "../../components/Slider";
import globalContext from "../../context/globalContext";
import './style.css'

function Genre({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    const [match, parameters]=useRoute("/detail/:movie_name");
    useEffect(()=>{
        setSliderDisplay("flex")
    },[params])
    return(
        <div className="genre">
            <MoviesGrid params={params}/>            
            <Footer/>
        </div>
      
    )
}
export default Genre;