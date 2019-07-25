import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DetailScreen, ModalScreen, SettingsScreen, ProfileScreen } from "component";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen,
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#f4511e",
            },
            headerBackTitle: null,
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        },
    }
);

const RootNavigator = createStackNavigator(
    {
        App: {
            screen: AppNavigator,
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

export default createAppContainer(RootNavigator);
