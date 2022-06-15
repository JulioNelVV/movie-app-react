import Logo from "./Logo";
import Menu from "./Menu"
import '../../css/Header.css'
function Header({headerRef, genresList}){
    return(
        <header ref={headerRef} className="header">
            <Logo/>
            <Menu genresList={genresList}/>
        </header>
    )
}
export default Header;