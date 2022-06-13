import Logo from "./Logo";
import Menu from "./Menu"
import '../../css/Header.css'
function Header({headerRef}){
    return(
        <header ref={headerRef} className="header">
            <Logo/>
            <Menu/>
        </header>
    )
}
export default Header;