import * as Yup from "yup"
import { validationErrors } from "../tools/validationErrors"

export const manager_schema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, validationErrors.invalidEmail)
        .required(validationErrors.required),
    name: Yup.string().required(validationErrors.required),
})

