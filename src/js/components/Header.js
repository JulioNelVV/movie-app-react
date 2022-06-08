import Logo from "./Logo";
import Menu from "./Menu"
import '../../css/Header.css'
function Header(){
    return(
        <header className="header">
            <Logo/>
            <Menu/>
        </header>
    )
}
export default Header;