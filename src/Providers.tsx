import React from "react"
import { navigation_theme, paper_theme } from "./style/theme"
import { PaperProvider, Text } from "react-native-paper"
import { UserProvider } from "./contexts/userContext"
import { NavigationContainer } from "@react-navigation/native"
import constants from "expo-constants"
import { NotificationProvider } from "./contexts/notificationsContext"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <NavigationContainer
            theme={navigation_theme}
            linking={{
                prefixes: ["https://startja.agenciaboz.com.br", "http://localhost:8081"],
                config: {
                    screens: {
                        home: {
                            path: "",
                            // @ts-ignore
                            screens: {
                                login: "login",
                            },
                        },

                        investmentStudy: "estudo-de-investimento",

                        notfound: "*",
                    },
                },
            }}
            documentTitle={{ formatter: (options, route) => `ConectPec - ${route?.name}` }}
        >
            <UserProvider>
                <PaperProvider theme={paper_theme}>
                    <NotificationProvider>
                        {children}
                        <Text style={{ position: "absolute", bottom: 5, right: 5, color: "red" }}>{constants.expoConfig?.version}</Text>
                    </NotificationProvider>
                </PaperProvider>
            </UserProvider>
        </NavigationContainer>
    )
}
