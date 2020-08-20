// @flow
import React, { Fragment } from "react";
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Header } from "react-native/Libraries/NewAppScreen";
import styles from "./profile.container.style";
import { logo, backIcon } from "assets";

class LogoTitle extends React.Component<{}> {
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

type ProfileScreenNavigationProp = StackNavigationProp<null, 'Profile'>;
type Props = {
    navigation: ProfileScreenNavigationProp,
};
export default class ProfileScreen extends React.Component<Props> {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            headerTitle: <LogoTitle />,
            headerBackTitleVisible: false,
            headerRight: () => (<Button onPress={this.onHeaderRightTap} title="Info" color="#fff" />),
            headerBackImage: () => (<Image source={backIcon} style={styles.headerBackImageStyle} resizeMode="contain" />)
        });
    }

    onHeaderRightTap = () => {
        console.log("This is a button!");
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
