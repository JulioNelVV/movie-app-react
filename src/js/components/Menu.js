import { useState } from 'react';
import '../../css/Menu.css'
function Menu(){
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
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Categories</a>
                    <ul className='submenu'>
                        <li>Category 1</li>
                        <li>Category 2</li>
                    </ul>
                </li>
            </ul>
        </nav>
       
    )
}
export default  Menu;