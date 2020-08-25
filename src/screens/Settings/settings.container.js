/**
 * @flow
 */
import React, { Fragment } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import { MenuButton } from "components";
import styles from "./settings.container.style";

type SettingsScreenNavigationProp = StackNavigationProp<null, 'Settings'>;
type Props = {
    navigation: SettingsScreenNavigationProp,
};

export default class SettingsScreen extends React.Component<Props> {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            title: "Settings",
            headerLeft: () => (
                <MenuButton onTap={navigation.openDrawer} />
            ),
        });
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
