import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false })
    const [city, setCity] = useState(props.defaultCity)

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            city: response.data.city,
            wind: response.data.wind.speed,
            icon: response.data.condition.icon,
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            date: new Date(response.data.time * 1000)
        })
    }
    
    function search() {
        const apiKey = "bc0c2310f91t07094a4ao08773084492";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value)
    }

    if (weatherData.ready) {
         return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control w-100" autoFocus="on" onChange={handleCityChange} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
        </div>
        )
    } else {
        search();
        return "Loading...";
    }
}