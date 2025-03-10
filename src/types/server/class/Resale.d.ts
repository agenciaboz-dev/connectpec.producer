import { Prisma } from "@prisma/client";
import { Media } from "./Media";
import { ResalePermissions, ResalePermissionsForm } from "./Permissions";
import { FileUpload, WithoutFunctions } from "./helpers";
import { User, UserForm } from "./User";
import { Customer } from "./Customer";
export declare const resale_include: {
    permissions: true;
    profilePic: true;
    _count: {
        select: {
            customers: true;
        };
    };
};
type ResalePrima = Prisma.ResaleGetPayload<{
    include: typeof resale_include;
}>;
export type ResaleForm = Omit<WithoutFunctions<Resale>, "id" | "manager_id" | "permissions" | "profilePic" | "created_at" | "active" | "customers"> & {
    profilePic?: FileUpload;
    manager: UserForm;
    permissions: ResalePermissionsForm;
};
export declare class Resale {
    id: string;
    name: string;
    active: boolean;
    manager_id: string;
    permissions: ResalePermissions;
    profilePic: Media | null;
    created_at: string;
    customers: number;
    constructor(id: string, data?: ResalePrima);
    static findById(id: string): Promise<Resale | null>;
    static list(): Promise<Resale[]>;
    static new(form: ResaleForm): Promise<Resale>;
    static search(text: string): Promise<Resale[]>;
    load(data: ResalePrima): void;
    init(): Promise<void>;
    updateProfilePic(image: FileUpload): Promise<void>;
    getManagers(): Promise<User[]>;
    getCustomers(): Promise<Customer[]>;
    update(data: Partial<Resale>): Promise<void>;
}
export {};
