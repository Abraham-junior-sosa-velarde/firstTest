import { Col, Modal, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewData } from "../containers/redux/thunk";

const CreateInput = ({ status, setModalState }) => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    image: "",
    name: "",
    location: "",
  });
  const okmodalCreate = () => {
    setModalState(false);
    dispatch(createNewData(inputData));
    setInputData({ image: "", name: "", location: "" });
  };
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const closeModalCancel = () => {
    setModalState(false);
    setInputData({ image: "", name: "", location: "" });
  };
  return (
    <Modal
      open={status}
      onOk={okmodalCreate}
      okText="Agregar"
      cancelText="Cancelar"
      onCancel={() => {
        setModalState(closeModalCancel);
      }}
    >
      <Row justify="center">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <div>
            <label htmlFor="imageLink"> Link de la imagen</label>
            <input
              id="imageLink"
              name="image"
              onChange={handleChange}
              value={inputData.image}
            />
          </div>
          <div>
            <label htmlFor="name">Nombre del animal</label>
            <input
              id="name"
              name="name"
              onChange={handleChange}
              value={inputData.name}
            />
          </div>
          <div>
            <label htmlFor="location">Ubicacion del animal</label>
            <input
              id="location"
              name="location"
              onChange={handleChange}
              value={inputData.location}
            />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default CreateInput;
