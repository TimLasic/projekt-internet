import React from "react";
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    )
}

export default Map