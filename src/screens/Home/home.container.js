// @flow
import React from "react";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { changeCounter } from "statemanagement";
import { MenuButton } from "components";
import { HomeComponent } from "./home.component";
// import Config from "react-native-config";

type HomeScreenNavigationProp = StackNavigationProp<null, 'Home'>;
type Props = {
    navigation: HomeScreenNavigationProp,
    counter: number,
    changeCounter: () => void,
};
class HomeContainer extends React.Component<Props> {
    componentDidMount() {
        const { navigation } = this.props;
        navigation.setOptions({
            title: "Home Screen",
            headerLeft: () => (
                <MenuButton onTap={navigation.openDrawer} />
            ),
        });
    }

    render() {
        return (
            <HomeComponent navigation={this.props.navigation} counter={this.props.counter} changeCounter={this.props.changeCounter} />
        );
    }
}

// Maping store slice with components props
const mapStateToProps = state => ({
    counter: state.homerReducer.counter
});

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    changeCounter: () => dispatch(changeCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
