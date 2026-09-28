// En /src/App.jsx 
import Bienvenida from './Bienvenida'; // 1. Importamos nuestro componente
import Encabezado from './Encabezado'; // 2. Importamos el componente Encabezado
import CuerpoPosteo from './CuerpoPosteo'; // 3. Importamos el componente CuerpoPosteo
import PieDePosteo from './PieDePosteo'; // 5. Importamos el componente PieDePosteo
import Asistente from "./Asistente"; // 6. Importamos el componente Asistente
    
import './App.css'; 
 
function App() { 
  return ( 
    <div> 
      {/* 2. Lo usamos como si fuera una etiqueta HTML */} 
      const asistentes = [ 
        { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '󰞵' }, 
        { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' }, 
        { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '󰠁' }];
      <Bienvenida /> 
      <Encabezado /> 
      <CuerpoPosteo /> 
      <p>Este es mi primer componente montado en App.jsx</p> 
      <PieDePosteo /> 
    </div> 
  ); 
} 
 
export default function App() {
  const asistentes = [
    { nombre: "Juan Pérez", tarea: "Frontend Developer", emoji: "💻" },
    { nombre: "Ana Gómez", tarea: "Diseñadora UX/UI", emoji: "🎨" },
    { nombre: "Carlos Ruiz", tarea: "Backend Developer", emoji: "🛠️" }
  ];

  return (
    <div>
      <h1>Lista de Asistentes</h1>

      {asistentes.map((persona, index) => (
        <Asistente
          key={index}
          nombre={persona.nombre}
          tarea={persona.tarea}
          emoji={persona.emoji}
        />
      ))}
    </div>
  );
}