import axios from "axios";
import React from 'react';
import { connect, Provider } from "react-redux";
import { Button, Grid, Input } from "semantic-ui-react";
import  * as messageActions from "./actions/messageActions";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messageToSend: ""
    }
  }
  
  handleChangeInput(event) {
    this.setState({messageToSend: event.target.value})
  }

  handleSendMessage() {
    axios.post('/api/sendmessage', {message: this.state.messageToSend}).then(() => {
      const updatedMessageList = [this.state.messageToSend, ...this.props.messageList]
      this.props.setMessageList(updatedMessageList)
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
            {this.props.messageList.map(row => (
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

const mapStateToProps = state => {
  return {
    messageList: state.queueForm.messageList
  }
}

export default connect(mapStateToProps, messageActions)(App);
