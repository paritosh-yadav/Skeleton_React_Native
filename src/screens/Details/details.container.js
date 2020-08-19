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
import { RouteProp } from "@react-navigation/native";
import { Header } from "react-native/Libraries/NewAppScreen";
import styles from "./details.container.style";

type RootStackParamList = {
  itemId: number;
  otherParam: string;
};
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type Props = {
  navigation: DetailsScreenNavigationProp,
  route: DetailsScreenRouteProp
}
export class ModalScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default class DetailScreen extends React.Component<Props> {
  static navigationOptions = ({ navigation, navigationOptions }: { navigation: Object, navigationOptions: Object }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : "Details",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    const { navigation, route } = this.props;
    const itemId = route.params ?.itemId ?? "NO-ID";
    const otherParam = route.params ?.otherParam ?? "some default value";
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <Button
              onPress={() => navigation.navigate("MyModal")}
              title="Modal"
            />
            <Button
              title="Go to Profile"
              onPress={() => this.props.navigation.navigate("Profile")}
            />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step #Two {itemId}</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js {otherParam}</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
