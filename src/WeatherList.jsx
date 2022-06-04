import React, { useState } from "react";
import WeatherItem from "./WeatherItem";
import AddCityWeather from "./AddCityWeather";

const WeatherList = () => {
  const [cities, setCities] = useState([
    {
      id: "qgauierhcng7anin4egnncmx",
      city: "London", //name
      country: "UK", //sys.country
      celsius: 14, //main.temp
      weather: "Rainy", //weather[0].description
      icon: "03d", //weather[0].icon
    },
  ]);
  function addNewCity(newCity) {
    setCities([...cities, newCity]);
  }

  return (
    <div>
      <AddCityWeather addCity={addNewCity} />
      <div className="weatherList">
        {cities.map((item) => (
          <WeatherItem city={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
