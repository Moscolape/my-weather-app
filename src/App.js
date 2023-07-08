import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/home';
import WrapWeather from './components/wrap-weather';


const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/check-weather" element={<WrapWeather/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;