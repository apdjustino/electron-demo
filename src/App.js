import axios from "axios";
import React from 'react';
import { connect, Provider } from "react-redux";
import { Button, Grid, Input } from "semantic-ui-react";
import  * as messageActions from "./actions/messageActions";
import logo from './PolyPortLogo.png';
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
          <header>
            <img src={logo} alt="logo" />
          </header>
          <Input onChange={(e) => {this.handleChangeInput(e)}} value={this.state.messageToSend}/>
          <Button onClick={() => {this.handleSendMessage()}}>Send Message to MSMQ</Button>
          <h3>Messages sent to MSMQ:</h3>
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
