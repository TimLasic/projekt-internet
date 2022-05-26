import React from "react";
import traffic from '../images/traffic.jpg'
import driving from '../images/driving.jpg'
import piggy from '../images/piggy.jpg'
import chart from '../images/chart.PNG'

const About = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <div style={{
                border: "2px solid black",
                borderRadius: "20px",
                backgroundColor: "#2596be",
                paddingTop: "10px",
                paddingBottom: "30px",
                paddingRight: "30px",
                paddingLeft: "30px",
                marginTop: "20px"
            }}>
                <h1 style={{color: "white", textAlign: "center", padding: "10px"}}>About us</h1>
                <p style={{textAlign: "center"}}>We are a group of students, dedicated to improve daily traffic
                    situation across the globe.<br/>
                    Reduced traffic means less CO2 emissions and less stress for all the drivers involved in daily
                    commuting via a personal vehicle.</p>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px"
                }}>
                    <div style={{
                        width: "50%",
                        border: "2px solid black",
                        borderRadius: "20px",
                        paddingTop: "10px",
                        paddingBottom: "30px",
                        backgroundColor: "#2596be",
                        margin: "10px"
                    }}>
                        <img src={driving}
                             style={{width: "100%", maxHeight: "300px", padding: "10px", borderRadius: "20px"}}/>
                        <h2 style={{color: "white", textAlign: "center"}}>Get to your destination faster</h2>
                        <p style={{textAlign: "center", padding: "10px"}}>Look at the map, and choose the most optimal route for you to
                            reach your destination</p>
                    </div>

                    <div style={{
                        width: "50%",
                        border: "2px solid black",
                        borderRadius: "20px",
                        paddingTop: "10px",
                        paddingBottom: "30px",
                        backgroundColor: "#2596be",
                        margin: "10px"
                    }}>
                        <img src={traffic}
                             style={{width: "100%", maxHeight: "300px", padding: "10px", borderRadius: "20px"}}/>
                        <h2 style={{color: "white", textAlign: "center"}}>Help the environment</h2>
                        <p style={{textAlign: "center", padding: "10px"}}>Reduce the amount of cars stuck on the road, and contribute to
                            reduce CO2 emissions</p>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: "10px"
                }}>
                    <div style={{
                        width: "50%",
                        border: "2px solid black",
                        borderRadius: "20px",
                        paddingTop: "10px",
                        paddingBottom: "30px",
                        backgroundColor: "#2596be",
                        margin: "10px"
                    }}>
                        <img src={piggy}
                             style={{width: "100%", maxHeight: "300px", padding: "10px", borderRadius: "20px"}}/>
                        <h2 style={{color: "white", textAlign: "center"}}>Save money</h2>
                        <p style={{textAlign: "center", padding: "10px"}}>By not being stuck in traffic, you waste less fuel and in doing
                            so save up on some and also
                            save up o your hard earned cash.</p>
                    </div>

                    <div style={{
                        width: "50%",
                        border: "2px solid black",
                        borderRadius: "20px",
                        paddingTop: "10px",
                        paddingBottom: "30px",
                        backgroundColor: "#2596be",
                        margin: "10px"
                    }}>
                        <img src={chart}
                             style={{width: "100%", maxHeight: "300px", padding: "10px", borderRadius: "20px"}}/>
                        <h2 style={{color: "white", textAlign: "center"}}>Your stats</h2>
                        <p style={{textAlign: "center", padding: "10px"}}>Look at your weekly stats, to see your contribution to our
                            cause.</p>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <div style={{
                    border: "2px solid black",
                    borderRadius: "20px",
                    backgroundColor: "#2596be",
                    paddingTop: "10px",
                    paddingBottom: "30px",
                    paddingRight: "30px",
                    paddingLeft: "30px",
                    marginTop: "20px"
                }}>
                    <h1 style={{color: "white", textAlign: "center", padding: "10px"}}>Contributors</h1>
                    <p style={{textAlign: "center"}}><strong>Tim Lasič: </strong><a href="https://github.com/TimLasic" target="_blank" title="To @Tim Lasic GitHub account">@Tim lasic</a><br/>
                        <strong>Jernej Golija: </strong><a href="https://github.com/jernejgolija" target="_blank" title="To @jernejgolija GitHub account">@jernejgolija</a><br/>
                        <strong>Gašper Zlodej: </strong><a href="https://github.com/FoxBD" target="_blank" title="To @FoxBD GitHub account">@FoxBD</a></p>
                </div>
            </div>
        </div>
    )
}

export default About