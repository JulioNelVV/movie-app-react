
import { createContext } from "react"
const globalContext=createContext({
    sliderDisplay: "flex",
    setSliderDisplay: ()=>{}
});


export default globalContext;
