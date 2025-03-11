import React from "react"
import { DimensionValue, StyleProp, View, ViewStyle } from "react-native"

export interface TrianguloMiseravelProps {
    color?: string
    top?: DimensionValue
    left?: DimensionValue
    right?: DimensionValue
    bottom?: DimensionValue
    style?: StyleProp<ViewStyle>
}

export const TrianguloMiseravel: React.FC<TrianguloMiseravelProps> = (props) => {
    return (
        <View
            style={[
                {
                    width: 0,
                    height: 0,
                    position: "absolute",
                    right: props.right || 15,
                    top: props.top || -10,
                    left: props.left || undefined,
                    bottom: props.bottom || undefined,
                    borderTopColor: "transparent",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderTopWidth: 10,
                    borderBottomWidth: 10,
                    borderRightWidth: 10,
                    borderLeftWidth: 10,
                },
                props.style,
            ]}
        ></View>
    )
}
