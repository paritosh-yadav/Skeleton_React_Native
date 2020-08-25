// @flow
// Render No Network Screen
import React from "react";
import {
    StatusBar,
    Text,
    View,
} from "react-native";
import styles from "./noNetwork.component.style";

export default class NoNetworkScreen extends React.Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <Text>Internet connection lost !!!</Text>
            </View>
        );
    }
}
