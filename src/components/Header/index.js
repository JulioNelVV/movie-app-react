import Logo from "../Logo/";
import Menu from "../Menu/"
import './style.css'
function Header({headerRef, genresList}){
    return(
        <header ref={headerRef} className="header">
            <Logo/>
            <Menu genresList={genresList}/>
        </header>
    )
}
export default Header;