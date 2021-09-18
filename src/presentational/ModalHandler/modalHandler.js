import { Modal } from "react-bootstrap";

const ModalHandler = ({
    component,
    show,
    onHide,

}) => {
    return (
        <Modal size="lg" show={show}
            onHide={onHide}>
            <Modal.Body className="p-0">
                {component}
            </Modal.Body>
        </Modal>
    );
}
export default ModalHandler;