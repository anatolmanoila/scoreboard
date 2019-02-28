import React, { Component } from 'react'; //named import
import './../App.css';
import Header from "../components/Header";
import Player from "../components/Player";
import AddPlayerForm from "../components/AddPlayerForm";

class Scoreboard extends Component {
  state = {
    players: [

    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => { return p.id !== id })
      };
    })
  };

  //new initial player id
  prevPlayerId = 6;

  //merge the existing obj into current state with the new array being create below
  handleAddPlayer = (name) => {
    this.setState( prevState => ({
      players: [
        ...prevState.players,
        {
        name: name,
        score: 0,
        id: this.prevPlayerId += 1
      }]
    }))
  };


  handleScoreChange = (index, delta) => {
      this.setState(prevState => {
          return {
            score: prevState.players[index].score += delta
          };
      })
  };

  render() {
    return (
      <div className="scoreboard">

        {/* pass the entire state 'players'  to the Header comp */}

        <Header title="Scoreboard" players={ this.state.players } />

        {/* Players list */}
        {/* concept of: independent, self-contained & reusable components - which supports the idea of separation of concerns  */}
        {/* each component in your UI should be responsible for ONE-THING only */}
        {/* the values for these props could come dynamically from a DB or json API */}
        {/*  keys needs to be unique -- in order for React to keep track of elements that have changed  */}
        {/* key is needed only for those elements that gets removed or updated or rearranged within UI - so which items where changed, removed or updated from the DOM  */}

        {this.state.players.map((player, index) => {
          return <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange} />
        })}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />

      </div>
    );
  }
}

export default Scoreboard;
