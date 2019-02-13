const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">31</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Aema
            </span>

            <Counter />
        </div>
    );
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/* Players list */}
            <Player />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);