/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./routes";
import { store } from "./redux";

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
