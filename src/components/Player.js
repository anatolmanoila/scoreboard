import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

const Player = (props) => {

    const { name, index, score, removePlayer, updatePlayerScore } = props;
    console.log( name + ' rendered' );

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(index) }>✖</button>
                { name }
            </span>

            {/* Player is parent of Counter */}
            <div className="player-score">
                <Counter
                    score={ score }
                    index={ index }
                    updatePlayerScore={ updatePlayerScore } />
            </div>
        </div>
    );
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired
};

export default Player;
