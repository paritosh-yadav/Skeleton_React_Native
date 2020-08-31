/**
 * @flow
 */
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
    },
    textInput: {
        width: 200,
        marginVertical: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 5,
    },
});
