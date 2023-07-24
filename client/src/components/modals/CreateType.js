import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Form, Button} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../..';



const CreateType = ({show, onHide}) => {
    const {device} = useContext(Context)

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
      <Dropdown>
        <Dropdown.Toggle>
            Выберите тип
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {device.types.map(type =>
                <Dropdown.Item key={type.id}>
                    {type.name}
                </Dropdown.Item>
                )}
        </Dropdown.Menu>
       </Dropdown>
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

export default CreateType;