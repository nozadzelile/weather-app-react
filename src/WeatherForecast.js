import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data)
    }

    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const apiKey = "bc0c2310f91t07094a4ao08773084492";
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&lon=${longitude}&lat=${latitude}`

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Wed</div>
                    <WeatherIcon code="clear-sky-day" size={35} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">29º</span>
                        <span className="WeatherForecast-temperature-min">22º</span>
                    </div>
                </div>
            </div>
        </div>
    );
}