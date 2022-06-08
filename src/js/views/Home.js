import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";

function Home(){
    return(
        <div>
            <Header/>
            <Slider/>
            <MoviesGrid/>            
            <Footer/>
        </div>
      
    )
}
export default Home;