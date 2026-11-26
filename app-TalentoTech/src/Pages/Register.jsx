import {
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../services/firebase";

import {
  useNavigate,
} from "react-router-dom";

export default function Register() {
  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const navigate =
    useNavigate();

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        navigate("/");
      } catch {
        setError(
          "Error al crear usuario"
        );
      }
    };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h1>Registro</h1>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button type="submit">
        Registrarse
      </button>
    </form>
  );
}