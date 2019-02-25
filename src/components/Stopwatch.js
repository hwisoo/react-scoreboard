import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  onStart = () => {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  };
  onStop = () => {
    this.setState({
      running: false
    });
  };
  onReset = () => {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now()
    });
  };
  onTick = () => {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now()
      });
    }
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !this.state.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        {this.state.running ? (
          <button onClick={this.onStop}>Stop</button>
        ) : (
          <button onClick={this.onStart}>Start</button>
        )}
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
