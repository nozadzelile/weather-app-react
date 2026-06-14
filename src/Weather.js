import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Barcelona</h1>
            <ul>
                <li>Sunday 15:30</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
               <div className="col-6">
                <div className="temperature-container">
                    <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                    alt="few-clouds-day"
                    />
                    <span className="temperature">20</span>
                    <span className="unit">°C | °F</span>
                    </div>
                    </div>
                <div className="col-6">
                    <ul className="condition">
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 50%</li>
                        <li>Wind: 10km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}