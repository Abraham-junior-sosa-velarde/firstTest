import { Button, Col, Image, Modal, Row, Spin, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateInput from "../components/CreateInput";
import MapGoogle from "../components/MapGoogle";

const CrudContainer = () => {
  const { globalState, crudStore } = useSelector((store) => store);
  const [modalState, setModalState] = useState(false);
  const [mapModal, setMapModal] = useState(false);
  const [dataLocaction, setDataLocaction] = useState(false);

  const columns = [
    {
      title: "image",
      dataIndex: "image",
      render: (_, record) => <Image width={200} src={record.image} />,
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "location",
      dataIndex: "location",
      key: "location",
      render: (_, record) => (
        <Button
          onClick={() => {
            openMapLocation(record.location);
          }}
          type="primary"
        >
          Ubicar{" "}
        </Button>
      ),
    },
  ];
  const openMapLocation = (data) => {
    setDataLocaction(data.split(","));
    setMapModal(true);
  };
  const openModalAdd = () => {
    setModalState(true);
  };

  return (
    <>
      <Row justify="center">
        <Col xl={10} lg={10} md={20} sm={20} xs={20}>
          <Spin spinning={globalState.loader}>
            <Table
              columns={columns}
              dataSource={crudStore.data}
              rowKey={(record) => record.id}
            />
          </Spin>
        </Col>
      </Row>
      <Row justify="center">
        <Col xl={10} lg={10} md={20} sm={20} xs={20}>
          <Button type="primary" onClick={openModalAdd}>
            Agregar{" "}
          </Button>
        </Col>
      </Row>
      <CreateInput status={modalState} setModalState={setModalState} />
      <MapGoogle
        status={mapModal}
        setModalMap={setMapModal}
        data={dataLocaction}
      />
    </>
  );
};

export default CrudContainer;
