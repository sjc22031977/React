// src/components/ItemListContainer.jsx
import { useEffect, useState } from "react";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Catálogo de productos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {productos.map((p) => (
          <Item
            key={p.id}
            producto={p}
            onClick={() => navigate(`/producto/${p.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
