import { Prisma } from "@prisma/client";
import { Customer } from "./Customer";
import { CustomerPermissions, CustomerPermissionsForm } from "./Permissions";
import { WithoutFunctions } from "./helpers";
import { UserForm } from ".";
export declare const customer_user_include: {
    customer: {
        include: {
            address: true;
            accesses: true;
            permissions: {
                include: {
                    nfePermissions: true;
                };
            };
            profilePic: true;
        };
    };
    permissions: {
        include: {
            nfePermissions: true;
        };
    };
};
type CustomerUserPrisma = Prisma.CustomerUserGetPayload<{
    include: typeof customer_user_include;
}>;
export type CustomerUserForm = Omit<WithoutFunctions<CustomerUser>, "id" | "user_id" | "permissions" | "customer" | "accepted" | "active"> & {
    user: UserForm;
    permissions: CustomerPermissionsForm;
};
export declare class CustomerUser {
    id: string;
    user_id: string;
    customer_id: string;
    active: boolean;
    accepted: boolean;
    permissions: CustomerPermissions;
    customer: Customer;
    constructor(id: string, data?: CustomerUserPrisma);
    static new(form: CustomerUserForm): Promise<CustomerUser>;
    init(): Promise<void>;
    load(data: CustomerUserPrisma): void;
}
export {};
