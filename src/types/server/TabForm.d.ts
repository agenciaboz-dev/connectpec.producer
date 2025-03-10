import { FormikBundle } from "../FormikBundle"

export interface TabForm<FormType> {
    currentIndex: number
    error?: { name: keyof FormType; error: string }
    formik: FormikBundle<FormType>
}

export interface TabSubRoute<TabRouteType> {
    key: TabRouteType
    title: string
}
