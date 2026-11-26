import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px"
      }}
    >
      <Spinner animation="border" />
    </div>
  );
}