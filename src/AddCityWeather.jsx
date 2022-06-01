import React, {useState} from 'react'
import axios from 'axios';

const AddCityWeather = ({addCity}) => {
    const [city, setCity] = useState("");

    async function fetchWeather(){
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ce76ddc943bc1e29df66a0a394e5334c&units=metric")
      let newCity = {
        id: response.data.id,
        city: response.data.name, //name
        country: response.data.sys.country, //sys.country
        celsius: Math.round(response.data.main.temp), //main.temp
        weather: response.data.weather[0].description, //weather[0].description
        icon: response.data.weather[0].icon //weather[0].icon
      }
      addCity(newCity);
      setCity("");
    }
  return (
    <div>
      <input placeholder='Search for a city' className='addInput' value={city} onChange={e=>setCity(e.target.value)} type="text" />
      <button className='addBtn' onClick={fetchWeather}>Submit</button>
    </div>
  )
}

export default AddCityWeather