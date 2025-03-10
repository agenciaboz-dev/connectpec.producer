import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import lodash from "lodash"
import { TextInputProps } from "react-native-paper"
import { scale } from "../tools/scale"
import { FormikBundle } from "../types/FormikBundle"
import { colors } from "../style/colors"
import { mobile, web } from "../tools/platforms"

export const dropdown_styles = StyleSheet.create({
    dropdown: {
        flex: mobile ? undefined : 1,
        minHeight: 48,
        maxHeight: 48,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 15,
        borderColor: "#79747e",
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: scale(14),
    },
    placeholderStyle: {
        fontSize: scale(14),
        color: "#49454F",
    },
    selectedTextStyle: {
        fontSize: scale(14),
        color: "#1C1B1F",
    },
})
interface SelectComponentProps<T> extends TextInputProps {
    formik: FormikBundle<T>
    data: {
        id?: number
        value: string | number
        label: string
    }[]
    name: string
    previousValue?: string
    flex?: number
    search?: boolean
    searchPlaceholder?: string
    beforeChange?: () => void
}
export const SelectComponent = <T,>({
    formik,
    data,
    placeholder,
    name,
    label,
    previousValue,
    flex,
    search = false,
    searchPlaceholder,
    beforeChange,
}: SelectComponentProps<T>) => {
    const [value, setValue] = useState<null | { id?: number; value: string | number; label: string }>(null)
    const [isFocus, setIsFocus] = useState(false)
    const errorColor = "#B3261E"
    const error = !!(lodash.get(formik.touched, name) && lodash.get(formik.errors, name))

    const error_text = lodash.get(formik.errors, name) as string

    const findSelectedOption = (val: string | number | null | undefined) => {
        if (val === null || val === undefined) return null
        return data.find((option) => option.value === val) || null
    }

    const selectOption = async (selectedValue: string | number) => {
        const selectedOption = findSelectedOption(selectedValue)
        formik.setFieldValue(name, selectedOption ? selectedOption.value : null)
        setValue(selectedOption)
        setIsFocus(false)
    }

    useEffect(() => {
        const selectedOption = findSelectedOption(lodash.get(formik.values, name))
        setValue(selectedOption)
    }, [formik.values, name])

    return (
        <View
            style={{
                flex: mobile ? flex || undefined : flex || 1,
            }}
        >
            <Text
                style={{
                    fontSize: scale(14),
                    fontFamily: "Lato_400Regular",
                    color: "#1c1b1f",
                    marginBottom: 4,
                }}
                ellipsizeMode={mobile ? "tail" : undefined}
                numberOfLines={mobile ? 1 : undefined}
            >
                {label}
            </Text>
            <Dropdown
                style={[
                    dropdown_styles.dropdown,
                    isFocus && { borderWidth: 2, borderColor: colors.primary },
                    error && { borderColor: errorColor, borderWidth: 2 },
                    !!flex && { flex: flex },
                ]}
                placeholderStyle={dropdown_styles.placeholderStyle}
                selectedTextStyle={dropdown_styles.selectedTextStyle}
                containerStyle={{ backgroundColor: "#F8F8F8" }}
                activeColor="#e1dee3"
                data={data}
                fontFamily="Lato_400Regular"
                placeholder={placeholder}
                labelField="label"
                valueField="value"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    setIsFocus(false)
                }}
                onChange={(item) => {
                    if (beforeChange) beforeChange()
                    selectOption(item.value)
                }}
                search={search}
                searchField="label"
                searchPlaceholder={searchPlaceholder}
            />
            {error && (
                <Text
                    style={{
                        fontFamily: "Lato_400Regular",
                        color: errorColor,
                        marginTop: scale(-6),
                    }}
                >
                    {error_text}
                </Text>
            )}
        </View>
    )
}
