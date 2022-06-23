import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesGrid from "../../components/MoviesGrid";
import Slider from "../../components/Slider";
import './style.css'
import Spinner from "../../components/Spinner";
import { useState } from "react";
function Search({...props}){
    const {params}=props;

    return(
        <div className="search">
            <MoviesGrid params={params}/>            
            <Footer/>
            
        </div>

      
    )
}
export default Search;