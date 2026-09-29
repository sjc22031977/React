import { useEffect, useState } from "react";
import TarjetaContacto from "./TarjetaContacto";
import "./Directorio.css";

export default function Directorio() {
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

  if (cargando) {
    return <p className="mensaje">Cargando equipo...</p>;
  }

  if (error) {
    return <p className="mensaje error">Error: {error}</p>;
  }

  return (
    <div className="grilla-contactos">
      {nosotros.map((persona) => (
        <TarjetaContacto
          key={persona.id}
          nombre={persona.nombre}
          email={persona.email}
          puesto={persona.puesto}
          foto={persona.foto}
        />
      ))}
    </div>
  );
}
