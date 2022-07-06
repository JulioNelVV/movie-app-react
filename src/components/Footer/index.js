import Logo from "../Logo/";

import "./style.css";
function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <p>Julio Nel Web Developer</p>
      <div className="contact-info">
        <i className="phone-icon"></i>
        <p className="phone-number">+57 313 #######</p>
      </div>
    </footer>
  );
}
export default Footer;
