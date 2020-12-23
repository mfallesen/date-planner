import './App.css';
import React from 'react'
import { Button } from 'semantic-ui-react'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import Restaurant from './components/Restaurant';
import API from './utils/API'

const ButtonExampleButton = () => <Button primary>Click Here</Button>
const ButtonExampleTwo = () => <Button secondary>Or CLick Here!</Button>

// export default ButtonExampleButton



function App() {

  return (
    <div className="App">

      <ButtonExampleButton></ButtonExampleButton>
      <ButtonExampleTwo></ButtonExampleTwo>

      <SearchBar ></SearchBar>
      <Restaurant></Restaurant>
      <Footer></Footer>
    </div>
  );
}

export default App;
