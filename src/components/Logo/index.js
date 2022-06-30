import logo from '../../assets/images/logo.svg'
import style from './style.module.css'
function Logo(){
    return(
        <div className={style.logo}>
            <img 
                className={style.logo__img} 
                src={logo}
                alt="logo" 
            />
            <span className={style.logo__title}>Movie App</span>
        </div>
    )
}
export default Logo;