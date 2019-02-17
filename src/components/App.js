import React from "react";
import Player from "./Player";
import Header from "./Header";

class App extends React.Component {
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

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
