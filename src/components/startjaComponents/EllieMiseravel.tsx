import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"

interface EllieMiseravelProps {
    style?: StyleProp<ViewStyle>
    color?: string
}

export const EllieMiseravel: React.FC<EllieMiseravelProps> = ({ style, color }) => {
    return (
        <View
            style={[
                {
                    width: 15,
                    height: 15,
                    marginTop: -8,
                    borderBottomWidth: 2,
                    borderLeftWidth: 2,
                    borderLeftColor: color || "rgba(0, 0, 0, 0.25)",
                    borderBottomColor: color || "rgba(0, 0, 0, 0.25)",
                    marginLeft: 30,
                },
                style,
            ]}
        />
    )
}
