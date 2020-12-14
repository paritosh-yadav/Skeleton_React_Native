/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import Config from 'react-native-config';
import AppContainer from 'routes';
import { store } from 'statemanagement';
import { constants } from 'utils';
type Props = {
    /* ... */
};

type State = {};
export default class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        axios.defaults.baseURL = Config.API_URL;
        axios.defaults.timeout = constants.NETWORK_REQUEST_TIMEOUT;
    }
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
