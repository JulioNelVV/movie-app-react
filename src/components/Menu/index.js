import { Link } from "wouter";
import useMenu from "../../hooks/useMenu";
import style from "./style.module.css";

function Menu() {
  //Menu custom hook
  let {
    isLoading,
    submenu,
    visible,
    menuList,
    inputSearch,
    movie,
    setVisible,
    toggleVisible,
    onSubmitHandler,
    onChangeHandler,
  } = useMenu();
  //Component rendering
  if (!isLoading) {
    return (
      <nav className={style["menu"]}>
        <div
          className={`${style["menu-button-wrapper"]} ${
            style[`menu-button-wrapper--${visible ? "cross" : "hamburguer"}`]
          }`}
          onClick={toggleVisible}
        >
          <button className={style["menu__button"]}></button>
        </div>
        <ul ref={menuList} className={style["menu-list"]}>
          <li className={style["menu-list__item"]}>
            <form className={style["search-form"]} onSubmit={onSubmitHandler}>
              <input
                type="text"
                className={style["search-form__text"]}
                placeholder="search movie..."
                onChange={onChangeHandler}
                ref={inputSearch}
                value={movie}
              />
              <input type="button" className={style["search-form__button"]} />
            </form>
          </li>
          <li className={style["menu-list__item"]}>
            <Link onClick={() =>{
              setVisible(false)
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
              }} to="/home/1">
              <a className={style["menu-list__link"]}>Home</a>
            </Link>
          </li>
          <li className={style["menu-list__item"]}>
            <a className={style["menu-list__link"]}>Genres</a>
            <ul className={style["submenu"]}>{submenu}</ul>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Menu;
