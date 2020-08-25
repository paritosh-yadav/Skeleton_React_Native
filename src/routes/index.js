/**
 * @flow
 */
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Image, } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { restoreToken } from "statemanagement";
import { SideMenu, AuthLoadingScreen } from "components";
import { HomeScreen, DetailScreen, ModalScreen, SettingsScreen, ProfileScreen, LoginScreen } from "screens";
import { home, settings } from "assets";
import { themeStyle } from "globalstyles";

type RouteConfigProps = {
    isLoading: boolean,
    isSignout: boolean,
    userToken: string,
    fetchToken: (string) => void,
}

const RouteConfig = ({ isLoading, isSignout, userToken, fetchToken }: RouteConfigProps) => {
    // Configuration for stack naigator "screenOption"
    const stackNavigatorScreenOptions = (colors) => {
        return {
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerBackTitle: null,
            headerTintColor: colors.primaryContrast,
            headerTitleStyle: {
                fontWeight: "bold",
            },
        };
    };

    // Configuration for tab naigator "screenOption"
    const tabNavigatorScreenOptions = ({ route }) => ({
        tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "Home") {
                iconName = home;
            } else if (route.name === "Settings") {
                iconName = settings;
            }
            // You can return any component that you like here!
            return <Image source={iconName} style={{ width: 20, height: 20, tintColor: color }} resizeMode="contain" />;
        },
    });


    //Stack Navigators
    const HomeStack = createStackNavigator();
    const SettingsStack = createStackNavigator();
    const RootStack = createStackNavigator();
    const ModalStack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();



    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let token: string = "";

            try {
                token = await AsyncStorage.getItem("userToken");
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            fetchToken(token);
        };

        bootstrapAsync();
    }, []);


    //Stack for Home screens
    const HomeStackScreen = () => {
        const { colors } = useTheme();
        return (
            <HomeStack.Navigator screenOptions={stackNavigatorScreenOptions(colors)}>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailScreen} />
                <HomeStack.Screen name="Profile" component={ProfileScreen} />
            </HomeStack.Navigator>
        );
    };

    //Stack for Settings screens
    const SettingStackScreen = () => {
        const { colors } = useTheme();
        return (
            <SettingsStack.Navigator screenOptions={stackNavigatorScreenOptions(colors)}>
                <SettingsStack.Screen name="Settings" component={SettingsScreen} />
                <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
        );
    };

    //Stack for modal
    const ModalStackScreen = () => {
        const { colors } = useTheme();
        return (
            <ModalStack.Navigator mode="modal" screenOptions={stackNavigatorScreenOptions(colors)}>
                <ModalStack.Screen name="MyModal" component={ModalScreen} />
            </ModalStack.Navigator>
        );
    };

    //Stack for drawer
    const DrawerStackScreen = () => {
        return (
            <Drawer.Navigator initialRouteName="Tabs" drawerContent={props => <SideMenu {...props} />}>
                <Drawer.Screen name="Tabs" component={TabStackScreen} />
            </Drawer.Navigator>
        );
    };

    //Stack for tabs
    const TabStackScreen = () => {
        const { colors } = useTheme();
        return (
            <Tab.Navigator
                screenOptions={tabNavigatorScreenOptions}
                tabBarOptions={{
                    activeTintColor: colors.secondary,
                    inactiveTintColor: colors.grey,
                }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={SettingStackScreen} />
            </Tab.Navigator>
        );
    };

    // While fetching token from storage
    if (isLoading) {
        return <AuthLoadingScreen />;
    }

    return (
        <NavigationContainer theme={themeStyle.appTheme}>
            <RootStack.Navigator mode="modal" screenOptions={stackNavigatorScreenOptions}>
                {userToken
                    ? (<>
                        <RootStack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerStackScreen} />
                        <RootStack.Screen options={{ headerShown: false }} name="MyModal" component={ModalStackScreen} />
                    </>)
                    : (<>
                        <RootStack.Screen name="Login" component={LoginScreen}
                            options={{
                                // When logging out, a pop animation feels intuitive
                                // You can remove this if you want the default 'push' animation
                                animationTypeForReplace: isSignout ? "pop" : "push",
                            }} />
                    </>)}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

// Maping store slice with components props
const mapStateToProps = state => ({
    isLoading: state.loginReducer.isLoading,
    isSignout: state.loginReducer.isSignout,
    userToken: state.loginReducer.userToken,
});

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    fetchToken: (token) => dispatch(restoreToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteConfig);
