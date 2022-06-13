import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";
import '../../css/Home.css'
function Home({headerRef, movieDescriptionRef}){
    return(
        <div className="home">
            <Header
                headerRef={headerRef}
            />
            <Slider
                movieDescriptionRef={movieDescriptionRef}
            />
            <MoviesGrid/>            
            <Footer/>
           
        </div>
      
    )
}
export default Home;