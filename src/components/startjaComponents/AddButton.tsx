import React from "react"
import { IconButton } from "react-native-paper"
import { colors } from "../style/colors"

interface AddButtonProps {
    onPress: () => void
}

export const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
    return (
        <IconButton
            icon="plus-thick"
            mode="contained"
            iconColor={colors.box}
            containerColor={colors.primary}
            size={18}
            style={{ width: 20, height: 20 }}
            onPress={onPress}
        />
    )
}