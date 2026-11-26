import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <h3>Mi Ecommerce</h3>

      <p>
        Proyecto Final React
      </p>

      <div className="team">
        <div className="card">
          <h4>Santiago</h4>
          <p>Frontend Developer</p>
        </div>

        <div className="card">
          <h4>María</h4>
          <p>UI Designer</p>
        </div>

        <div className="card">
          <h4>Juan</h4>
          <p>Backend Developer</p>
        </div>
      </div>
    </footer>
  );
}