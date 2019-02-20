import React from 'react';
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    return (
        <header>
            <span className="stats">Players: {props.totalPlayers}</span>
            <h1>{ props.title }</h1>

            <Stopwatch />
        </header>

    );
};

export default Header;