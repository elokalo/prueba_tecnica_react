import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux";

function Detalle() {
  
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  console.log(modalState);

  return (
    <div>
       <Modal show={modalState.show} onHide={()=>{dispatch(closeModal())}}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>ID - {modalState.user?.name}</p>
            <p>Nombre - {modalState.user?.name}</p>
            <p>Username - {modalState.user?.username}</p>
            <p>Email - {modalState.user?.email}</p>
            <p>Telefono - {modalState.user?.phone}</p>
            <p>Ciudad - {modalState.user?.address?.city}</p>
            <p>Compañia - {modalState.user?.company?.name}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{dispatch(closeModal())}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Detalle;
