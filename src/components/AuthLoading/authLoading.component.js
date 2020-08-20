// @flow
import React from "react";
import {
    ActivityIndicator,
    StatusBar,
    View,
} from "react-native";
import styles from "./authLoading.component.style";

export default class AuthLoadingScreen extends React.Component<{}> {
    // Render Splash, etc.
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
