import './App.css';
import React from 'react'
import { Button } from 'semantic-ui-react'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';

const ButtonExampleButton = () => <Button primary>Click Here</Button>
const ButtonExampleTwo = () => <Button secondary>Or CLick Here!</Button>

// export default ButtonExampleButton

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonExampleButton></ButtonExampleButton>
        <ButtonExampleTwo></ButtonExampleTwo>
      </header>
      <SearchBar></SearchBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
