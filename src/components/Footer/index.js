import Logo from "../Logo/";
import TMDB from "../../assets/images/tmdb.svg";
import "./style.css";
function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <a className="tmdb-link" href="https://www.themoviedb.org/?language=es" target={"_blank"}>
        Data from: <img className="tmdb-img" src={TMDB} />
      </a>
      <p> &copy; Julio Nel Web Developer</p>
      <div className="contact-info">
        <a href="https://www.linkedin.com/in/julio-nel-v%C3%A1squez-vanegas/" target={"_blank"} className="linkedin">
          <i className="icons linkedin__icon"></i>Julio Nel Vásquez Vanegas
        </a>
        <p className="email-address">
          <i className="icons email-address__icon"></i>julionelvasquezvanegas@gmail.com 
        </p>
        <p className="phone-number">
          <i className="icons phone-number__icon"></i>+57 313 4276099
        </p>
      </div>
    </footer>
  );
}
export default Footer;
