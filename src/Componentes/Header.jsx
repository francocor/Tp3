import foto from "../Imagenes/Franco.jpg";
import "../css/Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
/*import {Link} from "react-router-dom"*/

export const Header = () => {
  return (
    <div>


      <div className="Foto1">
      <img src={foto} alt="" className="Foto" />
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
      </div>

      <div>
      <Navbar className="navbar">
            <Container>
                <Nav>
                    <Nav.Link className="navlink btn-dark" href="/">Home</Nav.Link>
                    <Nav.Link className="navlink btn-dark" href="/Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>

      <div className="contenedor">
        <p>Franco</p>
        <ul>
          <li>Cornejo</li>
          <li>Cornejo</li>
          <li>Cornejo</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
