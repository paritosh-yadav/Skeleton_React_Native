/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppContainer from "routes";
import { combineReducers } from "reducer";

const store = createStore(combineReducers);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store} >
                <AppContainer />
            </Provider>
        );
    }
}
