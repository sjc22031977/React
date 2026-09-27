// En /src/App.jsx 
import Bienvenida from './Bienvenida'; // 1. Importamos nuestro componente
import Encabezado from './Encabezado'; // 2. Importamos el componente Encabezado
import CuerpoPosteo from './CuerpoPosteo'; // 3. Importamos el componente CuerpoPosteo
import PieDePosteo from './PieDePosteo'; // 4. Importamos el componente PieDePosteo
    
import './App.css'; 
 
function App() { 
  return ( 
    <div> 
      {/* 2. Lo usamos como si fuera una etiqueta HTML */} 
      <Bienvenida /> 
      <Encabezado /> 
      <CuerpoPosteo /> 
      <p>Este es mi primer componente montado en App.jsx</p> 
      <PieDePosteo /> 
    </div> 
  ); 
} 
 
export default App; 