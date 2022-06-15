import { useState } from 'react';
import '../../css/Menu.css'
function Menu({genreList}){
    const [visible, setVisible]=useState(false);
    const onClickHandler=()=>{
        setVisible(!visible)
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
          
            <ul className={`menu__list --${visible?"visible":"hidden"}`}>
                <li>
                    <form className='search-form'>
                        <input type="text"
                            className='search-form__text'
                            placeholder='Search movie...'
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
                            genreList.map((genre, index)=>{
                                return <li key={genre.id}>{genre.name}</li>
                            })
                        }
                        
                    </ul>
                </li>
            </ul>
        </nav>
       
    )
}
export default  Menu;