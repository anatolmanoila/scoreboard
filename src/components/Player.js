import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {

    render() {
        const { name, index, id, score, removePlayer, changeScore } = this.props;
        console.log( name + ' rendered' );

        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player"
                            onClick={() => removePlayer(id) }>✖</button>
                    { name }
                </span>

                {/* Player is parent of Counter */}
                <Counter
                    score={ score }
                    index={ index }
                    changeScore={ changeScore } />

            </div>
        );
    }
};

export default Player;
