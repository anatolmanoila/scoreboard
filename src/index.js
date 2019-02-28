import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';
import './index.css';
import Scoreboard from './containers/Scoreboard';
import * as serviceWorker from './serviceWorker';


const store = createStore(
    PlayerReducer
);

ReactDOM.render(
    <Provider store={store}>
        <Scoreboard />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
