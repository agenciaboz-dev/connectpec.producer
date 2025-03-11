import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { TextInput as NTextInput, ScrollView, View } from "react-native"
import { CepResult } from "../types/CepResult"
import { estados } from "../tools/estadosBrasil"
import { FormText } from "./FormText"
import { mobile } from "../tools/platforms"
import { AddressForm } from "../types/server/class/Address"
import { FormikBundle } from "../types/FormikBundle"
import { SelectComponent } from "./SelectComponent"
import { scale } from "../tools/scale"

interface ErrorHandler {
    name: keyof AddressForm
    error: string
}

interface TabForm {
    currentIndex: number
    error?: ErrorHandler
    formik: FormikBundle<any & { address: AddressForm }>
    addressTab: number
}

export const AddressFormComponent: React.FC<TabForm> = ({ formik, currentIndex, addressTab }) => {
    const firstRender = useRef(true)
    const number_ref = useRef<NTextInput>(null)

    const [loading, setLoading] = useState(false)

    const searchCep = async (cep: string) => {
        if (loading) return

        try {
            setLoading(true)
            const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            console.log({ response })
            const result = response.data as CepResult

            formik.setFieldValue("address.street", result.street)
            formik.setFieldValue("address.district", result.neighborhood)
            formik.setFieldValue("address.city", result.city)
            const uf = estados.find((item) => item.value.toLowerCase() === result.state.toLowerCase())?.value
            if (uf) {
                formik.setFieldValue("address.uf", uf)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 200)
        }
    }

    useEffect(() => {
        if (formik.values.address.cep.length === 10 && currentIndex === 1 && !firstRender.current) {
            searchCep(formik.values.address.cep)
        }
    }, [formik.values.address.cep, currentIndex])

    useEffect(() => {
        if (currentIndex === addressTab) {
            if (firstRender.current) firstRender.current = false
            return () => {
                firstRender.current = true
            }
        }
    }, [currentIndex])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ gap: scale(10) }}>
                <View style={[{ flexDirection: mobile ? "column" : "row", gap: scale(10) }]}>
                    <FormText
                        formik={formik}
                        name="address.cep"
                        label={"CEP"}
                        flex={mobile ? undefined : 0.25}
                        maxLength={10}
                        keyboardType="number-pad"
                        mask={"99.999-999"}
                    />
                    <View style={[{ flexDirection: "row", gap: scale(10), flex: mobile ? undefined : 0.8 }]}>
                        <FormText formik={formik} name="address.city" label={"Cidade"} flex={0.8} />
                        <SelectComponent
                            formik={formik}
                            data={estados}
                            name="address.uf"
                            placeholder="Selecione o Estado"
                            label="Estado"
                            flex={0.6}
                            // previousValue={customer?.address.uf}
                        />
                    </View>
                </View>

                <View style={[{ flexDirection: mobile ? "column" : "row", gap: scale(10) }]}>
                    <FormText formik={formik} name="address.street" label={"Rua"} flex={mobile ? undefined : 0.65} />
                    <FormText formik={formik} name="address.number" ref={number_ref} label={"Número"} flex={mobile ? undefined : 0.35} />
                </View>

                <View style={[{ flexDirection: mobile ? "column" : "row", gap: scale(10) }]}>
                    <FormText formik={formik} name="address.district" label={"Bairro"} flex={mobile ? undefined : 1} />
                    <FormText formik={formik} name="address.complement" label={"Complemento"} flex={mobile ? undefined : 1} />
                </View>
            </View>
        </ScrollView>
    )
}
