import React, { useState } from 'react';

const Weather = (props) => {
  const [city, setCity] = useState('');
  const [weatherReport, setWeatherReport] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleReport = (event) => {
    if (event.target.value === '') {
      setWeatherReport('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Prepare openweathermap.org request
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Location not found');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setWeatherReport(
          'There is ' + data.weather[0].description + ' in ' + data.name + '.'
        );
        props.setBackgroundImage(data.weather[0].description);
      })
      .catch((error) => {
        setLoading(false);
        setWeatherReport('Oops! This location was not found');
        console.log(error);
      });
  };

  return (
    <div className="container" id="page-container">
      <header className="text-center pt-5">
        <h1>CheckWeather</h1>
      </header>
      <main>
        <div className="row">
          <form
            className="col-sm-8 offset-sm-2"
            id="city-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group pt-3">
              <label htmlFor="city">Enter location here</label>
              <input
                type="text"
                id="city"
                className="form-control"
                value={city}
                onChange={handleChange}
                onInput={handleReport}
                required
              />
            </div>
            <button className="btn btn-success mb-2" type="submit">
              Check the weather!
            </button>
          </form>
        </div>
        <div
          id="loader"
          className={`rounded-circle mx-auto ${
            loading ? 'd-block' : 'd-none'
          }`}
        ></div>
        <div className="row">
          <section
            id="weather-report"
            className="mb-5 pt-2 col-sm-8 offset-sm-2 text-center"
          >
            {weatherReport}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Weather;