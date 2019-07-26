import React from "react";
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { SafeAreaView } from "react-navigation";
import { menu } from "image";

export const MenuButton = props => (
    <TouchableOpacity onPress={props.onTap}>
        <Image source={menu} style={styles.menuButton} resizeMode="contain" />
    </TouchableOpacity>
);

const signOutAsync = async (props) => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
};

export const SideMenu = props => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")} style={styles.menuItems}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} style={styles.menuItems}>
                    <Text>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signOutAsync(props)} style={styles.menuItems}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
