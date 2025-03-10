import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { colors } from "../style/colors"
import constants from "expo-constants"

interface AppInfoProps {
    textColor?: string
}

export const AppInfo: React.FC<AppInfoProps> = ({ textColor = colors.primary }) => {
    const currentYear = new Date().getFullYear()

    return (
        <View
            style={[
                {
                    alignItems: "center",
                    alignSelf: "center",
                    paddingVertical: 10,
                },
            ]}
        >
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text style={{ color: textColor, fontSize: 12 }}>
                    v{constants.expoConfig?.version} © {currentYear} | ConectPec . Todos os direitos reservados
                </Text>
                <Text style={{ color: textColor, fontSize: 12 }}>Designed and powered by BOZ</Text>
            </View>
        </View>
    )
}
