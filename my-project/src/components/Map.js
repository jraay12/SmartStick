import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import icon from "../assets/images.png";
import { GetLocation } from "../api/axios";
import AuthContext from "../auth/Context";

const Map = () => {
  const { auth } = useContext(AuthContext);
  const { data } = GetLocation(auth.userId);
  console.log(data);

  const zoom = 13; // Initial zoom level

  // Create a custom icon
  const customIcon = new L.Icon({
    iconUrl: icon, // Replace with the path to your custom icon
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

  return (
    <MapContainer center={[8.4706345, 124.6420919]} zoom={zoom} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data?.map((location, index) => (
        <Marker
          key={index}
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
