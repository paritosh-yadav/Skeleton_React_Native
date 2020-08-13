/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppContainer from "./routes";
import { combineReducers } from "./redux";

const store = createStore(combineReducers);
type Props = { /* ... */ };

type State = {
};
export default class App extends React.Component<Props, State> {

    render() {
        return (
            <Provider store={store} >
                <AppContainer />
            </Provider>
        );
    }
}
