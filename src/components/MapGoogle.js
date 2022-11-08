import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";
import React from "react";
import { Modal } from "antd";

const MapGoogle = ({ status, setModalMap, data }) => {
  const position = data;

  return (
    <Modal
      open={status}
      onOk={() => {
        setModalMap(false);
      }}
      onCancel={() => {
        setModalMap(false);
      }}
    >
      <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </Modal>
  );
};

export default MapGoogle;
