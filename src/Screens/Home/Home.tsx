import React from "react"
import { View } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { HomeStackParams } from "../../Routes"
import { useNavigation } from "@react-navigation/native"
import { Image } from "expo-image"
import { AppInfo } from "../../components/AppInfo"
import { Text } from "react-native-paper"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParams>>()
    return (
        <View style={{ flex:1 }}>
            <Image source={require("../../../assets/login_background.png")} style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }} />
        </View>
    )
}
