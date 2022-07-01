import { useContext, useEffect } from "react";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";

function GeneralView({...props}){
    const {params}=props;
    const {setSliderDisplay}=useContext(globalContext);
    
    useEffect(()=>{
        setSliderDisplay("none");
        if(Object.keys(params)[0]!=="keyword"){
            setSliderDisplay("flex");
        }
    },[params])
    return(
        <div className="view">
            <MoviesGrid params={params}/>            
        </div>

      
    )
}
export default GeneralView;