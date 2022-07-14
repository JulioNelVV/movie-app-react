import { useLocation } from "wouter";
import logo from "../../assets/images/logo.svg";
import style from "./style.module.css";

function Logo() {
  const [location, setLocation] = useLocation();
  const onClickHandler = () => {
    setLocation("/home/1");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={style.logo} onClick={onClickHandler}>
      <img className={style.logo__img} src={logo} alt="logo" />
      <span className={style.logo__title}>Movie App</span>
    </div>
  );
}
export default Logo;
