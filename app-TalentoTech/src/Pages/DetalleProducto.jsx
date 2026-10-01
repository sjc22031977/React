// src/pages/DetalleProducto.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setProducto(found);
      });
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "250px" }} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
    </div>
  );
}
