import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MoviesGrid from "../../components/MoviesGrid";
import Slider from "../../components/Slider";
import './style.css'

function Category({...props}){
    const {params}=props;
    return(
        <div className="category">
          
            
            <MoviesGrid params={params}/>            
            <Footer/>
            
        </div>
      
    )
}
export default Category;