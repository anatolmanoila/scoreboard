const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> { props.score } </span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>

            {/* Player is parent of Counter */}
            <Counter score={ props.score } />
        </div>
    );
};

//App top -level -component
//Components =  parent - child relationship
const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={ 1 } />

            {/* Players list */}
            {/* concept of: independent, self-contained & reusable components - which supports the idea of separation of concerns  */}
            {/* each component in your UI should be responsible for ONE-THING only */}
            {/* the values for these props could come dynamically from a DB or json API */}
            <Player name="Aema" score={ 29 } />
            <Player name="Mario" score={ 25 } />
            <Player name="Andreea" score={ 31 } />
            <Player name="Michael" score={ 44 } />
            <Player name="John" score={ 23 } />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);