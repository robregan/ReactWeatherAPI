import React from 'react';

const Weather = props => {
    return(
        <div className = "Snow">
            <div className = "rain pt-4">
                <h1>{props.city}</h1>
                <h5 className = "icons">
                    <i className = {`wi ${props.weatherIcon} display-1`} />
                </h5>

                {props.temp_celcius ? (
                    <h1 className="py-2">{props.temp_celcius}</h1>
                ):null}

                {Temperature(props.temp_min, props.temp_max)}
                <h4 className="CF">{props.description}</h4>
            </div>
        </div>
    )
}

function Temperature(min,max){
    if(min && max){
    return(
        <h3>
            <span className="px">{min}&deg;</span>
            <span className="px">{max}&deg;</span>
        </h3>
    )
}
}

export default Weather;