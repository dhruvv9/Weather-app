import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";


function WeatherApp() {
  const [searchText, setText] = useState("");
  const [wData, setData] = useState('');

  const buttonClick = () => {
    console.log('click', searchText);
    fetch('https://api.weatherapi.com/v1/current.json?key=f8d765b631ec497c969153028232812&q=' + searchText + '&aqi=no').then(r => r.json()).then((data) => {
      setData(data);
    });
  };


  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='container'>
      <div className='top-bar'>
        <input value={searchText} onChange={onChange}></input>

        <div className='search-icon'onClick={buttonClick}><img src={search_icon} alt="" />
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt=" " />
      </div>
      <div className='weather-temp'>
        {wData?.current?.temp_c}°C
      </div>
      <div className='weather-location'>
        {wData?.location?.name}
      </div>
      <div className="data-container">
        <div className='element'>
          <img src={humidity_icon}alt='' className='icon' />
          <div className="data">
            <div className="humidity-persentage">
            {wData?.current?.humidity}%
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' />
          <div className="data">
            <div className="humidity-persentage">
            {wData?.current?.wind_kph}km/hr
            </div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>



     
    </div>
  );
}

export default WeatherApp
