// En /src/App.jsx 
import Bienvenida from './Bienvenida'; // 1. Importamos nuestro componente
import Encabezado from './Encabezado'; // 2. Importamos el componente Encabezado
import CuerpoPosteo from './CuerpoPosteo'; // 3. Importamos el componente CuerpoPosteo
import PieDePosteo from './PieDePosteo'; // 5. Importamos el componente PieDePosteo
import Asistente from "./Asistente"; // 6. Importamos el componente Asistente
    
import "./App.css";
import Layout from "./Layout";
import TarjetaProducto from "./TarjetaProducto";

export default function App() {
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
    <Layout>
      <div className="catalogo">
        {productos.map((p, index) => (
          <TarjetaProducto
            key={index}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
          />
        ))}
      </div>
    </Layout>
  );
}
