import { Prisma } from "@prisma/client";
import { Address, AddressForm } from "./Address";
import { WithoutFunctions } from "./helpers";
export declare const person_include: {
    address: true;
};
export type PersonPrisma = Prisma.PersonGetPayload<{
    include: typeof person_include;
}>;
export type PersonForm = Omit<WithoutFunctions<Person>, "id" | "created_at" | "active" | "address"> & {
    address: AddressForm;
    customer_id: string;
};
export declare class Person {
    id: string;
    active: boolean;
    created_at: string;
    document: string;
    name: string;
    ie: string;
    ie_indicator: string;
    email: string;
    phone: string;
    address: Address;
    customer_id: string;
    static new(data: PersonForm): Promise<Person>;
    constructor(data: PersonPrisma);
    load(data: PersonPrisma): void;
}
