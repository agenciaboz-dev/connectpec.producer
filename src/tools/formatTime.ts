export function formatTime(milliseconds: number): string {
    const oneSecond = 1000
    const oneMinute = 60 * oneSecond
    const oneHour = 60 * oneMinute
    const oneDay = 24 * oneHour
    const oneWeek = 7 * oneDay
    const oneMonth = 30 * oneDay
    const oneYear = 365 * oneDay

    if (milliseconds >= oneYear) {
        return `há ${Math.floor(milliseconds / oneYear)} ano${Math.floor(milliseconds / oneYear) > 1 ? "s" : ""}`
    } else if (milliseconds >= oneMonth) {
        return `há ${Math.floor(milliseconds / oneMonth)} mês${Math.floor(milliseconds / oneMonth) > 1 ? "es" : ""}`
    } else if (milliseconds >= oneWeek) {
        return `há ${Math.floor(milliseconds / oneWeek)} semana${Math.floor(milliseconds / oneWeek) > 1 ? "s" : ""}`
    } else if (milliseconds >= oneDay) {
        return `há ${Math.floor(milliseconds / oneDay)} dia${Math.floor(milliseconds / oneDay) > 1 ? "s" : ""}`
    } else if (milliseconds >= oneHour) {
        return `há ${Math.floor(milliseconds / oneHour)} hora${Math.floor(milliseconds / oneHour) > 1 ? "s" : ""}`
    } else if (milliseconds >= oneMinute) {
        return `há ${Math.floor(milliseconds / oneMinute)} minuto${Math.floor(milliseconds / oneMinute) > 1 ? "s" : ""}`
    } else {
        return `agora`
    }
}
