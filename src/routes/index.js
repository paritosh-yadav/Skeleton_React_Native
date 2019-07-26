import React from "react";
import { Image } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";
import { HomeScreen, DetailScreen, ModalScreen, SettingsScreen, ProfileScreen, SideMenu, AuthLoadingScreen, LoginScreen } from "component";
import { home, settings } from "image";

const defaultNavigationOptions = {
    stackNavigator: {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#f4511e",
            },
            headerBackTitle: null,
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        }
    },
    tabNavigator: {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    iconName = home;
                } else if (routeName === "Settings") {
                    iconName = settings;
                }
                // You can return any component that you like here!
                return <Image source={iconName} style={{ width: 20, height: 20, tintColor }} resizeMode="contain" />;
            },
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
        },
    }
};

const AuthStack = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        ...defaultNavigationOptions.stackNavigator,
    }
);

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen,
        Profile: ProfileScreen,
    },
    {
        ...defaultNavigationOptions.stackNavigator,
    }
);

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index === 1) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const SettingsStack = createStackNavigator(
    {
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        ...defaultNavigationOptions.stackNavigator,
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        initialRouteName: "Settings",
        ...defaultNavigationOptions.tabNavigator,
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        Tabs: TabNavigator
    },
    {
        contentComponent: props => <SideMenu {...props} />,
    }
);

const AppNavigator = createStackNavigator(
    {
        Drawer: {
            screen: DrawerNavigator,
        },
        MyModal: {
            screen: ModalScreen,
        },
    },
    {
        mode: "modal",
        headerMode: "none",
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: "AuthLoading",
    }
);

export default createAppContainer(SwitchNavigator);
