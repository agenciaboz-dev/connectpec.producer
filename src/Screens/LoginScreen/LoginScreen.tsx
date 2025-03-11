import React from "react"
import { View } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { HomeStackParams } from "../../Routes"
import { useNavigation } from "@react-navigation/native"
import { Image } from "expo-image"
import { Button, Text } from "react-native-paper"
import { colors } from "../../style/colors"
import { AppInfo } from "../../components/startjaComponents/AppInfo"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require("../../../assets/login_background.png")}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
            <View style={{ paddingHorizontal: 50, paddingTop: 40, flex: 1, justifyContent: "space-between" }}>
                <View>
                    <Button mode={"contained"} style={{ marginLeft: "auto" }}>
                        Suporte
                    </Button>
                </View>
                <View style={{ flexDirection: "row", gap: 207 }}>
                    <View style={{ flex: 1, gap: 20, borderColor: "#ff0000", borderWidth: 1 }}>
                        <Image
                            source={require("../../../assets/logo_text_white.png")}
                            style={{
                                width: 196,
                                height: 82,
                            }}
                        />
                        <Text variant="displayLarge" style={{ fontWeight: 700, color: colors.box }}>
                            Acesse aqui a Central do Produtor com suas credenciais para gerenciar seu Negócio.
                        </Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "#ff0000", borderWidth: 1 }}>{/* <LoginComponent /> */}</View>
                </View>
                <AppInfo />
            </View>
        </View>
    )
}
