import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesGrid from "../../components/MoviesGrid";
import Slider from "../../components/Slider";
import './style.css'
import Spinner from "../../components/Spinner";
import { useContext, useState } from "react";
import { useEffect } from "react";
import globalContext from "../../context/globalContext";

function Search({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    useEffect(()=>{
        setSliderDisplay("none")
    },[])
    return(
        <div className="search">
            <MoviesGrid params={params}/>            
            <Footer/>
            
        </div>

      
    )
}
export default Search;