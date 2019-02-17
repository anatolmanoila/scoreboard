import React, { Component } from 'react';

const Player = (props) => {

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player"
                        onClick={ () => props.removePlayer(props.id) }>✖</button>
                { props.name }
            </span>

        </div>
    );
};

export default Player;
