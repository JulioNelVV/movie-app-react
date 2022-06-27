import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import CategoryContext from '../../context/CategoryContext';
import useFetch from '../../hooks/useFetch';
import './style.css'
function Menu({params}){
    const [visible, setVisible]=useState(false);
    const [movie, setMovie]=useState("");
    const [location, setLocation]=useLocation();
    const {data, isLoading, error}=useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=583ad481a868c7cb43cca20c20a9d9c2");
    const {category, updateCategory}=useContext(CategoryContext);
    const menuList=useRef();
    const onClickHandler=(genre)=>{
        updateCategory({id: genre.id, name: genre.name});
        setVisible(!visible);
    }
    const onChangeHanlder=(e)=>{
        setMovie(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        setLocation(`/search/${movie}/1`);
        setMovie("");
    }
    useEffect(()=>{
        if(!isLoading){
            if(visible){
                menuList.current.classList.add("--visible");
                menuList.current.classList.remove("--hidden");
            }else{
                menuList.current.classList.remove("--visible");
                menuList.current.classList.add("--hidden");
                setTimeout(()=>{
                    menuList.current.classList.remove("--hidden");
                   
                },800)
            }
        }
        
    },[visible])
    let submenu;
    if(!isLoading){
        
        if(error!==null){
            submenu=<li>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</li>
        }else{
            submenu= data.genres.map((genre, index)=>{
                return(
                    <li
                        key={genre.id}
                      
                    >
                        <Link  onClick={()=>onClickHandler(genre)} to={`/category/${genre.name}/${1}`}>
                            {genre.name}
                        </Link>
                        
                    </li>
                ) 
            })
        }
        return(
            <nav className='menu'>
                <div 
                    className={`menu__button-wrapper --${visible?"cross":"hamburguer"}`}
                    onClick={onClickHandler}
                >
                    <button className="menu__button">
                    </button>
                </div>
              
                <ul ref={menuList} className={`menu__list`}>
                    <li>
                        <form className='search-form' onSubmit={onSubmitHandler}>
                            <input type="text"
                                className='search-form__text'
                                placeholder='search movie...'
                                onChange={onChangeHanlder}
                                value={movie}
                            />
                            <input type="button" className='search-form__button'/>
                        </form>
                    </li>
                   
                    <li>
                        <Link to='/home/1'>
                            <a>Home</a>
                        </Link>
                        
                    </li>
                    <li>
                        <a>Categories</a>
                        <ul className='submenu'>
                            {
                                submenu
                            }
                            
                        </ul>
                    </li>
                </ul>
            </nav>
           
        )
    }
    
}
export default  Menu;