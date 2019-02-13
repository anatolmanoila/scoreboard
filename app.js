const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Aema
            </span>

            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">31</span>
                <button className="counter-action increment"> + </button>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Player />,
    document.getElementById('root')
);