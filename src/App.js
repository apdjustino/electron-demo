import axios from "axios";
import React from 'react';
import { Provider } from "react-redux";
import { Button, Grid, Input } from "semantic-ui-react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messageToSend: "",
      sentMessages: []
    }
  }
  
  handleChangeInput(event) {
    this.setState({messageToSend: event.target.value})
  }

  handleSendMessage() {
    axios.post('/api/sendmessage', {message: this.state.messageToSend}).then(() => {
      this.setState({sentMessages: [this.state.messageToSend, ...this.state.sentMessages]})
      this.setState({messageToSend: ""})
    })
  }

  render() {

    return (
      <Provider store={this.props.store}>
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
          <Input onChange={(e) => {this.handleChangeInput(e)}}/>
          <Button onClick={() => {this.handleSendMessage()}}>Send Test Message</Button>
          <Grid celled>
            {this.state.sentMessages.map(row => (
              <Grid.Row>
                <Grid.Column width={16}>
                  <h4>{row}</h4>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </div>
      </Provider>
    )
  }
}

export default App;
