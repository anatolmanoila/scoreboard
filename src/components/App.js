import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Player from './Player';

//App top -level -component
//Components =  parent - child relationship
class App extends Component {

  state = {
    players: [
        {
            name: "Michael",
            id: 1
        },
        {
            name: "Andreea",
            id: 2
        },
        {
            name: "John",
            id: 3
        },
        {
            name: "Gabi",
            id: 4
        },
        {
          name: "Ioana",
          id: 5
      }
    ]
};

  //custom methods:
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => { return p.id !== id } )
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard"
                totalPlayers={this.state.players.length}
        />

        { this.state.players.map( (player) => {
          return <Player name={ player.name }
                         id={ player.id}
                         key={ player.id.toString() }
                         removePlayer={ this.handleRemovePlayer }

                 />
        }) }

      </div>
    );
  }
}

export default App;
