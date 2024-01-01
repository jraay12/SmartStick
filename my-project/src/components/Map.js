import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import icon from "../assets/images.png";

const Map = () => {
  const position = [8.4703262, 124.6467781]; // Initial center coordinates (London)
  const zoom = 13; // Initial zoom level

  // Create a custom icon
  const customIcon = new L.Icon({
    iconUrl: icon, // Replace with the path to your custom icon
    iconSize: [20, 20], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          A custom icon on the map!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
