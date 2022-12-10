import "./Navbar.css"

import {Link} from "react-router-dom"

import { CartWidget } from "../cartWidget/CartWidget"

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dohmmfmx4/image/upload/v1670664871/Sin_t%C3%ADtulo-1_rl9x5p.png"
          alt=""
          />
          </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" >Inicio</Link>
        <Link className="navbar-item" to="/category/ropa" >Ropa</Link>
        <Link className="navbar-item" to="/category/manga" >Mangas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
