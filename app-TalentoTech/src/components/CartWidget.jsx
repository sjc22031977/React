// src/components/CartWidget.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" style={{ position: "relative" }}>
      🛒
      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-10px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "0.8rem"
        }}
      >
        {totalItems}
      </span>
    </Link>
  );
}
