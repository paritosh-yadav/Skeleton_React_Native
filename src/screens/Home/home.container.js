/**
 * @flow
 */
import React from "react";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { changeCounter, fetchingBreweries } from "statemanagement";
import { MenuButton } from "components";
import { HomeComponent } from "./home.component";
// import Config from "react-native-config";
import { networkDetector, constants } from "utils";

type HomeScreenNavigationProp = StackNavigationProp<null, 'Home'>;
type Props = {
    navigation: HomeScreenNavigationProp,
    counter: number,
    breweriesList: null | Array<number>,
    changeCounter: () => void,
    fetchingBreweries: (string, Object, Object) => Promise<Object>,
    fetchingBreweriesList: boolean,
    breweriesListError: null | Object,
};
class HomeContainer extends React.Component<Props> {
    async componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            title: "Home Screen",
            headerLeft: () => (
                <MenuButton onTap={navigation.openDrawer} />
            ),
        });
        try {
            await this.props.fetchingBreweries("breweries", null, null);
        } catch (error) {
            if (error.code === constants.AXIOS_TIMEOUT_ERROR_CODE) {
                // Handle timeout
                console.log("request timeout");
            }
        }
    }
    render() {
        return (
            <HomeComponent
                navigation={this.props.navigation}
                counter={this.props.counter}
                changeCounter={this.props.changeCounter}
                breweriesList={this.props.breweriesList}
                fetchingBreweriesList={this.props.fetchingBreweriesList}
                breweriesListError={this.props.breweriesListError}
            />
        );
    }
}

// Maping store slice with components props
const mapStateToProps = state => ({
    counter: state.homerReducer.counter,
    breweriesList: state.homerReducer.breweriesList,
    fetchingBreweriesList: state.homerReducer.fetchingBreweriesList,
    breweriesListError: state.homerReducer.breweriesListError,
});

// Maping dispatch with components props
const mapDispatchToProps = {
    changeCounter,
    fetchingBreweries
};

export default connect(mapStateToProps, mapDispatchToProps)(networkDetector(HomeContainer));
