import { useState } from "react";
import ProductForm from "./ProductForm";

export default function NewProductContainer() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);

  // 👉 NUEVO ESTADO DE CARGA
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();

    // 👉 ACTIVAR LOADING
    setLoading(true);

    try {
      // Simulación de subida de imagen
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("precio", precio);
      formData.append("imagen", imagen);

      await new Promise((resolve) => setTimeout(resolve, 2000)); // simula upload

      console.log("Producto subido con éxito");
    } catch (error) {
      console.error("Error al subir el producto:", error);
    } finally {
      // 👉 DESACTIVAR LOADING SIEMPRE
      setLoading(false);
    }
  }

  return (
    <ProductForm
      nombre={nombre}
      setNombre={setNombre}
      precio={precio}
      setPrecio={setPrecio}
      setImagen={setImagen}

      // 👉 PASAR LOADING COMO PROP
      loading={loading}
      handleFormSubmit={handleFormSubmit}
    />
  );
}
