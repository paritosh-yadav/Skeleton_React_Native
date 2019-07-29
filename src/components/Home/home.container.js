import React from "react";
import { connect } from "react-redux";
import { changeCounter } from "reducer";
import { MenuButton } from "component";
import { HomeComponent } from "./home.component";
// import Config from "react-native-config";

class HomeContainer extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("otherParam", "Home"),
            headerLeft: <MenuButton onTap={navigation.openDrawer} />,
        };
    };
    render() {
        return (
            <HomeComponent navigation={this.props.navigation} counter={this.props.counter} changeCounter={this.props.changeCounter} />
        );
    }
}

const mapStateToProps = state => ({
    counter: state.homerReducer.counter
});

const mapDispatchToProps = dispatch => ({
    changeCounter: () => dispatch(changeCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
