import '../../css/Menu.css'
function Menu(){
    return(
        <nav className='menu'>
            <div className='menu__button-wrapper'>
                <button className="menu__button"></button>
            </div>
            
            <ul className="menu__list">
                <li>
                    Home
                </li>
                <li>
                    Categories
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                    </ul>
                </li>
            </ul>
        </nav>
       
    )
}
export default  Menu;