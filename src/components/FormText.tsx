import React from "react"
import { Text, TextInput, TextInputProps, useTheme } from "react-native-paper"
import { DimensionValue, TextInput as OriginalInput, View } from "react-native"
import { FormikErrors, FormikTouched } from "formik"
import { mask as masked } from "react-native-mask-text"
import { LabeledComponent } from "./LabeledComponent"
import lodash from "lodash"
import { scale } from "../tools/scale"

export interface FormTextProps extends TextInputProps {
    name: string
    width?: DimensionValue
    flex?: number
    mask?: string | string[]
    formik: {
        values: any
        errors: FormikErrors<any>
        touched: FormikTouched<any>
        handleChange: (e: React.ChangeEvent<any>) => void
        handleBlur: {
            (e: React.FocusEvent<any, Element>): void
            <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
        }
        setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<any>>
    }
    transparent?: boolean
    required?: boolean
    forced_error?: string
    innerLabel?: boolean
}

export const FormText = React.forwardRef<React.ElementRef<typeof OriginalInput>, FormTextProps>((props, ref) => {
    const theme = useTheme()
    const error = !!props.forced_error || !!(lodash.get(props.formik.touched, props.name) && lodash.get(props.formik.errors, props.name))
    const error_text = props.forced_error || (lodash.get(props.formik.errors, props.name) as string)

    return (
        <View style={{ width: props.width, flex: props.flex }}>
            <LabeledComponent
                label={props.innerLabel ? "" : props.required ? `${props.label} *` : props.label || ""}
                marginBottom={scale(5)}
                Component={
                    <TextInput
                        ref={ref}
                        {...props}
                        // right={props.right ? error ? <TextInput.Icon icon={"alert-circle"} color={theme.colors.error} /> : props.right : undefined}
                        right={
                            props.right ? (
                                props.right
                            ) : error ? (
                                <TextInput.Icon icon={"alert-circle"} color={theme.colors.error} size={scale(24)} />
                            ) : undefined
                        }
                        label={props.innerLabel ? (props.required ? `${props.label} *` : props.label || "") : undefined}
                        mode="outlined"
                        style={[
                            { backgroundColor: "transparent", flexShrink: 0, fontSize: scale(14) },
                            props.multiline && !props.innerLabel && { paddingVertical: scale(10) },
                            props.style,
                        ]}
                        outlineStyle={{
                            borderRadius: 5,
                            borderColor: error ? theme.colors.error : undefined,
                        }}
                        dense
                        returnKeyType={props.returnKeyType || "next"}
                        error={error}
                        value={
                            props.value ||
                            (props.mask
                                ? masked(lodash.get(props.formik.values, props.name), props.mask)
                                : lodash.get(props.formik.values, props.name) || "")
                        }
                        // @ts-ignore
                        onChangeText={
                            props.onChangeText ||
                            (props.mask
                                ? (value) => props.formik.setFieldValue(props.name, masked(value, props.mask))
                                : // @ts-ignore
                                  props.formik.handleChange(props.name))
                        }
                        onBlur={props.onBlur || props.formik.handleBlur(props.name)}
                    />
                }
            />

            {error && error_text != " " && <Text style={{ color: theme.colors.error, minHeight: scale(20), fontSize: scale(14) }}>{error_text}</Text>}
        </View>
    )
})
