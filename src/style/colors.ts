const hexToRgba = (hex: string, alpha: number) => {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)
    return `rgba(${r},${g},${b},${alpha})`
}

export const colors = {
    primary: "#825513",
    secondary: "#715A41",
    tertiary: "#54643D",
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
    overlay: hexToRgba("#523226", 0.9),
}
