import { AddressForm } from "../types/server/class/Address"

export const initAddressForm = (initialItem?: any & { address: AddressForm }) => {
    return {
        cep: initialItem?.address.cep || "",
        city: initialItem?.address.city || "",
        complement: initialItem?.address.complement || "",
        district: initialItem?.address.district || "",
        number: initialItem?.address.number || "",
        street: initialItem?.address.street || "",
        uf: initialItem?.address.uf || "",
    }
}
