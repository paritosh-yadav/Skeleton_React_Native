// @flow
import { StyleSheet } from "react-native";
import { themeStyle } from "globalstyles";

export default StyleSheet.create({
    menuButton: {
        width: 20,
        height: 20,
        marginLeft: 10,
        tintColor: themeStyle.appTheme.colors.primaryContrast
    },
    menuItems: {
        marginHorizontal: 10,
        marginVertical: 5,
    }
});
