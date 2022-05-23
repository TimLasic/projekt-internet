import React from "react";
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import {Polyline} from "react-leaflet";
import {useContext, useState} from 'react'
import {useEffect} from "react";




const Map = () => {
    const[locations, setLocations] = useState([]);


    useEffect(function () {
        const getLocations = async function () {
            const res = await fetch("https://projekt-glz.herokuapp.com/locations");

            if (res.status === 500) {
                console.log("Empty");
            }
            const data = await res.json();
            setLocations(data);
        }
        getLocations();
    }, []);

    {/*
        const polylines = [
            [46.53443091150867, 15.646113648987532],
            [46.53051367395345, 15.645383632573523],
            [46.5259869313955, 15.647310296958613],
            [46.51958495593285, 15.649797909115746],
        ]
    */}

       // const colorOptions = [{color: 'red'}, {color: 'green'}, {color: 'orange'}, {color: 'orange'}]

    return (
        <MapContainer center={[46.54823977838477, 15.650640310900824]} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locations.map((location,index) => {return index + 1 <= locations.length-1 ?
                    <Polyline key={index} pathOptions={{color: locations[index+1].state}} positions={[[locations[index].latitude,locations[index].longitude],[locations[index+1].latitude,locations[index+1].longitude]]}></Polyline> :
                    <Polyline key={index} pathOptions={{color: locations[index].state}} positions={[[locations[index].latitude,locations[index].longitude],[locations[index].latitude,locations[index].longitude]]}></Polyline>
                })


            }



        </MapContainer>
    )
}

export default Map

            {/*{
                polylines.map((polyline,index) => {return index + 1 <= polylines.length-1 ?
                    <Polyline key={index} pathOptions={colorOptions[index]} positions={[polylines[index],polylines[index+1]]}></Polyline> :
                    <Polyline key={index} pathOptions={colorOptions[index]} positions={[polylines[index],polylines[index]]}></Polyline>
                })


            }*/}