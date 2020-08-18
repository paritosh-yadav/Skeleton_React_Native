// @flow
import { StyleSheet } from "react-native";
import { commonStyle } from "globalstyles";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        ...commonStyle.mediumHeaderText,
        fontStyle: "italic"
    }
});
