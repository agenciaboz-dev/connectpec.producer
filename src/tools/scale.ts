import { Dimensions } from "react-native"
import { web } from "./platforms"

export const scale = (value: number) => {
    const current_scale = Dimensions.get("window").scale

    return web ? value * (1 / current_scale) : value
}

export const vw = Dimensions.get("window").width / 100