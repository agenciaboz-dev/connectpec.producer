import React from "react"
import { View, ViewStyle } from "react-native"
import { Text } from "react-native-paper"
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types"
import { scale } from "../../tools/scale"

interface LabeledComponentProps {
    label: TextInputLabelProp
    Component: React.ReactNode
    marginBottom?: number
    orientation?: "vertical" | "horizontal"
    reverse?: boolean
    style?: ViewStyle
}

export const LabeledComponent: React.FC<LabeledComponentProps> = ({ label, Component, marginBottom, orientation = "vertical", reverse, style }) => {
    return (
        <View
            style={[
                orientation == "horizontal" && { flexDirection: "row", alignItems: "center" },
                reverse && {
                    flexDirection: orientation == "horizontal" ? "row-reverse" : "column-reverse",
                    justifyContent: "flex-start",
                },

                style,
            ]}
        >
            <Text variant="bodySmall" style={[{ marginLeft: scale(5), marginBottom, fontSize: scale(14) }]}>
                {label}
            </Text>
            {Component}
        </View>
    )
}
