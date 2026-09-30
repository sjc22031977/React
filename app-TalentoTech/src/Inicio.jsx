import TarjetaProducto from "./TarjetaProducto";
import { Link } from "react-router-dom";

export default function Inicio() {
  const productosDestacados = [
    {
      id: 1,
      nombre: "Auriculares Gamer RGB",
      precio: 24999,
      imagen: "https://via.placeholder.com/220"
    },
    {
      id: 2,
      nombre: "Mouse Inalámbrico Pro",
      precio: 18999,
      imagen: "https://via.placeholder.com/220"
    },
    {
      id: 3,
      nombre: "Teclado Mecánico Azul",
      precio: 34999,
      imagen: "https://via.placeholder.com/220"
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Productos Destacados</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "30px"
      }}>
        {productosDestacados.map((p) => (
          <Link key={p.id} to={`/producto/${p.id}`} style={{ textDecoration: "none" }}>
            <TarjetaProducto
              nombre={p.nombre}
              precio={p.precio}
              imagen={p.imagen}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
