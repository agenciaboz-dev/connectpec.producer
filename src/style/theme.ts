import { MD3LightTheme as DefaultTheme, MD3Theme, configureFonts } from "react-native-paper"
import { DefaultTheme as NavigationTheme } from "@react-navigation/native"
import { colors } from "./colors"

export const paper_theme: MD3Theme = {
    ...DefaultTheme,

    fonts: configureFonts({ config: { fontFamily: "Montserrat_400Regular" } }),

    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
    },
}

export const navigation_theme = {
    ...NavigationTheme,
    ...paper_theme,
    colors: {
        ...NavigationTheme.colors,
        ...paper_theme.colors,
    },
}