import { useParams } from "react-router-dom";

export default function DetalleProducto() {
  const { id } = useParams();

  const productos = [
    {
      id: 1,
      nombre: "Auriculares Gamer RGB",
      precio: 24999,
      descripcion: "Auriculares con sonido envolvente y luces RGB.",
      imagen: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      nombre: "Mouse Inalámbrico Pro",
      precio: 18999,
      descripcion: "Mouse de alta precisión con batería de larga duración.",
      imagen: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      nombre: "Teclado Mecánico Azul",
      precio: 34999,
      descripcion: "Teclado mecánico con switches azules y retroiluminación.",
      imagen: "https://via.placeholder.com/300"
    }
  ];

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "300px", borderRadius: "12px" }} />
      <h2>{producto.nombre}</h2>
      <p style={{ fontSize: "1.2rem" }}>{producto.descripcion}</p>
      <p style={{ color: "#FF6F61", fontWeight: "bold", fontSize: "1.4rem" }}>
        ${producto.precio}
      </p>
    </div>
  );
}
