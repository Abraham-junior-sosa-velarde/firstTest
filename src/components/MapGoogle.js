import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";
import React from "react";
import { Modal } from "antd";
import { Map } from "leaflet";

const MapGoogle = ({ status, setModalMap, data }) => {
  const position = data;
  return (
    <Modal
      width={1000}
      open={status}
      onOk={() => {
        setModalMap(false);
      }}
      onCancel={() => {
        setModalMap(false);
      }}
    >
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </Modal>
  );
};

export default MapGoogle;
