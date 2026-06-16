import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.condition}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="temperature-container">
                        <img
                        src={props.data.iconUrl}
                        alt={props.data.condition}
                        />
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="unit">°C | °F</span>
                        </div>
                        </div>
                            <ul className="condition">
                                <li>Humidity: {props.data.humidity}%</li>
                                <li>Wind: {props.data.wind}km/h</li>
                            </ul>
                        </div>
                    </div>
                    </div>
    );
}