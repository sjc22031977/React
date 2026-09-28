// Componente TarjetaProducto.jsx 
import styles from "./TarjetaProducto.module.css";

export default function TarjetaProducto({ nombre, precio, imagen }) {
  const [esFavorito, setEsFavorito] = useState(false);

  function marcarComoFavorito() {
    setEsFavorito(!esFavorito);
  }

  function agregarAlCarrito() {
    setAgregado(true);
  }

  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} className={styles.imagen} />

      <h3>{nombre}</h3>
      <p className={styles.precio}>${precio}</p>

      <button onClick={agregarAlCarrito} className={styles.boton}>
        {agregado ? "Agregado ✔" : "Agregar al carrito"}
      </button>

      <span
        onClick={marcarComoFavorito}
        style={{ fontSize: "26px", cursor: "pointer" }}
      >
        {esFavorito ? "⭐" : "☆"}
      </span>
    </div>
  );
}