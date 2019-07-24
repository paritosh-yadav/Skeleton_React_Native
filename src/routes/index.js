import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DetailScreen } from "component";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailScreen
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(AppNavigator);
