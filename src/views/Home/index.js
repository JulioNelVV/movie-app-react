import Footer from "../../components/Footer";
import MoviesGrid from "../../components/MoviesGrid";

import './style.css'


function Home({...props}){
    const {params}=props;

    return(
        <div className="home">
            <MoviesGrid params={params}/>            
            <Footer/>
        </div>

      
    )
}
export default Home;