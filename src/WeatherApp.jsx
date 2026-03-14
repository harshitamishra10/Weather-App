
import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp (){

  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Ghaziabad",
    temp: 28.54,
    tempMin: 28.54,
    tempMax: 28.54,
    humidity: 47,
    feels_like: 29.1,
    weather: "haze"
  });

    let
     updateInfo = (newInfo) => {
  setWeatherInfo(newInfo);
};
  

  return(
    <div style={{textAlign: "center"}}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo}/>
     
    </div>
  )
}

