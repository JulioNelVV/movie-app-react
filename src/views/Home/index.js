import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesGrid from "../../components/MoviesGrid";
import Slider from "../../components/Slider";
import './style.css'
import Spinner from "../../components/Spinner";
function Home({movieDescriptionRef}){
    return(
        <div className="home">
            
            <Slider
                movieDescriptionRef={movieDescriptionRef}
                delay={3000}
                length={8}
                controls={true}
                indicators={true}
                info={true}
                indicatorShape="circle"
            />
            
            <MoviesGrid/>            
            <Footer/>
        </div>
      
    )
}
export default Home;