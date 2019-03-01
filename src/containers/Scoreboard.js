import React, { Component } from 'react'; //named import
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './../App.css';
import Header from "../components/Header";
import Player from "../components/Player";
import AddPlayerForm from "../components/AddPlayerForm";

class Scoreboard extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired
    };

  render() {

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
        <Player
            index={index}
            name={player.name}
            score={player.score}
            key={player.name}
            updatePlayerScore={updatePlayerScore}
            removePlayer={removePlayer}
        />
    ));
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={ players } />
        {/* Players list */}
        {/* concept of: independent, self-contained & reusable components - which supports the idea of separation of concerns  */}
        {/* each component in your UI should be responsible for ONE-THING ONLY */}
        {/* the values for these props could come dynamically from a DB or json API */}
        {/* key is needed only for those elements that gets removed or updated or rearranged within UI - so which items where changed, removed or updated from the DOM  */}
        {/*  keys needs to be unique -- in order for React to keep track of elements that have changed  */}
        <div className="players">
            { playerComponents }
        </div>
        <AddPlayerForm addPlayer={ addPlayer } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    players: state
});

export default connect(mapStateToProps) (Scoreboard);
