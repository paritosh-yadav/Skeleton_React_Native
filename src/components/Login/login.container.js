// @flow
import React from "react";
import { connect } from "react-redux";
import { signIn } from "statemanagement";
import {
    StyleSheet,
    Button,
    View,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
});

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    signIn: (token) => dispatch(signIn(token))
});

export default connect(null, mapDispatchToProps)(LoginScreen);
