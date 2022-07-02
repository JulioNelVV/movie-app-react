import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import globalContext from '../context/globalContext';
import useFetch from './useFetch';
import style from "../components/Menu/style.module.css"

const useMenu=()=>{
    const menuList=useRef();
    const inputSearch=useRef();
    const API_KEY="583ad481a868c7cb43cca20c20a9d9c2";
    const URL=`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    let submenu;
    //Controls visibility of the menu list
    const [visible, setVisible]=useState(false);
    //Movie that is being search in the form
    const [movie, setMovie]=useState("");
    const [location, setLocation]=useLocation();
    const {data, isLoading, error}=useFetch(URL);
    const { setSliderDisplay}=useContext(globalContext);
    
    const setMenuListVisibility=()=>{
        setVisible(!visible);
    }
    const onClickGenre=()=>{
        setSliderDisplay("flex");
        setMenuListVisibility();
    }
    const onChangeHandler=()=>{
        setMovie(inputSearch.current.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        setLocation(`/search/${movie}/${1}`);
        setSliderDisplay("none");
        setMovie("");
        setMenuListVisibility();
    }

    useEffect(()=>{
        if(!isLoading&&visible){
            menuList.current.classList.add(style["menu-list--show"]);
            menuList.current.classList.remove(style["menu-list--hide"]);
        }
        if(!isLoading&&!visible){
            menuList.current.classList.remove(style["menu-list--show"]);
            menuList.current.classList.add(style["menu-list--hide"]);
            setTimeout(()=>{
                menuList.current.classList.remove(style["menu-list--hide"]);
            },800)
        }
            
        }
    ,[visible])
    if(!isLoading&&error!==null){
        submenu=<li>Error: {` ${error.error} ${error.description||"Failed to Fetch"}`}</li>
    }
    if(!isLoading&&error===null){
        submenu= data.genres.map((genre)=>{
            return(
                <li
                    key={genre.id}
                    className={style["submenu__item"]}
                >
                    <Link  onClick={onClickGenre} to={`/genre/${genre.name}/${genre.id}/${1}`}>
                        <a className={style['submenu__link']}>{genre.name}</a>
                    </Link>
                    
                </li>
            ) 
        })
    }
    
        
    return{
        isLoading,
        submenu, 
        visible,
        menuList,
        inputSearch,
        movie,
        setMenuListVisibility,
        onSubmitHandler,
        onChangeHandler,
    }
}
export default useMenu;