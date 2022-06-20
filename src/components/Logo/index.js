import logo from '../../assets/images/logo.svg'
import './style.css'
function Logo(){
    return(
        <div className="logo">
            <img 
                className="logo__img" 
                src={logo}
                alt="logo" 
            />
            <span className="logo__title">Movie App</span>
        </div>
    )
}
export default Logo;