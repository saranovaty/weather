import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Vienna",
    temperature: 19,
    date: "Tuesday",
    hour: "10:00 a.m.",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <br />
          <div className="row">
            <div className="col">
              <input
                id="citta-nuova"
                className="form-control"
                type="text"
                placeholder="Enter your city..."
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-warning cerca">
                Search
              </button>
            </div>
            <div className="col-3">
              <input
                type="button"
                className="btn btn-warning current"
                value="Current"
              />
            </div>
          </div>
          <div className="capital">{weatherData.city}</div>
          <div className="day">
            <span>{weatherData.date}</span>
            <br />
            <span>{weatherData.hour}</span>
            <div className="condition">{weatherData.description}</div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
                className="nuvola"
              />
            </div>
            <div className="col-4">
              <div className="temperature">
                10
                <span className="celsius">
                  <span className="active">°C</span> |
                  <span href="#" className="active">
                    °F
                  </span>
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="data">
                <small className="info">
                  <div>
                    <strong>Humidity:</strong> {weatherData.humidity}%
                  </div>
                </small>
                <small className="info">
                  <div>
                    <strong>Wind:</strong> {weatherData.wind}km/h
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
