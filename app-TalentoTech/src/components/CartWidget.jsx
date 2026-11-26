import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function CartWidget() {

  const { totalItems } = useCart();

  return (
    <Link to="/carrito">
      <FaShoppingCart />

      <span>
        {totalItems}
      </span>
    </Link>
  );
}