import "../css/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="contenedor">
        <p>Redes</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>

      <a href="https://www.facebook.com/">
        {" "}
        <BsFacebook className="Fc" />{" "}
      </a>
      <a href="https://www.instagram.com/">
        {" "}
        <AiFillInstagram className="Inst" />{" "}
      </a>
      <a href="https://twitter.com/">
        {" "}
        <AiFillTwitterCircle className="Twt" />{" "}
      </a>
    </>
  );
};

export default Footer;
