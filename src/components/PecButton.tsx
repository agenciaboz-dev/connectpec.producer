import React from "react";
import { Button, Text } from "react-native-paper";
import { colors } from "../style/colors"

interface PecButtonProps {
    onPress: () => void
    text: string
    buttonType?: number
}

{
    /* 
    !A propriedade buttonType define os estilos do botão
    buttonType === 1
        backgroundColor: "#E9BF8E" || colors.primaryFixedDIM,
        variant: "labelLarge",
        color: "#281805" || colors.onSecondaryContainer,
        fontWeight: 500
    
    buttonType === 2
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

export const PecButton: React.FC<PecButtonProps> = ({ onPress, text, buttonType }) => {
    return (
        <Button
            style={{
                backgroundColor: buttonType === 1 ? colors.primaryFixedDIM : buttonType === 2 ? undefined : colors.onPrimaryFixedVariant,
            }}
            labelStyle={{}}
            onPress={onPress}
        >
            <Text
                variant={buttonType === 1 ? "labelLarge" : buttonType === 2 ? "titleLarge" : "titleMedium"}
                style={{
                    color: buttonType === 1 ? colors.onSecondaryContainer : buttonType === 2 ? colors.secondaryContainer : colors.onPrimary,
                    fontWeight: buttonType === 2 ? 700 : 500,
                }}
            >
                {text}
            </Text>
        </Button>
    )
}
