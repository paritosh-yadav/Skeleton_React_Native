import { StyleSheet } from "react-native";
import { themeConfig, appTheme } from "./theme.style";

export default StyleSheet.create({
    largeButtonText: {
        fontSize: themeConfig.FONT_SIZE_LARGE,
        fontWeight: themeConfig.FONT_WEIGHT_BOLD
    },
    largeHeaderText: {
        fontSize: themeConfig.FONT_SIZE_LARGE
    },
    mediumHeaderText: {
        fontSize: themeConfig.FONT_SIZE_MEDIUM,
        color: appTheme.colors.secondary
    }
});
