import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline : ' '
    }
  }

  changeDeadLine() {
      console.log('state', this.state);
      this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
      {/* Hier werden nun die oben importierten bootstrap Klassen verwendet */}
        <Form inline={true}>
        {/* Im folgenden verwenden wir zwei anonymous functions; sie dienen zur Sicherheit vor loops */}
          <FormControl
            placeholder='new deadline'
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
        <Button onClick={() => this.changeDeadLine()} >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
