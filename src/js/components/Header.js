import Logo from "./Logo";
import Menu from "./Menu"
import '../../css/Header.css'
function Header({headerRef, genreList}){
    return(
        <header ref={headerRef} className="header">
            <Logo/>
            <Menu genreList={genreList}/>
        </header>
    )
}
export default Header;