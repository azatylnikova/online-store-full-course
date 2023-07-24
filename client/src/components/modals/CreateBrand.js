import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Form, Button} from "react-bootstrap";


const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавить новый тип
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Form>
        <Form.Control>

        </Form.Control>
      </Form>
        </Modal.Body>
        <Modal.Footer
        
          placeholder={'Введите название типа'}>
          <Button variant='' >Закрыть</Button>
          <Button variant='' >Добавить</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CreateBrand;