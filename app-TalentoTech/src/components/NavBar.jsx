import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

import "../styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2>E-Commerce</h2>

      <div className="nav-links">
        <Link to="/">Inicio</Link>

        <Link to="/productos">
          Productos
        </Link>

        <Link to="/admin">
          Admin
        </Link>

        <Link to="/profile">
          Perfil
        </Link>

        <CartWidget />
      </div>
    </nav>
  );
}