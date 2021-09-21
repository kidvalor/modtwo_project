import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { connect } from "react-redux";


function WindInfo (props) {

    return (
        <div className="wind">
            <br />
            <img className="addweatherimg" src="https://openweathermap.org/img/wn/50d@2x.png" />
        <p>Wind</p>
        <div className="addweather">
            <div className="high">
             <p>Speed</p>   
             <p>{props.speed}</p>
             </div>
             <div className="high">
            <p>Deg</p>     
            <p>{props.deg}</p>
            </div>
            <div className="high">
            <p>Gust</p>
            <p>{props.gust}</p>
            </div>
        </div>
        </div>
    )
    
    
}

const mapStatetoProps = (state) =>{
    return {
      speed: state.weather?.wind?.speed ,
      deg: state.weather?.wind?.deg,
      gust: state.weather?.wind?.gust,
    }
  }


export default connect(mapStatetoProps, fetchWeatherAction)(WindInfo)

