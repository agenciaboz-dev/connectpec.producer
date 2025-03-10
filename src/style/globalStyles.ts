import { StyleSheet } from "react-native"
import { colors } from "./colors"

const titleColor = "#504539"

export const globalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        gap: 20,
        padding: 20,
    },

    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 10,
    },

    box: {
        backgroundColor: colors.box,
        borderRadius: 10,
        padding: 10,
        width: "100%",
    },

    homeBackground: {
        flex: 1,
    },

    homeBackgroundImage: {
        resizeMode: "cover",
        aspectRatio: 1,
        marginLeft: -200,
    },

    homeOverlay: {
        flex: 1,
    },

    multiLineButton: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },

    title: {
        fontFamily: "Montserrat_700Bold",
        fontSize: 22,
        color: titleColor,
        alignSelf: "flex-start",
    },
})