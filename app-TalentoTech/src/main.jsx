import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx';
import Inicio from "./Inicio";
import DetalleProducto from "./DetalleProducto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Route>
    </Routes>
  </BrowserRouter>
);