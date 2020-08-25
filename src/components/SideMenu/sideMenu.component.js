/**
 * @flow
 */
import React from "react";
import { connect } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import {
    Image,
    TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./sideMenu.component.style";
import { signOut } from "statemanagement";
import { menu } from "assets";

type MenuButtonProps = {
    onTap: () => void,
};
export const MenuButton = (props: MenuButtonProps) => (
    <TouchableOpacity onPress={props.onTap}>
        <Image source={menu} style={styles.menuButton} resizeMode="contain" />
    </TouchableOpacity>
);

const signOutAsync = async (props: Object) => {
    await AsyncStorage.clear();
    props.signOut();
};

type SideMenuNavigationProp = StackNavigationProp<null, 'SideMenu'>;
type SideMenuProps = {
    navigation: SideMenuNavigationProp,
}

const SideMenu = (props: SideMenuProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Home" onPress={() => props.navigation.navigate("Home")} style={styles.menuItems} />
            <DrawerItem label="Settings" onPress={() => props.navigation.navigate("Settings")} style={styles.menuItems} />
            <DrawerItem label="Logout" onPress={() => signOutAsync(props)} style={styles.menuItems} />
        </DrawerContentScrollView>
    );
};

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(SideMenu);
