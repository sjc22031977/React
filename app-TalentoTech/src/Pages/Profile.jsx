import {
  useAuth,
} from "../context/AuthContext";

export default function Profile() {
  const { user, logout } =
    useAuth();

  return (
    <div>
      <h1>Mi Perfil</h1>

      <p>
        <strong>Email:</strong>{" "}
        {user?.email}
      </p>

      <button
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </div>
  );
}