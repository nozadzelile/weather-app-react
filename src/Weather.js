import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate"

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false })
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            city: response.data.city,
            wind: response.data.wind.speed,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            date: new Date(response.data.time * 1000)
        })
    }

    if (weatherData.ready) {
         return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control w-100" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                    </li>
                <li className="text-capitalize">{weatherData.condition}</li>
            </ul>
            <div className="row">
               <div className="col-6">
                <div className="temperature-container">
                    <img
                    src={weatherData.iconUrl}
                    alt={weatherData.condition}
                    />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C | °F</span>
                    </div>
                    </div>
                <div className="col-6">
                    <ul className="condition">
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    } else {
        const apiKey = "bc0c2310f91t07094a4ao08773084492";
        let city = "Barcelona"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}