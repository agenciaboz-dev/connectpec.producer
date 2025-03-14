import axios, { AxiosError } from "axios"
import { dev_url, url } from "./backend"
import { HandledError } from "../types/server/class/HandledError"

export const api = axios.create({ baseURL: "http" + url })
export const dev_api = axios.create({ baseURL: "http" + dev_url })

export const handleError = (error: unknown, onHandledError: (message: string) => void) => {
    if (error instanceof AxiosError) {
        const data = error.response?.data
        if (data.type === "handled_error") {
            const handledError = data as HandledError
            console.log(handledError)
            onHandledError(handledError.message)
        }
    } else {
        console.log(error)
    }
}
