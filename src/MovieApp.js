import { useContext, useEffect, useRef, useState } from "react";
import { Router } from "wouter";
import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Slider from "./components/Slider";
import useHashLocation from "./hooks/useHashLocation";
import globalContext from "./context/globalContext";
import DetailView from "./views/DetailView";
import "./MovieApp.css";
import Footer from "./components/Footer";
import GeneralView from "./views/GeneralView";
import NotFound from "./views/NotFound";
function MovieApp() {
  const headerRef = useRef(null);
  const movieDescriptionRef = useRef(null);
  const [slider, setSlider] = useState("flex");
  const {sliderDisplay, setSliderDisplay}=useContext(globalContext)
  const changeHeaderBackground = (entries) => {
    const [entry] = entries;
    console.log(entry.isIntersecting)
    console.log(sliderDisplay)
    if (entry.isIntersecting) {
      headerRef.current.style.backgroundColor = "transparent";
    } else {
      headerRef.current.style.backgroundColor = "#000";
    }
  };
  const IntersectionObserverOptions = {
    root: null,
    rootMargin: "0px 0px 150px 0px",
    threshold: 0.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      changeHeaderBackground,
      IntersectionObserverOptions
    );
    observer.observe(movieDescriptionRef.current);
    return () => {
      if (headerRef.current) observer.unobserve(movieDescriptionRef.current);
    };
  }, []);

  return (
    <globalContext.Provider
      value={{
        sliderDisplay:slider,
        setSliderDisplay:setSlider,
      }}
    >
      <Router hook={useHashLocation}>
        <Header headerRef={headerRef} />
        <Slider
          movieDescriptionRef={movieDescriptionRef}
          delay={3000}
          length={4}
          controls={true}
          indicators={true}
          info={true}
          indicatorShape="circle"
        />

        <Switch>
          <Route path="/" component={GeneralView} />
          <Route path="/home/:page" component={GeneralView} />
          <Route
            path="/genre/:genre_name/:genre_id/:page"
            component={GeneralView}
          />
          <Route path="/search/:keyword/:page" component={GeneralView} />
          <Route path="/detail/:movie_name/:movie_id" component={DetailView} />
          <Route component={NotFound}>Hola 404</Route>
        </Switch>
        <Footer />
      </Router>
    </globalContext.Provider>
  );
}

export default MovieApp;
