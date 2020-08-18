// @flow
import React from "react";
import { connect } from "react-redux";
import { signIn } from "statemanagement";
import {
    Button,
    View,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./login.container.style";

type Props = {
    navigation: Object,
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
                <Button title="Sign in!" onPress={this.signInAsync} />
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
