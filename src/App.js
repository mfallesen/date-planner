import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button } from 'semantic-ui-react'
import Footer from './components/Footer'

const ButtonExampleButton = () => <Button primary>Click Here</Button>
const ButtonExampleTwo = () => <Button secondary>Or CLick Here!</Button>

// export default ButtonExampleButton

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonExampleButton></ButtonExampleButton>
        <ButtonExampleTwo></ButtonExampleTwo>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
