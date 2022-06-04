import React from "react";
import { TbTemperatureCelsius } from "react-icons/tb";

const WeatherItem = (props) => {
  const imageURL =
    "http://openweathermap.org/img/wn/" + props.city.icon + "@2x.png";
  return (
    <div className="weatherItem">
      <p className="cityH3">
        {props.city.city}
        <sup className="cutCity">{props.city.country}</sup>
      </p>
      <p className="celsiusP">
        {props.city.celsius}
        <TbTemperatureCelsius className="celsiusIcon" />
      </p>
      <img src={imageURL} alt="" />
      <p className="weatherP">{props.city.weather}</p>
    </div>
  );
};

export default WeatherItem;
