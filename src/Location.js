import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { connect } from "react-redux";


function Location (props) {

    return (
        <div>
          <p>Location</p>
          <h3>{props.name} {props.country}</h3>
        </div>
    )
    
    
}

const mapStatetoProps = (state) =>{
    return {
      name: state.weather?.name ,
      country: state.weather?.sys?.country
    
    }
  }


export default connect(mapStatetoProps, fetchWeatherAction)(Location)

