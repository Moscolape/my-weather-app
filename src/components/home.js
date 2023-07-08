import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1 className="h1">Weather App</h1>
            <div className="app-info">
                <p>
                This app uses an API to fetch you the most accurate real-time
                information on the weather of many locations across multiple
                cities/countries in the world. Click the button below to check the weather condition of your neighbouring cities/locations.
                </p>
            </div>
            <Link to="/check-weather" className='button'>
                <span>Check the weather</span>
            </Link>
        </div>
    );
};

export default Home;