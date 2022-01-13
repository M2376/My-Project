import React from "react";
import Player from "./Components/player";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "Player A"
    };
  }

  handlePlayerAClick = (choice) => {
    let choices = ["rock", "paper", "scissors"];

    let playerChoice = choice;

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    // Computer picks rock,paper, or scissors
    if (playerChoice == computerChoice) {
      this.setState({ winner: "Tie" });
    }
    if (playerChoice == "rock" && computerChoice == "paper") {
      this.setState({ winner: "Player B " });
    }
    if (playerChoice == "rock" && computerChoice == "scissors") {
      // Sets the state for the winner
      this.setState({ winner: "Player A " });

      // Set the state for the score of the winner
      this.setState((state) => {
        state.winner = "Player A ";
        state.playerAScore += 1;
        return state;
      });

      this.setState((state) => {
        state.winner = "Player B ";
        state.playerBScore += 1;
        return state;
      });
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
      this.setState({ winner: "Player A " });
    }

    if (playerChoice == "paper" && computerChoice == "scissors") {
      this.setState({ winner: "Player B " });
    }

    // Determine the winner

    // this.setState((state) => {
    //   state.playerAScore += 1;
    //   return state;
    // });
  };
  handlePlayerBClick = (choice) => {
    let choices = ["rock", "paper", "scissors"];

    let playerChoice = choice;

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    // Computer picks rock,paper, or scissors
    if (playerChoice == computerChoice) {
      this.setState({ winner: "Tie" });
    }
    if (playerChoice == "rock" && computerChoice == "paper") {
      this.setState({ winner: "Player B " });
    }
    if (playerChoice == "rock" && computerChoice == "scissors") {
      // Sets the state for the winner
      this.setState({ winner: "Player A " });

      // Set the state for the score of the winner
      this.setState((state) => {
        state.winner = "Player A ";
        state.playerAScore += 1;
        return state;
      });

      this.setState((state) => {
        state.winner = "Player B ";
        state.playerBScore += 1;
        return state;
      });
    }
    if (playerChoice == "paper" && computerChoice == "rock") {
      this.setState({ winner: "Player A " });
    }

    if (playerChoice == "paper" && computerChoice == "scissors") {
      this.setState({ winner: "Player B " });
    }
  };

  reset = () => {
    this.setState({
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "Player A"
    });
  };

  render() {
    return (
      <div className="App">
        <div className="banner">Rock Paper Scissor</div>
        <h1 className="Winner">Player ## is in the lead!</h1>
        <h3>{this.state.winner} wins!</h3>

        <div className="Players">
          <Player
            id={0}
            name={"A"}
            score={this.state.playerAScore}
            clickHandler={this.handlePlayerAClick}
          />
          <Player
            id={1}
            name={"B"}
            score={this.state.playerBScore}
            clickHandler={this.handlePlayerBClick}
          />
        </div>
        <button className="ResetButton" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
