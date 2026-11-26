import { Link } from "react-router-dom";

import "../styles/item.css";

export default function ProductCard({
  product,
}) {

  return (
    <div className="product-card">
      <img
        src={product.imagen}
        alt={product.nombre}
      />

      <h3>{product.nombre}</h3>

      <p>${product.precio}</p>

      <Link
        to={`/producto/${product.id}`}
      >
        Ver detalle
      </Link>
    </div>
  );
}