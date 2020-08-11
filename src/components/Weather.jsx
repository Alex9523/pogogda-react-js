import React from 'react'

function Weather(props) {
    return (
        <div className="weather-box">
            <div className="temp">{props.weath.degree}°c</div>
            <div className="weather">{props.weath.sky}</div>
          </div>
    )
}

export default Weather