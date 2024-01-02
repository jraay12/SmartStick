import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css"; 
import icon from "../assets/images.png";
import { GetLocation } from "../api/axios";
import AuthContext from "../auth/Context";

const Map = () => {
  const { auth } = useContext(AuthContext);
  const { data } = GetLocation(auth.userId);

  const zoom = 13; 

  const customIcon = new L.Icon({
    iconUrl: icon, 
    iconSize: [50, 50], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer center={[8.4706345, 124.6420919]} zoom={zoom} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Array.isArray(data) && data?.map((location, index) => (
        <Marker
          key={location?.id}
          position={[parseFloat(location.latitude), parseFloat(location.longitude)]}
          icon={customIcon}
        >
          <Popup>{index}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
