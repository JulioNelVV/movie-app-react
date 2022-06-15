import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";
import '../../css/Home.css'
import Spinner from "../components/Spinner";
function Home({headerRef, movieDescriptionRef, moviesList, genresList, isLoading}){
    return(
        <div className="home">
            <Header
                headerRef={headerRef}
                genresList={genresList}
            />
            <Slider
                movieDescriptionRef={movieDescriptionRef}
                moviesList={moviesList}
                isLoading={isLoading}
                delay={3000}
                length={5}
                controls={true}
                indicators={true}
                info={true}
                indicatorShape="circle"
            />
            
            <MoviesGrid
                moviesList={moviesList}
            />            
            <Footer/>
        </div>
      
    )
}
export default Home;