import React, {Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() { // Lifecycle Hook, der beim starten der Komponente ausgeführt wird
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() { // Lifecycle Hook, der über die gesamte Lebenszeit der Komponente läuft
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000); // die 1000 bedeutet, dass das Intervall alle 1000 ms ausgeführt wird
  }

  leading0(num) {
    return num < 10 ? '0' + num : num; // Ternary, der dafür sorgt, dass Zahlen kleine 10 eine führende 0 bekommen
  }

  getTimeUntil(deadline) {
    // Wir parsen ein Datum aus dem eingebenen String und ziehen davon das aktuelle Datum ab.
    const time = Date.parse(deadline) - Date.parse(new Date());
    // Console logs kann man sich im Browser in der Entwicklertools-Konsole ansehen.
    console.log('time', time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/(1000*60*60))%24);
    const days = Math.floor(time/(1000*60*60*24));

    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    /*
     * Wenn key und value denselben Identifier haben, kann man sich den key schenken.
     * Hier gezeigt bei den Minuten und Sekunden:
     */
    this.setState({days: days, hours: hours, minutes, seconds});
  }

  render() {
    //this.getTimeUntil(this.props.deadline);

    return (
    <div>
      <div className="Clock-days">{this.leading0(this.state.days)} days</div>
      <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
      <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
      <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
    </div>
  )
  }
}

export default Clock;
