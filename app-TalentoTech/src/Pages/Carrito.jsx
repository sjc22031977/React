import {
  useCart,
} from "../context/CartContext";

export default function Carrito() {
  const {
    cart,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <div>
      <h1>
        Carrito de Compras
      </h1>

      {cart.length === 0 ? (
        <p>
          Tu carrito está vacío
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <h3>
                {item.nombre}
              </h3>

              <p>
                Cantidad:
                {item.quantity}
              </p>

              <p>
                $
                {item.precio *
                  item.quantity}
              </p>

              <button
                onClick={() =>
                  removeFromCart(
                    item.id
                  )
                }
              >
                Eliminar
              </button>
            </div>
          ))}

          <h2>
            Total: $
            {totalPrice}
          </h2>

          <button
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}