import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useEffect, useRef, useState } from "react"
import React from "react"
import { User } from "../types/server/class"
import { useLinkTo } from "@react-navigation/native"

interface UserContextValue {
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    expoPushToken: string
    setExpoPushToken: React.Dispatch<React.SetStateAction<string>>
    updateNotification: (notification: Notification) => void

    adminSystem: boolean
    setAdminSystem: React.Dispatch<React.SetStateAction<boolean>>

    settingsSystemType: "customer" | "resale" | "admin" | null
    setSettingsSystemType: React.Dispatch<React.SetStateAction<"customer" | "resale" | "admin" | null>>
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const firstRender = useRef(true)
    const linkTo = useLinkTo()

    const [adminSystem, setAdminSystem] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [expoPushToken, setExpoPushToken] = useState("")
    const [settingsSystemType, setSettingsSystemType] = useState<"customer" | "resale" | "admin" | null>(null)

    const updateNotification = (notification: Notification) => {
        // @ts-ignore
        setUser((user) => ({ ...user, notifications: [...user?.notifications.filter((item) => item.id != notification.id), notification] }))
    }

    const saveLocally = async () => {
        await AsyncStorage.setItem("user", JSON.stringify(user))
    }

    const fetchLocallySavedUser = async () => {
        const data = await AsyncStorage.getItem("user")
        if (data) {
            const user = JSON.parse(data) as User
            setUser(user)
        }
    }

    useEffect(() => {
        fetchLocallySavedUser()
    }, [])

    useEffect(() => {
        saveLocally()
        if (firstRender.current) {
            firstRender.current = false
        } else {
            if (!user) {
                linkTo("/login")
            }
        }
    }, [user])

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                expoPushToken,
                setExpoPushToken,
                updateNotification,
                adminSystem,
                setAdminSystem,
                settingsSystemType,
                setSettingsSystemType,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
