import React from 'react';
import PropTypes from 'prop-types';

const Counter = ( { index, score, updatePlayerScore } ) => {

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={ () => { return updatePlayerScore(index, -1) } }> - </button>
            <span className="counter-score"> {score} </span>
            <button className="counter-action increment" onClick={ () => updatePlayerScore(index, 1) }> + </button>
        </div>
    );
};

Counter.propTypes = {
    updatePlayerScore: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired
};
export default Counter;