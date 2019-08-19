import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./reducers/index";
import "semantic-ui-css/semantic.min.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const middleware = [thunkMiddleware];
const finalCreateStore = applyMiddleware(...middleware)(createStore);
export const store = finalCreateStore(rootReducer);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
