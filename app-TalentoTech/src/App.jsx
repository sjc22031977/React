import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import Inicio from "./Pages/Inicio";
import Productos from "./Pages/Productos";
import DetalleProducto from "./Pages/DetalleProducto";
import Carrito from "./Pages/Carrito";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";

// Protected Routes
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* HOME */}
        <Route index element={<Inicio />} />

        {/* PRODUCTOS */}
        <Route
          path="productos"
          element={<Productos />}
        />

        {/* DETALLE */}
        <Route
          path="producto/:id"
          element={<DetalleProducto />}
        />

        {/* CARRITO */}
        <Route
          path="carrito"
          element={<Carrito />}
        />

        {/* LOGIN */}
        <Route
          path="login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="register"
          element={<Register />}
        />

        {/* PROFILE PROTEGIDO */}
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ADMIN PROTEGIDO */}
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                padding: "3rem",
              }}
            >
              <h1>404</h1>
              <p>Página no encontrada</p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;