import Footer from "../components/Footer";
import Header from "../components/Header";
import MoviesGrid from "../components/MoviesGrid";
import Slider from "../components/Slider";
import '../../css/Home.css'
function Home(){
    return(
        <div className="home">
            <Header/>
            <Slider/>
            <MoviesGrid/>            
            <Footer/>
           
        </div>
      
    )
}
export default Home;