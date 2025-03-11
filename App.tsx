import "@expo/metro-runtime"
import "./global.css"

import { StatusBar } from "expo-status-bar"
import { Providers } from "./src/Providers"
import { Routes } from "./src/Routes"
import { useKeepAwake } from "expo-keep-awake"
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react"
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat"
// import { NotificationsHandler } from "./src/components/NotificationsHandler"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { UIManager } from "react-native"
import { android } from "./src/tools/platforms"
import { url } from "./src/backend/backend"

// SplashScreen.preventAutoHideAsync()
if (android && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function App() {
    useKeepAwake()

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
                <Providers>
                    <StatusBar animated translucent style={"dark"} />
                    <Routes />
                    {/* <NotificationsHandler /> */}
                </Providers>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
