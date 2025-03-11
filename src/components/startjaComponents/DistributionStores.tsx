import { Image } from "expo-image"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import { Text, useTheme } from "react-native-paper"
import { scale } from "../../tools/scale"
import { web } from "../../tools/platforms"

interface DistributionStoresProps {}

const ItemContainer: React.FC<{ apple?: boolean }> = ({ apple }) => {
    const icon_size = scale(30)

    return (
        <TouchableOpacity
            onPress={() => console.log("aa")}
            style={{
                borderRadius: 5,
                backgroundColor: "#000",
                flexDirection: "row",
                alignItems: "center",
                gap: scale(5),
                padding: scale(2),
                paddingHorizontal: scale(10),
            }}
        >
            <Image
                source={apple ? require(`../../assets/stores/apple-icon.png`) : require(`../../assets/stores/playstore-icon.png`)}
                style={{ width: icon_size, height: icon_size }}
                contentFit="contain"
            />
            <View style={{ justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: scale(10) }}>{apple ? "Download on the" : "GET IT ON"}</Text>
                <Text style={{ color: "#fff", fontSize: scale(15), lineHeight: scale(20) }} variant="titleLarge">
                    {apple ? "App Store" : "Google Play"}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export const DistributionStores: React.FC<DistributionStoresProps> = ({}) => {
    const theme = useTheme()

    return (
        <View
            style={{
                alignItems: "center",
                gap: scale(10),
                alignSelf: "center",
            }}
        >
            <Text style={[web && { fontSize: scale(14) }]}>Obtenha o aplicativo</Text>
            <View style={{ flexDirection: "row", gap: scale(20) }}>
                <ItemContainer apple />
                <ItemContainer />
            </View>
        </View>
    )
}
