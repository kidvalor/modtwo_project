import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherSVG from "./img/weather.svg";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import WeatherInfo from "./WeatherInfo";
import AddWeatherInfo from "./AddWeatherInfo";
import Coordinates from "./Coordinate";
import WindInfo from "./WindInfo";
import Footer from "./Footer"
import Location from "./Location";
import About from "./About"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import "../src/App.css"
import Home from "./Home";


export const WeatherIcons = {
  "01d": "./icons/sunny.png",
  "01n": "./icons/night.png",
  "02d": "./icons/day.png",
  "02n": "./icons/cloudy-night.png",
  "03d": "./icons/cloudy.png",
  "03n": "./icons/cloudy.png",
  "04d": "./icons/perfect-day.png",
  "04n": "./icons/cloudy-night.png",
  "09d": "./icons/rain.png",
  "09n": "./icons/rain-night.png",
  "10d": "./icons/rain.png",
  "10n": "./icons/rain-night.png",
  "11d": "./icons/storm.png",
  "11n": "./icons/storm.png",
};


//display icon https://openweathermap.org/img/wn/${icon}.png
function App() {
  const [city, setCity] = useState("");
  //dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("new york"));
  }, []);

  //select state from store
  const state = useSelector(state => state);
  const { weather, loading, error } = state;
  console.log(state);
  return (
    <div className="App"> 
      <div className="app_header"> 
      <div>
       <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
          ></input>
          <button
          onClick={() => dispatch(fetchWeatherAction(city))}
            type="button">
            Search
          </button> 
          </div>
          <Location />
          <Coordinates />
          </div>
       <Switch>
       <Route exact path="/">
          <Home />
       </Route>
       <Route exact path="/about">
          <About />
          </Route>
            </Switch>
          <div className="footer">
         <Footer />
         </div>
      {/* react-router-dom */}
    </div>
  );
  
}

export default App;









































































































