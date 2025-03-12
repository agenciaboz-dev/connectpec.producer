import React from "react";
import { Button, Text } from "react-native-paper";
import { colors } from "../style/colors"

interface PecButtonProps {
    onPress: () => void
    text: string
    button?: number
}

{
    /* 
    !A propriedade button define os estilos do botão
    button === 1
        backgroundColor: "#E9BF8E" || colors.primaryFixedDIM,
        variant: "labelLarge",
        color: "#281805" || colors.onSecondaryContainer,
        fontWeight: 500
    
    button === 2
        backgroundColor: undefined,
        variant: "titleLarge",
        color: "#FCDDBC" || colors.secondaryContainer,
        fontWeight: 700

    outros valores
        backgroundColor: "#603C29CC" || colors.onPrimaryFixedVariant,
        variant: "titleMedium",
        color: "#FFFFFF" || colors.onPrimary,
        fontWeight: 500

    */
}

export const PecButton: React.FC<PecButtonProps> = ({ onPress, text, button }) => {
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
