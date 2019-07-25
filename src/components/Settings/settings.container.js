
import React, { Fragment } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from "react-native";

import {
    Header,
    Colors,
} from "react-native/Libraries/NewAppScreen";

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: "Settings",
    };
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header />
                        <View style={styles.body}>
                            <Button
                                title="Go to Profile"
                                onPress={() => this.props.navigation.navigate("Profile")} // Navigate back to 'Details' clearing all the stack
                            // onPress={() => this.props.navigation.push("Details")} // push 'Details' again on the stack maintaining back stack
                            />
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Settings Screen</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: "absolute",
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        color: Colors.dark,
    },
    highlight: {
        fontWeight: "700",
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: "600",
        padding: 4,
        paddingRight: 12,
        textAlign: "right",
    },
});
