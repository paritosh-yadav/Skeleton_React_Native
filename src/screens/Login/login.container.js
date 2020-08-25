/**
 * @flow
 */
import React from "react";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { signIn } from "statemanagement";
import {
    Button,
    View,
    Text,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./login.container.style";
import { commonStyle } from "globalstyles";

type LoginScreenNavigationProp = StackNavigationProp<null, 'Login'>;
type Props = {
    navigation: LoginScreenNavigationProp,
    signIn: (string) => void,
};

class LoginScreen extends React.Component<Props> {

    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            title: "Please sign in",
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Button title="Tap to sign in" onPress={this.signInAsync} />
                <Text style={commonStyle.largeButtonText}>Sign in!</Text>
            </View>
        );
    }

    signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "dummy-token");
        this.props.signIn("dummy-token");
    };
}

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    signIn: (token) => dispatch(signIn(token))
});

export default connect(null, mapDispatchToProps)(LoginScreen);
