import { useContext, useEffect } from "react";
import Footer from "../../components/Footer";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";


function Genre({...props}){
    const {params}=props;
    const {setSliderDisplay}=useContext(globalContext);
    
    useEffect(()=>{
        setSliderDisplay("flex")
    },[params])
    return(
        <div className="view">
            <MoviesGrid params={params}/>            
            
        </div>
      
    )
}
export default Genre;