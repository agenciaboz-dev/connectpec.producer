import React, { useRef, useState } from "react"
import { TextInput as TextInputNative, View } from "react-native"
import { Text, TextInput, TextInputProps, useTheme } from "react-native-paper"
import { FormText } from "../../components/startjaComponents/FormText"
import { useFormik } from "formik"
import { PecButton } from "../../components/PecButton"

interface LoginComponentProps {}

export const LoginComponent: React.FC<LoginComponentProps> = () => {
    const [loading, setLoading] = useState(false)
    const password_ref = useRef<TextInputNative>(null)

    const formik = useFormik<any>({
        initialValues: {
            login: "",
            password: "",
        },
        async onSubmit(values, formikHelpers) {
            if (loading) return
            setLoading(true)
            try {
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        },
        validateOnChange: false,
        enableReinitialize: true,
    })

    return (
        <View style={{ gap: 40 }}>
            <FormText formik={formik} name="login" placeholder="CPF" onSubmitEditing={() => password_ref.current?.focus()} inputType={1} />
            <FormText
                ref={password_ref}
                formik={formik}
                name="password"
                placeholder="Senha"
                password
                onSubmitEditing={() => formik.handleSubmit()}
                inputType={1}
            />
            <PecButton buttonType={1} onPress={() => {}} text="Continuar" />
            <PecButton buttonType={2} onPress={() => {}} text="Cadastre-se" />
        </View>
    )
}
