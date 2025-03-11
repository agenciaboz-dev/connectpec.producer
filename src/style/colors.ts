const hexToRgba = (hex: string, alpha: number) => {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)
    return `rgba(${r},${g},${b},${alpha})`
}

export const colors = {
    primary: "#825513",
    primaryContainer: "#FFDDB7",
    onPrimaryContainer: "#2A1700",
    secondary: "#715A41",
    secondaryContainer: "#FCDDBC",
    onSecondaryContainer: "#281805",
    tertiary: "#54643D",
    tertiaryContainer: "#D7E9B9",
    onTertiaryContainer: "#121F02",
    info: "#E8E5AC",
    input: "#825513",
    disabled: "#EEEEEE",
    background: "#ECE4E0D9",
    box: "#F8F2EC",
    dark: "#1C1B1B",
    placeholder: "#D4C4B5",
    success: "#34A853",
    warning: "#EfB436",
    error: "#BA1A1A",
    inversePrimary: "#E9BF8E",
    darkInversePrimary: "#724A2E",
    overlay: hexToRgba("#523226", 0.9),
}
