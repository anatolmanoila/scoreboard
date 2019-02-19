import React from 'react';
import Stopwatch from "./Stopwatch";

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: {props.totalPlayers}</span>

            <Stopwatch />
        </header>

    );
};

export default Header;