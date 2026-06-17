import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready) {
        console.log(forecast);
       return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                <WeatherForecastDay data={forecast[0]}/>
                </div>
            </div>
        </div>
       );
    } else {
        const latitude = props.coordinates.lat;
        const longitude = props.coordinates.lon;
        const apiKey = "bc0c2310f91t07094a4ao08773084492";
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&lon=${longitude}&lat=${latitude}`
    
        axios.get(apiUrl).then(handleResponse)
    }
}
