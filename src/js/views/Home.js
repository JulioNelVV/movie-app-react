import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";
import '../../css/Home.css'
import Spinner from "../components/Spinner";
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
            <Spinner/>
        </div>
      
    )
}
export default Home;