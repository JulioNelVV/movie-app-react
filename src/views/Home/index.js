import { useContext, useEffect } from "react";
import { useRoute } from "wouter";
import Footer from "../../components/Footer";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";

import './style.css'

function Home({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    const [match, parameters]=useRoute("/detail/:movie_name");
    useEffect(()=>{
        setSliderDisplay("flex")
    },[params])
    return(
        <div className="home">
            <MoviesGrid params={params}/>            
            <Footer/>
        </div>

      
    )
}
export default Home;