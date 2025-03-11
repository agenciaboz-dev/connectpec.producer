import React from "react"
import { View } from "react-native"
import { IconButton, Text } from "react-native-paper"
import { colors } from "../../style/colors"
import { scale } from "../../tools/scale"

interface ModalTitleProps {
    title: string
    onDismiss: () => void
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ title, onDismiss }) => {
    return (
        <View style={[{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
            <Text variant="titleLarge" style={[{ fontWeight: "bold", color: colors.grey, fontSize: scale(24) }]}>
                {title}
            </Text>
            <IconButton icon={"close"} style={{ margin: 0 }} onPress={onDismiss} />
        </View>
    )
}
