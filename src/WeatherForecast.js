import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if (ready) {
       return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return (
                        <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
       );
    } else {
        const latitude = props.coordinates.lat;
        const longitude = props.coordinates.lon;
        const apiKey = "bc0c2310f91t07094a4ao08773084492";
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&lon=${longitude}&lat=${latitude}`
    
        axios.get(apiUrl).then(handleResponse);

    }
}
