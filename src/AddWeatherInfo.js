import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { connect } from "react-redux";





function AddWeatherInfo (props) {

    return (
        <div>
            <br />
            <br />
            <br />
        <div className="addweather">
            <div className="high">
            <p>Low</p>
            <p>{`${Math.floor((props.min - 273.15) * 9/5) + 32}°F`}</p>
            </div>
            <div className="high">
            <p>High</p>    
            <p>{`${Math.floor((props.max - 273.15) * 9/5) + 32}°F`}</p>
            </div>
            </div>
            <div className="addweather">
            <div className="high"> 
            <p>Sunrise</p>    
            <p>{new Date(props.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            </div> 
            <div className="high">
            <p>Sunset</p>  
            <p>{new Date(props.sunset * 1000).toLocaleTimeString('en-IN')}</p>         
           </div>
           </div>
           </div>
    )
    
    
}

const mapStatetoProps = (state) =>{
    return {
      humidity: state.weather?.main?.humidity ,
      min: state.weather?.main?.temp_min,
      max: state.weather?.main?.temp_max, 
      sunrise: state.weather?.sys.sunrise,
      sunset: state.weather?.sys.sunset, 
    }
  }

const mapDispatchToProps = () => {
    return {
        fetchWeatherAction,
    }
}

export default connect(mapStatetoProps, fetchWeatherAction)(AddWeatherInfo)



























