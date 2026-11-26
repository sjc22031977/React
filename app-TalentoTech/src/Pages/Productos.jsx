import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { getProducts } from "../services/productsService";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CustomPagination from "../components/Pagination";
import Loader from "../components/Loader";

import "../styles/productos.css";

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);

      setError(
        "No se pudieron cargar los productos."
      );
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.nombre
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  const lastIndex =
    currentPage * productsPerPage;

  const firstIndex =
    lastIndex - productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      firstIndex,
      lastIndex
    );

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>Productos</title>

        <meta
          name="description"
          content="Catálogo completo de productos."
        />
      </Helmet>

      <div className="productos-container">
        <h1>Catálogo de Productos</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        {filteredProducts.length === 0 ? (
          <p>
            No se encontraron productos.
          </p>
        ) : (
          <>
            <div className="products-grid">
              {currentProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}
            </div>

            <CustomPagination
              totalProducts={
                filteredProducts.length
              }
              productsPerPage={
                productsPerPage
              }
              currentPage={
                currentPage
              }
              setCurrentPage={
                setCurrentPage
              }
            />
          </>
        )}
      </div>
    </>
  );
}