import React from 'react';
import {Pie, Doughnut, Bar } from 'react-chartjs-2';
import {Chart, ArcElement, Legend, Title, Tooltip} from 'chart.js'
import {useContext, useState} from 'react'
import {useEffect} from "react";


Chart.register(ArcElement, Legend, Title, Tooltip);


const Stats = () => {
    const[locations, setLocations] = useState([]);
    const[redState, setRedState] = useState(0);
    const[orangeState, setOrangeState] = useState(0);
    const[greenState, setGreenState] = useState(0);

    useEffect(function () {
        const getLocations = async function () {
            const res = await fetch("https://projekt-glz.herokuapp.com/locations");

            if (res.status === 500) {
                console.log("Empty");
            }
            const data = await res.json();
            setLocations(data);

            let counterGreen = 0;
            let counterOrange = 0;
            let counterRed = 0;

            for (let i = 0; i < locations.length; i++) {
                if (locations[i].state === "red") {
                    counterRed += 1;
                } else if (locations[i].state === "orange") {
                    counterOrange += 1;
                } else if (locations[i].state === "green") {
                    counterGreen += 1;
                }
            }

            setGreenState(counterGreen);
            setOrangeState(counterOrange);
            setRedState(counterRed);
        }
        getLocations();
    }, [locations]);

    const state = {
        labels: ["Excellent", "Good", "Bad"],
        title: ["co"],
        datasets: [
            {
                label: 'Road condition',

                backgroundColor: [
                    '#2FDE00',
                    '#C9DE00',
                    '#B21F00'
                ],
                hoverBackgroundColor: [
                    '#175000',
                    '#4B5000',
                    '#501800'
                ],
                borderWidth: 1,
                data:[greenState,orangeState,redState]
            }
        ]
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            height: '90vh', backgroundColor: "gray"
        }}>
            <Doughnut
                data={state}
                options={{
                    plugins: {
                        title: {
                            display:true,
                            text:"CURRENT ROAD SITUATION",
                            position: "top",
                            align: "center",
                            color: "white",
                            font: {
                                size:20
                            }
                        },
                        legend: {
                            position: "top",
                            labels: {
                                color: 'rgb(255, 255, 255)',
                                font:{
                                    size:14
                                }
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }}
            />
        </div>


    )
}
export default Stats