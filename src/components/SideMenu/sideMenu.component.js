// @flow
import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../redux";
import {
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import { menu } from "../../assets";

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

type SideMenuProps = {
    navigation: Object,
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

const styles = StyleSheet.create({
    menuButton: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    menuItems: {
        marginHorizontal: 10,
        marginVertical: 5,
    }
});

// Maping dispatch with components props
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(SideMenu);
