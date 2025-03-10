import { Prisma } from "@prisma/client";
import { Address, AddressForm } from "./Address";
import { WithoutFunctions } from "./helpers";
export declare const property_include: {
    address: true;
};
export type PropertyPrisma = Prisma.PropertyGetPayload<{
    include: typeof property_include;
}>;
export type ExplorationType = "Exploração Individual" | "Condomínio" | "Arrendamento" | "Parceria" | "Comodato" | "Outras";
export type PropertyForm = Omit<WithoutFunctions<Property>, "id" | "address" | "active" | "focusnfe_id" | "focusnfe_token" | "focusnfe_devtoken"> & {
    address: AddressForm;
    customer_id: string;
};
export declare class Property {
    id: string;
    name: string;
    ie: string;
    nirf: string;
    exploration: ExplorationType;
    active: boolean;
    address: Address;
    focusnfe_id: string | null;
    focusnfe_token: string | null;
    focusnfe_devtoken: string | null;
    static find(property_id: string): Promise<Property>;
    constructor(data: PropertyPrisma);
    load(data: PropertyPrisma): void;
    update(data: Partial<Property>): Promise<this>;
}
