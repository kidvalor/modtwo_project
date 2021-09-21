import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { connect } from "react-redux";


function Coordinates (props) {

    return (
        <div>
             <p>Coordinates</p>
             <h3>{props.lon} {props.lat}  </h3>
        </div>
    )
    
    
}

const mapStatetoProps = (state) =>{
    return {
      lon: state.weather?.coord?.lon ,
      lat: state.weather?.coord?.lat
    
    }
  }


export default connect(mapStatetoProps, fetchWeatherAction)(Coordinates)

