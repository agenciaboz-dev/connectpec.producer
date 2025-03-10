import { useCallback } from "react"
import { FormikHelpers } from "formik"

export function useUpdateFormikValues<T>(formikHelpers: FormikHelpers<T>) {
    const updateFormikValues = useCallback(
        <K extends keyof T & string>(field: K, value: T[K]) => {
            formikHelpers.setFieldValue(field, value)
        },
        [formikHelpers]
    )
    return updateFormikValues
}
