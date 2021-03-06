import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import globalContext from "../context/globalContext";
import useFetch from "./useFetch";
import style from "../components/Menu/style.module.css";
import Error from "../components/Error";
const useMenu = () => {
  const menuList = useRef();
  const inputSearch = useRef();
  const API_KEY = "583ad481a868c7cb43cca20c20a9d9c2";
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
  let submenu;
  //Controls visibility of the menu list
  const [visible, setVisible] = useState(false);
  //Movie that is being search in the form
  const [movie, setMovie] = useState("");
  const [location, setLocation] = useLocation();
  const { data, isLoading, error } = useFetch(URL);
  const { setSliderDisplay } = useContext(globalContext);
  const goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const toggleVisible = () => {
    setVisible(!visible);
  };
  const onClickGenre = () => {
    setSliderDisplay("flex");
    setVisible(false);
    goTop();
  };
  const onChangeHandler = () => {
    setMovie(inputSearch.current.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSliderDisplay("none");
    setLocation(`/search/${movie}/${1}`);
    setMovie("");
    toggleVisible();
    goTop();
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (!isLoading) {
        if (window.screen.width > 768) {
          menuList.current.classList.remove(style["menu-list--show"]);
          setVisible(false);
        }
      }
    });
  }, [window.screen.width]);
  useEffect(() => {
    if (!isLoading && visible) {
      menuList.current.classList.add(style["menu-list--show"]);
      menuList.current.classList.remove(style["menu-list--hide"]);
    }
    if (!isLoading && !visible) {
      menuList.current.classList.remove(style["menu-list--show"]);
      menuList.current.classList.add(style["menu-list--hide"]);
      setTimeout(() => {
        menuList.current.classList.remove(style["menu-list--hide"]);
      }, 800);
    }
  }, [visible]);

  if (!isLoading && error !== null) {
    submenu = <Error error={error} />;
  }
  if (!isLoading && error === null) {
    submenu = data.genres.map((genre) => {
      return (
        <li key={genre.id} className={style["submenu__item"]}>
          <Link
            onClick={onClickGenre}
            to={`/genre/${genre.name}/${genre.id}/${1}`}
          >
            <a className={style["submenu__link"]}>{genre.name}</a>
          </Link>
        </li>
      );
    });
  }

  return {
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
    goTop,
  };
};
export default useMenu;
