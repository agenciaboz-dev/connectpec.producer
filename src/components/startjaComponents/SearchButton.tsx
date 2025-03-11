import React from "react"
import { Icon, Surface, TouchableRipple } from "react-native-paper"

interface SearchButtonProps {
    icon_size: number
    onPress: () => void
}

export const SearchButton: React.FC<SearchButtonProps> = ({ icon_size, onPress }) => {
    return (
        <Surface style={{ borderRadius: 100 }} elevation={0}>
            <TouchableRipple
                borderless
                style={[
                    {
                        borderRadius: 100,
                        height: icon_size,
                        aspectRatio: 1,
                        borderWidth: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    },
                ]}
                onPress={onPress}
            >
                <Icon size={30} source="magnify" />
            </TouchableRipple>
        </Surface>
    )
}
