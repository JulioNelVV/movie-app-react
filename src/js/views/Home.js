import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";
import '../../css/Home.css'
import Spinner from "../components/Spinner";
function Home({headerRef, movieDescriptionRef, movieList, genreList, isLoading}){
    return(
        <div className="home">
            <Header
                headerRef={headerRef}
                genreList={genreList}
            />
            <Slider
                movieDescriptionRef={movieDescriptionRef}
                movieList={movieList}
                isLoading={isLoading}
            />
            <MoviesGrid
                movieList={movieList}
            />            
            <Footer/>
        </div>
      
    )
}
export default Home;