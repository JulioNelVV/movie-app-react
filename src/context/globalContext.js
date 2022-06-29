
import { createContext } from "react"
const globalContext=createContext({
    currentGenre: {},
    currentMovie: {},
    sliderDisplay: "flex",
    setCurrentGenre: ()=>{},
    setCurrentMovie: ()=>{},
    setSliderDisplay: ()=>{}
});


export default globalContext;
