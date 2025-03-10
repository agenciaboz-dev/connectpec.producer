import React, { useCallback } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { default_navigator_options } from "./tools/default_navigator_options"
import { BackHandler, Dimensions } from "react-native"
import { useUser } from "./hooks/useUser"
import { useFocusEffect } from "@react-navigation/native"
import { Home } from "./Screens/Home/Home"

interface RoutesProps {}

export type HomeStackParams = {
    home: undefined
    investmentStudy: undefined
}

const Stack = createNativeStackNavigator<HomeStackParams>()

const { width, height } = Dimensions.get("screen")

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                return true
            }
            const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress)

            return () => {
                backHandler.remove()
            }
        }, [])
    )

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    ...default_navigator_options,
                    header: undefined,
                    headerShown: false,
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        </>
    )
}