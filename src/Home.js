import WeatherInfo from "./WeatherInfo"
import AddWeatherInfo from "./AddWeatherInfo"
import WindInfo from "./WindInfo"

function Home (){
return (
<div className ="home">
<div className="weather_info">
<WeatherInfo  />
</div>
<div className="add_weather_info">
<AddWeatherInfo />
</div>
<div className="wind_info">
  <WindInfo />
</div>
</div>
)
}


export default Home