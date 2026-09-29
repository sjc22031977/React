// En /src/App.jsx 
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // -----------------------------
  // ESTADOS DEL DIRECTORIO
  // -----------------------------
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");
        return res.json();
      })
      .then((data) => {
        setNosotros(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  // -----------------------------
  // CATÁLOGO DE PRODUCTOS
  // -----------------------------
  const productos = [
    {
      nombre: "Auriculares Gamer RGB",
      precio: 24999,
      imagen: "https://via.placeholder.com/220"
    },
    {
      nombre: "Mouse Inalámbrico Pro",
      precio: 18999,
      imagen: "https://via.placeholder.com/220"
    },
    {
      nombre: "Teclado Mecánico Azul",
      precio: 34999,
      imagen: "https://via.placeholder.com/220"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ----------------------------- */}
      {/* HEADER */}
      {/* ----------------------------- */}
      <header
        style={{
          background: "#1E1E1E",
          color: "white",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1>Mi E‑commerce + Directorio TalentoLab</h1>

        <nav style={{ marginTop: "10px" }}>
          <a href="#" style={{ color: "#FF6F61", margin: "0 12px" }}>Inicio</a>
          <a href="#" style={{ color: "#FF6F61", margin: "0 12px" }}>Productos</a>
          <a href="#" style={{ color: "#FF6F61", margin: "0 12px" }}>Directorio</a>
        </nav>
      </header>

      {/* ----------------------------- */}
      {/* CATÁLOGO DE PRODUCTOS */}
      {/* ----------------------------- */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Catálogo de Productos
        </h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {productos.map((p, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "12px",
                width: "240px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3>{p.nombre}</h3>
              <p style={{ color: "#FF6F61", fontWeight: "bold" }}>${p.precio}</p>
            </div>
          ))}
        </div>

        {/* ----------------------------- */}
        {/* DIRECTORIO TALENTOLAB */}
        {/* ----------------------------- */}
        <h2 style={{ textAlign: "center", margin: "40px 0 20px" }}>
          Nuestro Equipo (TalentoLab)
        </h2>

        {cargando && (
          <p style={{ textAlign: "center", padding: "20px" }}>Cargando equipo...</p>
        )}

        {error && (
          <p style={{ textAlign: "center", padding: "20px", color: "red" }}>
            Error: {error}
          </p>
        )}

        {!cargando && !error && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px"
            }}
          >
            {nosotros.map((persona) => (
              <div
                key={persona.id}
                style={{
                  background: "#ffffff",
                  padding: "16px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={persona.foto}
                  alt={persona.nombre}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px"
                  }}
                />
                <h3>{persona.nombre}</h3>
                <p style={{ fontWeight: "bold", color: "#555" }}>{persona.puesto}</p>
                <p style={{ fontSize: "0.9rem", color: "#777" }}>{persona.email}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ----------------------------- */}
      {/* FOOTER */}
      {/* ----------------------------- */}
      <footer
        style={{
          background: "#1E1E1E",
          color: "white",
          textAlign: "center",
          padding: "16px",
          marginTop: "20px"
        }}
      >
        © 2026 Mi E‑commerce + TalentoLab
      </footer>
    </div>
  );
}
