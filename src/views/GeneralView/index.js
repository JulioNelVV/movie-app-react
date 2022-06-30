import { useContext, useEffect } from "react";
import MoviesGrid from "../../components/MoviesGrid";
import globalContext from "../../context/globalContext";

function GeneralView({...props}){
    const {params}=props;
    const {setSliderDisplay}=useContext(globalContext);
    
    useEffect(()=>{
        if(Object.keys(params)[0]==="movie"){
            setSliderDisplay("none");
        }else{
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