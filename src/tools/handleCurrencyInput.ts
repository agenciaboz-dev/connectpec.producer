export const handleCurrencyInput = (inputed: string) => {
    const digits = inputed.replace(/\D/g, "")

    const value = digits ? Number(digits) / 100 : 0
    return value.toString()
}
