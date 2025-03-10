import React from "react"
import { StyleProp, View, ViewStyle } from "react-native"

interface TravessaoMiseravelProps {
    style?: StyleProp<ViewStyle>
    color?: string
}

export const TravessaoMiseravel: React.FC<TravessaoMiseravelProps> = ({ style, color }) => {
    return (
        <View
            style={[
                {
                    width: 15,
                    height: 15,
                    marginTop: -9,
                    borderBottomWidth: 2,
                    borderBottomColor: color || "rgba(0, 0, 0, 0.25)",
                    marginLeft: 15,
                },
                style,
            ]}
        />
    )
}
