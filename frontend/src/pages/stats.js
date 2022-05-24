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

            data.forEach(location => {
                if (location.state === "red") {
                    setRedState(redState+1);
                } else if (location.state === "orange") {
                    setOrangeState(orangeState+1);
                } else if (location.state === "green") {
                    setGreenState(greenState+1);
                }
            })
        }
        getLocations();
    }, []);

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
                data:[12,6,2]
                // green, green, red, green, orange, orange, orange, green, green, green, green, green, red, green, orange, orange, orange, green, green, green
                //data: [greenState,orangeState,redState]
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