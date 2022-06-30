import { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import globalContext from '../../context/globalContext';
import useFetch from '../../hooks/useFetch';
import style from './style.module.css'
function Menu({}){
    const [visible, setVisible]=useState(false);
    const [movie, setMovie]=useState("");
    const [location, setLocation]=useLocation();
    const {data, isLoading, error}=useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=583ad481a868c7cb43cca20c20a9d9c2");
    const {setCurrentGenre, setSliderDisplay}=useContext(globalContext);
    const menuList=useRef();
    const onClickHandler=(genre)=>{
        setCurrentGenre({...genre});
        setSliderDisplay("flex");
        setVisible(!visible);
    }
    const onChangeHanlder=(e)=>{
        setMovie(e.target.value)
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        setLocation(`/search/${movie}/${1}`);
        setSliderDisplay("none");
        setMovie("");
        setVisible(!visible);
    }
    useEffect(()=>{
        if(!isLoading){
            if(visible){
                menuList.current.classList.add(style["menu-list--show"]);
                menuList.current.classList.remove(style["menu-list--hide"]);
            }else{
                menuList.current.classList.remove(style["menu-list--show"]);
                menuList.current.classList.add(style["menu-list--hide"]);
                setTimeout(()=>{
                    menuList.current.classList.remove(style["menu-list--hide"]);
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
                        className={style["submenu__item"]}
                    >
                        <Link  onClick={()=>onClickHandler(genre)} to={`/genre/${genre.name}/${1}`}>
                            <a className={style['submenu__link']}>{genre.name}</a>
                        </Link>
                        
                    </li>
                ) 
            })
        }
        return(
            <nav className={style['menu']}>
                <div 
                    className={`${style["menu-button-wrapper"]} ${style[`menu-button-wrapper--${visible?"cross":"hamburguer"}`]}`}
                    onClick={()=>{
                        setVisible(!visible);
                    }}
                >
                    <button className={style["menu__button"]}>
                    </button>
                </div>
              
                <ul ref={menuList} className={style["menu-list"]}>
                    <li className={style['menu-list__item']}>
                        <form className={style['search-form']} onSubmit={onSubmitHandler}>
                            <input type="text"
                                className={style['search-form__text']}
                                placeholder='search movie...'
                                onChange={onChangeHanlder}
                                value={movie}
                            />
                            <input type="button" className={style['search-form__button']}/>
                        </form>
                    </li>
                   
                    <li className={style['menu-list__item']}>
                        <Link onClick={()=>{
                            setSliderDisplay("flex")
                            setVisible(!visible)
                                }
                            }to='/home/1'>
                            <a className={style['menu-list__link']}>Home</a>
                        </Link>
                        
                    </li>
                    <li className={style['menu-list__item']}>
                        <a className={style['menu-list__link']}>Genres</a>
                        <ul className={style['submenu']}>
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