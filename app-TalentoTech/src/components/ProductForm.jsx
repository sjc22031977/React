import { useState } from "react";

import {
  createProduct,
} from "../services/productsService";

import "../styles/product-form.css";

export default function ProductForm({
  onSuccess,
}) {

  const [nombre, setNombre] =
    useState("");

  const [precio, setPrecio] =
    useState("");

  const [descripcion,
    setDescripcion] =
    useState("");

  const [imagen,
    setImagen] =
    useState("");

  const [error, setError] =
    useState("");

  const [success,
    setSuccess] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setError("");
      setSuccess("");

      if (!nombre.trim()) {
        setError(
          "El nombre es obligatorio"
        );
        return;
      }

      if (precio <= 0) {
        setError(
          "Precio inválido"
        );
        return;
      }

      try {

        await createProduct({
          nombre,
          precio:
            Number(precio),
          descripcion,
          imagen,
        });

        setSuccess(
          "Producto agregado correctamente"
        );

        setNombre("");
        setPrecio("");
        setDescripcion("");
        setImagen("");

        onSuccess();
      }
      catch {
        setError(
          "Error al guardar producto"
        );
      }
    };

  return (
    <form
      className="product-form"
      onSubmit={
        handleSubmit
      }
    >

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {success && (
        <p className="success-message">
          {success}
        </p>
      )}

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) =>
          setPrecio(
            e.target.value
          )
        }
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(
            e.target.value
          )
        }
      />

      <input
        placeholder="Imagen URL"
        value={imagen}
        onChange={(e) =>
          setImagen(
            e.target.value
          )
        }
      />

      <button type="submit">
        Guardar
      </button>

    </form>
  );
}