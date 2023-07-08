import { useState } from 'react';
import Weather from './weather';


const WrapWeather = () => {
    const [backgroundImage, setBackgroundImage] = useState(require('../assets/sunny.jpg'));

    const setWeatherBackground = (description) => {
      switch (true) {
        case description.includes('rain'):
          setBackgroundImage(require('../assets/light-rain.jpg'));
          break;
        case description.includes('cloud'):
          setBackgroundImage(require('../assets/cloud.jpg'));
          break;
        case description.includes('sky'):
          setBackgroundImage(require('../assets/sky.jpg'));
          break;
        case description.includes('mist'):
          setBackgroundImage(require('../assets/mist.jpg'));
          break;
        case description.includes('haze'):
          setBackgroundImage(require('../assets/haze.jpg'));
          break;
        case description.includes('drizzle'):
          setBackgroundImage(require('../assets/drizzle.jpg'));
          break;
        default:
          setBackgroundImage(require('../assets/sunny.jpg'));
          break;
      }
    };

    return (
        <div className="body" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Weather setBackgroundImage={setWeatherBackground}/>
        </div>
    )

}

export default WrapWeather;