import { useContext, useEffect } from "react";
import { useRoute } from "wouter";
import Footer from "../../components/Footer";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";



function Home({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
   
    useEffect(()=>{
        setSliderDisplay("flex")
    },[params])
    return(
        <div className="view">
            <MoviesGrid params={params}/>            
        </div>

      
    )
}
export default Home;