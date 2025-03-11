import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { mobile } from "../../tools/platforms"

interface TwoButtonsViewProps {
    children?: React.ReactNode
    style?: StyleProp<ViewStyle>
}

export const TwoButtonsView: React.FC<TwoButtonsViewProps> = ({ children, style }) => {
    return (
        <View style={[{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }, mobile && { marginTop: 20 }, style]}>
            {children}
        </View>
    )
}
