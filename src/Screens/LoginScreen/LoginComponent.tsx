import React, { useRef, useState } from "react";
import { TextInput as TextInputNative, View } from "react-native";
import { Text, TextInput, TextInputProps, useTheme } from "react-native-paper";
import { FormText } from "../../components/startjaComponents/FormText";
import { useFormik } from "formik";
import { PecButton } from "../../components/PecButton";

interface LoginComponentProps {}

export const LoginComponent: React.FC<LoginComponentProps> = () => {
  const [loading, setLoading] = useState(false);
  // const password_ref = useRef<TextInputNative>(null)

  const formik = useFormik<any>({
    initialValues: { login: "", password: "" },
    async onSubmit(values, formikHelpers) {
      if (loading) return;
      setLoading(true);
      try {
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    validateOnChange: false,
    enableReinitialize: true,
  });
  return (
      <View style={{ gap: 40 }}>
          <FormText
              formik={formik}
              label={"cpf"}
              // innerLabel
              //
              name="login"
              placeholder="CPF"
              // onSubmitEditing={() => password_ref.current?.focus()}
              style={{
                  backgroundColor: "#ECE4E0D9",
              }}
          />
          <FormText
              // ref={password_ref}
              formik={formik}
              //
              name="password"
              placeholder="Senha"
              password
              onSubmitEditing={() => formik.handleSubmit()}
              style={{
                  backgroundColor: "#ECE4E0D9",
                  borderRadius: 12,
              }}
          />
          {/* <TextInput
        label={"blabla"}
        mode="outlined"
        style={{
          paddingHorizontal: 16,
          borderColor: "#ff0000",
          borderWidth: 1,
        }}
        contentStyle={{
          paddingHorizontal: 16,
          borderColor: "#ff0000",
          borderWidth: 1,
        }}
      /> */}
          <PecButton onPress={() => {}} text="Continuar" />
          <PecButton onPress={() => {}} text="Cadastre-se" />
      </View>
  )
};
