import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

//App top -level -component
//Components =  parent - child relationship
class App extends Component {

  state = {
    players: [
        {
            name: "Michael",
            score: 0,
            id: 1
        },
        {
            name: "Andreea",
            score: 0,
            id: 2
        },
        {
            name: "John",
            score: 0,
            id: 3
        },
        {
            name: "Gabi",
            score: 0,
            id: 4
        },
        {
          name: "Ioana",
          score: 0,
          id: 5
      }
    ]
};

    nextId = 5;

  //custom methods:
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => { return p.id !== id } )
      };
    });
  }


  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    });
  };

  handleAddPlayer = (name) => {

    this.setState(prevState => {
        return {
          players: [
            ...prevState.players,
            {
              name: name,
              score: 0,
              id: this.nextId += 1
            }
          ]
        }
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
                totalPlayers={this.state.players.length}
        />

        { this.state.players.map( (player, index) => {
          return <Player name={ player.name }
                         id={ player.id}
                         key={ player.id.toString() }
                         changeScore={this.handleScoreChange }
                         index={index}
                         score={player.score}
                         removePlayer={ this.handleRemovePlayer }

                 />
        }) }

        <AddPlayerForm addPlayer={ this.handleAddPlayer } />

      </div>
    );
  }
}

export default App;
