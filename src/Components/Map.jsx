import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const CurrentLocationMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, []);

  const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CurrentLocationMap;
