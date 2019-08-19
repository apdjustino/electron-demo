import axios from "axios";
import React from 'react';
import { Provider } from "react-redux";
import { Button } from "semantic-ui-react";
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <div className="App">
        <header className="App-header">
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
        <Button onClick={() => {
          axios.post('/api/sendmessage').then(() => {
            alert('sent message')
          })
        }}>Send Test Message</Button>
      </div>
    </Provider>
    
  );
}

export default App;
