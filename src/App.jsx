import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline : ''
    }
  }

  changeDeadLine() {
      console.log('state', this.state);
      this.setState({deadline: this.state.newDeadline});
      this.setState({newDeadline: ''});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock
          deadline={this.state.deadline}
        />
      {/* Hier werden nun die oben importierten bootstrap Klassen verwendet */}
        <FormGroup>
          <InputGroup
            className="Deadline-group">
          {/* Im folgenden verwenden wir zwei anonymous functions; sie dienen zur Sicherheit vor loops */}
            <FormControl
              className="Deadline-input"
              value={this.state.newDeadline}
              type="text"
              placeholder='new deadline'
              onChange={event => this.setState({newDeadline: event.target.value})}
              onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.changeDeadLine()
                  }}}
              preventDefault
            />
            <InputGroup.Button>
              <Button
                className="Deadline-button"
                onClick={() => this.changeDeadLine()}>
                submit
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default App;
