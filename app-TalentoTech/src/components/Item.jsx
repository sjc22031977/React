// src/components/Item.jsx
export default function Item({ producto, onClick }) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", cursor: "pointer" }}
      onClick={onClick}
    >
      <img src={producto.imagen} alt={producto.nombre} style={{ width: "200px" }} />
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
}
