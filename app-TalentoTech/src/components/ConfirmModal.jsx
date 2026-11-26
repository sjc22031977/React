import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmModal({
  show,
  handleClose,
  handleConfirm,
}) {

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
          Confirmar eliminación
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        ¿Está seguro de eliminar este producto?
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancelar
        </Button>

        <Button
          variant="danger"
          onClick={
            handleConfirm
          }
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}