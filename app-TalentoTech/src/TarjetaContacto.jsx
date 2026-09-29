import "./TarjetaContacto.css";

export default function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <div className="tarjeta">
      <img src={foto} alt={nombre} className="foto" />
      <h3>{nombre}</h3>
      <p className="puesto">{puesto}</p>
      <p className="email">{email}</p>
    </div>
  );
}
