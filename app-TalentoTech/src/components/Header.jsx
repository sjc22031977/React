// src/components/Header.jsx
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <h1>Mi Ecommerce</h1>
      <NavBar />
    </header>
  );
}
