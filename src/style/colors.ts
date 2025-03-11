const hexToRgba = (hex: string, alpha: number) => {
    let r = parseInt(hex.substring(1, 3), 16)
    let g = parseInt(hex.substring(3, 5), 16)
    let b = parseInt(hex.substring(5, 7), 16)
    return `rgba(${r},${g},${b},${alpha})`
}

export const colors = {
    primary: "#825513",
    onPrimary: "#FFFFFF",
    primaryContainer: "#FFDDB7",
    onPrimaryContainer: "#2A1700",
    primaryFixed: "#FFDDB7",
    primaryFixedDIM: "#E9BF8E",
    onPrimaryFixed: "#2A1700",
    onPrimaryFixedVariant: "#603C29CC",

    secondary: "#715A41",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#FCDDBC",
    onSecondaryContainer: "#281805",
    secondaryFixed: "#E7D8B3",
    secondaryFixedDIM: "#D0B06C",
    onSecondaryFixed: "#20140F",
    onSecondaryFixedVariant: "#2D1B10",

    tertiary: "#54643D",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#D7E9B9",
    onTertiaryContainer: "#121F02",
    tertiaryFixed: "#ECF6DD",
    tertiaryFixedDIM: "#DBEEBF",
    onTertiaryFixed: "#3E5826",
    onTertiaryFixedVariant: "#568128",

    surfaceDIM: "#E5D8CC",
    surface: "#FFFFFF",
    surfaceBright: "#FFF8F4",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerLow: "#FFF1E5",
    surfaceContainer: "#F9ECE0",
    surfaceContainerHigh: "#F8F2EC",
    surfaceContainerHighest: "#EEE0D4",
    onSurface: "#1C1B1B",
    onSurfaceVariant: "#504539",
    outline: "#827568",
    outlineVariant: "#D4C4B5",

    inverseSurface: "#34302C",
    inverseOnSurface: "#F8EFE9",
    inversePrimary: "#E9BF8E",
    darkInversePrimary: "#724A2E",
    scrim: "#140B0B",
    shadow: "#140B0B",

    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",

    info: "#E8E5AC",
    input: "#825513",
    disabled: "#EEEEEE",
    background: "#ECE4E0D9",
    box: "#F8F2EC",
    dark: "#1C1B1B",
    placeholder: "#D4C4B5",
    success: "#34A853",
    warning: "#EfB436",
    overlay: hexToRgba("#523226", 0.9),
}
