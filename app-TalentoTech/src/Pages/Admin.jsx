import {
  useEffect,
  useState,
} from "react";

import {
  getProducts,
  deleteProduct,
} from "../services/productsService";

import ProductForm from "../components/ProductForm";
import Loader from "../components/Loader";

import "../styles/admin.css";

export default function Admin() {
  const [products,
    setProducts] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState("");

  const loadProducts =
    async () => {
      try {
        setLoading(true);

        const data =
          await getProducts();

        setProducts(data);
      } catch {
        setError(
          "Error al obtener productos"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete =
    async (id) => {
      if (
        !window.confirm(
          "¿Eliminar producto?"
        )
      ) {
        return;
      }

      try {
        await deleteProduct(id);

        loadProducts();
      } catch {
        setError(
          "Error al eliminar"
        );
      }
    };

  if (loading)
    return <Loader />;

  return (
    <div className="admin-container">
      <h1>
        Panel de Administración
      </h1>

      <ProductForm
        onSuccess={
          loadProducts
        }
      />

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {products.map(
        (product) => (
          <div
            key={product.id}
            className="admin-product"
          >
            {product.imagen && (
              <img
                src={product.imagen}
                alt={product.nombre}
                className="admin-product-image"
              />
            )}

            <div>
              <h3>
                {product.nombre}
              </h3>

              <p>
                ${product.precio}
              </p>
            </div>

            <div className="admin-buttons">
              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(
                    product.id
                  )
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}