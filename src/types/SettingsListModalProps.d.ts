import { FormikBundle } from "./FormikBundle"

export interface SettingsListModalProps<T> {
    opened: boolean
    onClose: () => void
    onSubmit: (item: T) => void
    initialItem?: T
    formik?: FormikBundle<T>
    payload?: any
}
