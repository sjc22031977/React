// src/pages/Carrito.jsx
import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <h2>Tu carrito está vacío</h2>;
  }

  const total = cart.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.map((p) => (
        <div key={p.id} style={{ borderBottom: "1px solid #ddd", padding: "0.5rem 0" }}>
          <h4>{p.nombre}</h4>
          <p>Cantidad: {p.cantidad}</p>
          <p>Subtotal: ${p.precio * p.cantidad}</p>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
