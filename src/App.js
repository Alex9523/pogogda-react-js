import React, { useState, useEffect } from 'react';
import './App.css';
import Location from './components/Location'
import Weather from './components/Weather'

function App() {
  const [location, setCity] = useState('')
  const [weath, setWeather] = useState({})

  const [api_key, setApi_key] = useState('efd8b5271eba009222f1c2aa184b8ad1')
  const [url_base, setUrl_base] = useState('https://api.openweathermap.org/data/2.5/')
  const [query, setQuery] = useState('Odesa')

  useEffect(() => {
    fetch(`${url_base}weather?q=${query}&appid=${api_key}`)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setCity(`${data.name}, ${data.sys.country}`)
        setWeather({degree:`${Math.round(data.main.temp - 273.15) }`,
                    sky: `${data.weather[0].main}`})
      })  
      setQuery('')
  }, [])

  const loadWeather = (e) => {
    if (e.key == "Enter") {
      fetch(`${url_base}weather?q=${query}&appid=${api_key}`)
        .then(res => {
          return res.json()
        }).then((data) => {
          setCity(`${data.name}, ${data.sys.country}`)
          setWeather({
            degree: `${Math.round(data.main.temp - 273.15)}`,
            sky: `${data.weather[0].main}`
          })
        })
      setQuery('')
    }
  }

  function handleChange(event) {
    setQuery(event.target.value)
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Please enter a city in english"
            value={query}
            onChange={handleChange}
            onKeyPress={loadWeather}
          />
        </div>

        <div className="weather-wrap" >
          <Location loc={location} />
          <Weather weath={weath} />

        </div>

      </main>
    </div>
  );
}

export default App;
