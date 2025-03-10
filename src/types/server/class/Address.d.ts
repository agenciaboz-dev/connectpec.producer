import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
type AddressPrisma = Prisma.AddressGetPayload<{}>;
export type AddressForm = Omit<WithoutFunctions<Address>, "id">;
export declare class Address {
    id: number;
    cep: string;
    uf: string;
    city: string;
    number: string;
    district: string;
    street: string;
    complement: string | null;
    constructor(data: AddressPrisma);
    static new(data: AddressForm): Promise<{
        id: number;
        cep: string;
        uf: string;
        city: string;
        number: string;
        district: string;
        street: string;
        complement: string | null;
        person_id: string | null;
    }>;
    format(options?: {
        short?: boolean;
    }): string;
}
export {};
