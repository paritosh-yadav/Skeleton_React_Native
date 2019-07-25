
import React, { Fragment } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
} from "react-native";

import {
    Header,
    Colors,
} from "react-native/Libraries/NewAppScreen";

import { logo, backIcon } from "image";

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={logo}
                resizeMode="contain"
                style={{ width: 160, height: 30 }}
            />
        );
    }
}

const RenderRightHeaderButton = ({ onHeaderRightTap }) =>
    <Button
        onPress={onHeaderRightTap}
        title="Info"
        color="#fff"
    />;

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <LogoTitle />,
            headerRight: <RenderRightHeaderButton onHeaderRightTap={navigation.getParam("onHeaderRightTap")} />,
            headerBackImage: <Image source={backIcon} style={{ width: 20, height: 20, marginLeft: 5 }} resizeMode="contain" />,
        };
    };
    constructor(props) {
        super(props);
        this.props.navigation.setParams({ onHeaderRightTap: this.onHeaderRightTap });
    }
    onHeaderRightTap = () => {
        alert("This is a button!");
    }
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
                                title="Go to Settings"
                                onPress={() => this.props.navigation.navigate("Settings")}
                            />
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Profile Screen</Text>
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
