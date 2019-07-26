import React from "react";
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { menu } from "image";

export const MenuButton = props => (
    <TouchableOpacity onPress={props.onTap}>
        <Image source={menu} style={{ width: 20, height: 20, marginLeft: 10 }} resizeMode="contain" />
    </TouchableOpacity>
);

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
            </View>
        </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuItems: {
        // margin: 5
        marginHorizontal: 10,
        marginVertical: 5,
    }
});
