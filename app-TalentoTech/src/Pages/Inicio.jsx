// src/pages/Inicio.jsx
import ItemListContainer from "../components/ItemListContainer";
import "../styles/inicio.css";

export default function Inicio() {
  return (
    <div>
      <h2>Bienvenido a Mi Ecommerce</h2>
      <p>Descubrí nuestros productos destacados.</p>
      <ItemListContainer />
    </div>
  );
}