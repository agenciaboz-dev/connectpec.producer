export interface PendencyBag {
    formik_value: string
    error_text: string
}

export interface PendencyHandler {
    key: string
    text: string
    onPress: () => void
}
