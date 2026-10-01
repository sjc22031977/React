// src/components/Footer.jsx
export default function Footer() {
  const equipo = [
    { nombre: "Santiago", rol: "Frontend Dev" },
    { nombre: "Ana", rol: "UX Designer" },
    { nombre: "Luis", rol: "Backend Dev" }
  ];

  return (
    <footer style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #ddd" }}>
      <p>© 2026 Mi Ecommerce S.A. - Soluciones digitales para tu negocio.</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {equipo.map((p) => (
          <div key={p.nombre} style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
            <h4>{p.nombre}</h4>
            <p>{p.rol}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}
