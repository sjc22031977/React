// Componente Layout.jsx 
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>Mi E‑commerce</h1>

        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <a href="#">Carrito</a>
        </nav>
      </header>

      <main className="contenido">{children}</main>

      <footer className="footer">
        <p>© 2026 Mi E‑commerce — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}