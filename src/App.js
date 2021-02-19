import './App.css';
import React, { useState } from 'react'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import Restaurant from './components/Restaurant';
import Movie from './components/Movie'
import API from './utils/API'
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';




function App() {
  const [city, setCity] = useState('')
  const [restaurant, setRestaurant] = useState({})
  const [weather, setWeather] = useState({})

  const [dataLoad, setDataLoad] = useState(false)
  const [show, setShow] = useState(false)

  const registerInputChange = event => {
    const { value } = event.target;
    setCity(value)
  }

  const handleDateSearch = event => {
    event.preventDefault();
    setDataLoad(true);
    

    API.findDateLocation(city).then(response => {
      setRestaurant(response.data[0].restaurant);
      setWeather(response.data[1])
      // restaurant(setRestaurant)
      console.log(restaurant);
      console.log(weather);
    }).catch(err => {
      console.error(err);
    }).finally(() => {
      setDataLoad(false);
      setShow(true)
    })
  }


console.log('=======', restaurant)
  return (
    <div className="App">
      

      <SearchBar handleDateSearch={handleDateSearch} onCityInputChange={registerInputChange} city={city}></SearchBar>
      {dataLoad && <Loader size={'big'} active inverted content="Finding Date" />}
      {!dataLoad && show  && <Restaurant restaurant={restaurant}></Restaurant>}
      {!dataLoad && Object.entries(weather) && <Weather weather={weather} city={city}/>}
      {/* <Movie/>  Future Implementation */}

      <Footer></Footer>
      
    </div>
  );
}

export default App;
