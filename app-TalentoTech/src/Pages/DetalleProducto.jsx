import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  getProductById,
} from "../services/productsService";

import {
  useCart,
} from "../context/CartContext";

import Loader from "../components/Loader";

export default function DetalleProducto() {
  const { id } = useParams();

  const { addToCart } =
    useCart();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct =
    async () => {
      try {
        const data =
          await getProductById(id);

        setProduct(data);
      } catch (err) {
        setError(
          "Error al cargar producto"
        );
      } finally {
        setLoading(false);
      }
    };

  if (loading) return <Loader />;

  if (error) {
    return (
      <p className="error-message">
        {error}
      </p>
    );
  }

  return (
    <div className="product-detail">
      <img
        src={product.imagen}
        alt={product.nombre}
      />

      <h2>{product.nombre}</h2>

      <p>
        {product.descripcion}
      </p>

      <h3>
        ${product.precio}
      </h3>

      <button
        className="btn"
        onClick={() =>
          addToCart(product)
        }
      >
        Agregar al carrito
      </button>
    </div>
  );
}