// src/components/NavBar.jsx
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
      <CartWidget />
    </nav>
  );
}
