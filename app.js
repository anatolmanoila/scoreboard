const title = React.createElement(
    'h1',
    { id: 'main-title', title : 'The Main title' },
    'My first React element - title'
);

const description = React.createElement(
    'p',
    null,
    'I just learned how to create a React node & render it to the DOM'
);

const header = React.createElement(
    'header',
    null,
    title,
    description
);

ReactDOM.render(
    header,
    document.getElementById('root')
);