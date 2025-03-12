import React from "react"
import { View } from "react-native"
import { Text } from "react-native-paper"
import constants from "expo-constants"
import { colors } from "../../style/colors"

interface AppInfoProps {
    textColor?: string
}

export const AppInfo: React.FC<AppInfoProps> = ({ textColor = colors.secondaryContainer }) => {
    const currentYear = new Date().getFullYear()

    return (
        <View
            style={[
                {
                    alignItems: "center",
                    alignSelf: "center",
                    paddingVertical: 12,
                },
            ]}
        >
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text variant="bodySmall" style={{ color: textColor, fontWeight: 400, textAlign: "center" }}>
                    {`v${constants.expoConfig?.version} © ${currentYear} | ConectPec . Todos os direitos reservados \n Designed and powered by BOZ`}
                </Text>
            </View>
        </View>
    )
}
