import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { Context } from "../..";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from "react-bootstrap/Dropdown";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {  
    setInfo(info.filter(i=> i.number !== number))
  }

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
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className="mt-3"
            placeholder="Введите название устройства"
            type="number"
          ></Form.Control>

          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          ></Form.Control>

          <Form.Control className="mt-3" type="file"></Form.Control>

          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            {" "}
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number}>
              <Col md={4} className="mt-2">
                <Form.Control placeholder="Введите название характеристики"></Form.Control>
              </Col>

              <Col md={4} className="mt-4">
                <Form.Control placeholder="Введите описание"></Form.Control>
              </Col>

              <Col md={4} className="mt-4">
                <Button variant="outline-danger" onClick={()=> removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer placeholder={"Введите название типа"}>
        <Button variant="">Закрыть</Button>
        <Button variant="">Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
