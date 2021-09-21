import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { connect } from "react-redux";
import styled from "styled-components"
import { WeatherIcons } from "./redux/slices/weatherSlices"
import "./App"

function WeatherInfo (props) {  
  return (
        <div className="weather_info_child"> 
          {/* <img src={WeatherIcons[props.weather?.icon]}/> */}
          
          
             <div className="weather_info_cc">
               <br />
               <br />
               <div className="high">
               <img className="weather_img" src ={`http://openweathermap.org/img/w/${props.icon}.png`}  />
              <h3>{props.description}</h3>
               <p>Temperature{" "}</p> 
             <p>{`${Math.floor((props.weather - 273.15) * 9/5) + 32}°F`}</p>
             </div>
             <div>
             <p>{"  "}Feels Like</p>
             <p>{`${Math.floor((props.feels - 273.15) * 9/5) + 32}°F`}</p>
             </div>
             </div>
        </div>
    )
    
    
}

const mapStatetoProps = (state) =>{
    return {
      weather: state.weather?.main?.temp ,
      feels: state.weather?.main?.feels_like,
      description: state.weather?.weather[0].description,
      icon: state.weather?.weather[0].icon,
    
    }
  }


export default connect(mapStatetoProps, fetchWeatherAction)(WeatherInfo)



























