// @flow
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
import styles from "./home.component.style";

type HomeScreenNavigationProp = StackNavigationProp<null, 'Home'>;
type Props = {
    navigation: HomeScreenNavigationProp,
    counter: number,
    changeCounter: () => void,
};
export function HomeComponent({ navigation, counter, changeCounter }: Props) {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                >
                    <Header />
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={styles.body}>
                        <Button
                            title="Go to Details"
                            onPress={() =>
                                navigation.navigate("Details", {
                                    itemId: 86,
                                    otherParam: "anything"
                                })
                            }
                        />
                        <Button
                            title="Update the title"
                            onPress={() =>
                                navigation.setOptions({
                                    title: "Home Updated!"
                                })
                            }
                        />
                        <Button
                            title="Change Counter"
                            onPress={changeCounter}
                        />

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step #One{counter.toString()}</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.js</Text> to change
                                this screen and then come back to see your edits.
                </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
}
