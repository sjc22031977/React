import { Helmet } from "react-helmet-async";

import ItemListContainer from "../components/ItemListContainer";

import "../styles/inicio.css";

export default function Inicio() {
  return (
    <>
      <Helmet>
        <title>Inicio</title>
        <meta
          name="description"
          content="Bienvenido a nuestra tienda online"
        />
      </Helmet>

      <div className="inicio-container">
        <h1>Bienvenido a Mi E-Commerce</h1>

        <p>
          Descubrí nuestros productos destacados.
        </p>

        <ItemListContainer />
      </div>
    </>
  );
}