import { useLinkProps } from "@react-navigation/native"
import React from "react"
import { TouchableOpacity } from "react-native"
import { Button, Text } from "react-native-paper"
import { colors } from "../../style/colors"
import { web } from "../../tools/platforms"
import { scale } from "../../tools/scale"

interface LinkButtonProps {
    to: string
    params?: any
    children?: React.ReactNode
    button?: boolean
}

export const LinkButton: React.FC<LinkButtonProps> = ({ to, children, params, button }) => {
    const { onPress, ...props } = useLinkProps({ to })
    const Pressable = button ? Button : TouchableOpacity
    return (
        <Pressable onPress={onPress} {...props} mode="contained">
            <Text variant="titleSmall" style={[{ color: button ? "#fff" : colors.primary, fontWeight: "bold" }, web && { fontSize: scale(14) }]}>
                {children}
            </Text>
        </Pressable>
    )
}
