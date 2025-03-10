import React, { useCallback } from "react"
import { BackHandler } from "react-native"
import { useUser } from "../hooks/useUser"
import { useResale } from "../hooks/useResale"
import { useFocusEffect } from "@react-navigation/native"
import { useCustomer } from "../hooks/useCustomer"

interface SettingsBackhandlerProps {
    admin?: boolean
}

export const SettingsBackhandler: React.FC<SettingsBackhandlerProps> = ({ admin }) => {
    const { setAdminSystem } = useUser()
    const { navigate: resaleNavigate, resale } = useResale()
    const { navigate: customerNavigate, currentCustomer: customer } = useCustomer()

    useFocusEffect(
        useCallback(() => {
            // admin && setTimeout(() => setAdminSystem(true), 100)
            const backhandler = BackHandler.addEventListener("hardwareBackPress", () => {
                if (resale) {
                    resaleNavigate(resale)
                }

                if (customer) {
                    customerNavigate(customer, resale)
                }
                return true
            })

            return () => {
                backhandler.remove()
            }
        }, [])
    )

    return null
}
