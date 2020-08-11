import React from 'react'

function Location(props) {
    let dateBuilder = () => {
        let d = new Date()
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'
          , 'August', 'September', 'October', 'November', 'December']
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
        return `${day} ${date} ${month} ${year}`
      }

    return (
        <div className="location-box">
            <div className="location">{props.loc}</div>
            <div className="date">{dateBuilder()}</div>
        </div>
    )
}

export default Location