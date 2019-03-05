import React from "react";
import Stopwatch from "../components/Stopwatch";
import Counter from "../components/Counter";
import Stats from "../components/Stats";
import Player from "../components/Player";
import Header from "../components/Header";
import AddPlayerForm from "../components/AddPlayerForm";

export default class Scoreboard extends React.Component {
  state = {
    players: [
      {
        name: "Leonardo",
        score: 0,
        id: 1
      },
      {
        name: "Michelangelo",
        score: 0,
        id: 2
      },
      {
        name: "Donatello",
        score: 0,
        id: 3
      },
      {
        name: "Raphael",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = name => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

