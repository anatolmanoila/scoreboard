const description = 'I just learned how to create a React node & render it to the DOM';
const titleId = 'main-title';
const name = 'Aema';

const header = (
    <header>
        <h1 id={titleId}>{ name }'s first React element!</h1>
        <p className="main-desc">{ description }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);