export default function ProductForm({
  nombre,
  setNombre,
  precio,
  setPrecio,
  setImagen,
  loading,
  handleFormSubmit
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImagen(e.target.files[0])}
      />

      {/* 👉 BOTÓN DINÁMICO */}
      <button type="submit" disabled={loading}>
        {loading ? "Subiendo..." : "Crear producto"}
      </button>
    </form>
  );
}
