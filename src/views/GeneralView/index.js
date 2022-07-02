import { useContext, useEffect } from "react";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";

function GeneralView({...props}){
    const {params}=props;
    const {sliderDisplay, setSliderDisplay}=useContext(globalContext);
    let currentParam=Object.keys(params)[0];
    const defaultTitle="Most popular movies";
    const viewTitle={
        "keyword": `search results for ${params.keyword}`,
        "genre_name": `${params.genre_name}`
    }
    useEffect(()=>{
        setSliderDisplay("none");
        if(currentParam!=="keyword"){
            setSliderDisplay("flex");
        }
    },[params])
    return(
        <div className={`view view--slider-${sliderDisplay}`}>
            <h1>{viewTitle[currentParam]||defaultTitle}</h1>
            <MoviesGrid params={params}/>            
        </div>

      
    )
}
export default GeneralView;