import React from "react";
import { Button, Text } from "react-native-paper";
import { colors } from "../style/colors"

interface LoginButtonProps {
    onPress: () => void
    text: string
    button?: number
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onPress, text, button }) => {
    return (
        <Button
            style={{
                backgroundColor: button === 1 ? colors.primaryFixedDIM : button === 2 ? undefined : colors.onPrimaryFixedVariant,
            }}
            labelStyle={{}}
            onPress={onPress}
        >
            <Text
                variant={button === 1 ? "labelLarge" : button === 2 ? "titleLarge" : "titleMedium"}
                style={{
                    color: button === 1 ? colors.onSecondaryContainer : button === 2 ? colors.secondaryContainer : colors.onPrimary,
                    fontWeight: button === 2 ? 700 : 500,
                }}
            >
                {text}
            </Text>
        </Button>
    )
}
