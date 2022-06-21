import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './style.css'
function Menu({}){
    const [visible, setVisible]=useState(false);
    const {data, isLoading}=useFetch("https://api.themoviedb.org/3/genre/movie/list?api_key=583ad481a868c7cb43cca20c20a9d9c2")
    const onClickHandler=()=>{
        setVisible(!visible)
    }
    if(!isLoading){
        return(
            <nav className='menu'>
                <div 
                    className={`menu__button-wrapper --${visible?"cross":"hamburguer"}`}
                    onClick={onClickHandler}
                >
                    <button className="menu__button">
                    </button>
                </div>
              
                <ul className={`menu__list --${visible?"visible":"hidden"}`}>
                    <li>
                        <form className='search-form'>
                            <input type="text"
                                className='search-form__text'
                                placeholder='search movie...'
                            />
                            <input type="button" className='search-form__button'/>
                        </form>
                    </li>
                   
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Categories</a>
                        <ul className='submenu'>
                            {
                                data.genres.map((genre, index)=>{
                                    return <li key={genre.id}>{genre.name}</li>
                                })
                            }
                            
                        </ul>
                    </li>
                </ul>
            </nav>
           
        )
    }
    
}
export default  Menu;