import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

function SearchBox({ updateInfo }) {

  let [city , setCity] = useState("");
  let [error, setError] = useState(false);   // fixed

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9091e97ce665ab40ddd232db05e5423c";

  let getWeatherInfo = async () => {

    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    try{
      let jsonResponse = await response.json();

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      }

      console.log(result)
      return result;

    }
    catch(err){
      throw err;
    }

  };

  let handleChange = (evt) =>{
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) =>{
    try{
      evt.preventDefault();

      let newInfo = await getWeatherInfo();
      console.log(newInfo);

      updateInfo(newInfo);
      setCity("");
      setError(false);   // reset error

    }
    catch(err){
      setError(true);    // fixed
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="City"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {
          error && <p>No such Place Exist</p>
        }

      </form>
    </div>
  );
}

export default SearchBox;



























