import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Modal from 'react-bootstrap/Modal';
import Form from './Form';

const BootstrapModal = ({onAdd}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className='d-flex justify-content-center'>
    <Button classes='btn btn-primary' text='Add New Task' onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Task to the list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onAdd={onAdd}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default BootstrapModal;