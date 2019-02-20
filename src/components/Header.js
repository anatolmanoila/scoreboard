import React from 'react';
import Stopwatch from "./Stopwatch";
import Stats from './Stats';

const Header = ( { players, title } ) => {

    return (
        <header>
            <Stats players={ players } />
            <h1>{ title }</h1>

            <Stopwatch />
        </header>

    );
};

  export default Header;
