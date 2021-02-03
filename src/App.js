import './App.css';
import React, { useState } from 'react'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import Restaurant from './components/Restaurant';
import Movie from './components/Movie'
import API from './utils/API'
import Weather from './components/Weather';



function App() {


  const [city, setCity] = useState('')


  const registerInputChange = event => {
    const { value } = event.target;
    setCity(value)
  }

  return (
    <div className="App">



      {/* <Weather/> */}

      <SearchBar onCityInputChange={registerInputChange} city={city}></SearchBar>
      {/* <Restaurant></Restaurant> */}

      {/* Render based on input */}
      {/* <Movie/> */}


      <Footer></Footer>
    </div>
  );
}

export default App;
