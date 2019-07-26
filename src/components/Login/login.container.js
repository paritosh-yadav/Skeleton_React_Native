import React from "react";
import {
    Button,
    View,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: "Please sign in",
    };

    render() {
        return (
            <View>
                <Button title="Sign in!" onPress={this.signInAsync} />
            </View>
        );
    }

    signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate("App");
    };
}
