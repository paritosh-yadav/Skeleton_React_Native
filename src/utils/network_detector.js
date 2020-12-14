/**
 * @flow
 */
import React, { Component } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { NoNetworkScreen } from 'components';
type NetworkdetectorProps = {};
type NetworkdetectorState = {
    isConnected: boolean,
};
export default (ComposedComponent: any) => {
    class networkDetector extends Component<
        NetworkdetectorProps,
        NetworkdetectorState,
    > {
        constructor(props: NetworkdetectorProps) {
            super(props);
            this.state = {
                isConnected: true,
            };
        }
        unsubscribe: () => void;
        componentDidMount() {
            this.unsubscribe = NetInfo.addEventListener(state => {
                this.setState({ isConnected: state.isConnected });
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            const { isConnected } = this.state;
            return (
                <>
                    {!isConnected && <NoNetworkScreen />}
                    {isConnected && <ComposedComponent {...this.props} />}
                </>
            );
        }
    }

    return networkDetector;
};
