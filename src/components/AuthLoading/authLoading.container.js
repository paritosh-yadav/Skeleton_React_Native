import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    StatusBar,
    View,
} from "react-native";

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});
