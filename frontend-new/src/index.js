import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'


import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import AuthOrApp from "./main/authOrApp";
import Reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENCION__
    && window.__REDUX_DEVTOOLS_EXTENCION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>

    , document.getElementById('app'))

reportWebVitals();
