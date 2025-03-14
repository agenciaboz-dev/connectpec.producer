import { Prisma } from "@prisma/client";
import { LoginForm } from "../types/shared/login";
import { FileUpload, WithoutFunctions } from "./helpers";
import { Notification } from "./Notification";
import { Media } from "./Media";
import { ResaleUser } from "./ResaleUser";
import { Resale } from "./Resale";
import { CustomerUser } from "./CustomerUser";
import { Customer, CustomerSearchResult } from "./Customer";
import { SearchCache, SearchCacheForm } from "./SearchCache";
export declare const user_include: {
    notifications: true;
    profilePic: true;
    resales: {
        include: {
            permissions: true;
            resale: {
                include: {
                    permissions: true;
                    profilePic: true;
                    _count: {
                        select: {
                            customers: true;
                        };
                    };
                };
            };
        };
    };
    resalesManager: {
        include: {
            permissions: true;
            profilePic: true;
            _count: {
                select: {
                    customers: true;
                };
            };
        };
    };
    customers: {
        include: {
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
    };
    customersManager: {
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
};
export type UserPrisma = Prisma.UserGetPayload<{
    include: typeof user_include;
}>;
export type UserForm = Omit<WithoutFunctions<User>, "id" | "profilePic" | "created_at" | "notifications" | "expoPushToken" | "admin" | "active" | "resalesManager" | "resales" | "customersManager" | "customers"> & {
    profilePic?: FileUpload | null;
    admin?: boolean;
    active?: boolean;
};
export interface BudgetForm {
    name: string;
    email: string;
    phone: string;
    message: string;
    app_version: string;
}
export type PartialUser = Partial<User> & {
    id: string;
};
export declare class User {
    id: string;
    email: string;
    created_at: string;
    password: string;
    name: string;
    phone: string;
    expoPushToken: string[];
    admin: boolean;
    active: boolean;
    notifications: Notification[];
    profilePic: Media | null;
    resalesManager: Resale[];
    resales: ResaleUser[];
    customersManager: Customer[];
    customers: CustomerUser[];
    constructor(id: string, user_prisma?: UserPrisma);
    init(): Promise<void>;
    static list(): Promise<User[]>;
    static newManager(form: UserForm, target_name: string, type: "resale" | "customer"): Promise<User>;
    static signup(form: UserForm): Promise<User>;
    static login(data: LoginForm): Promise<User | null>;
    static findById(id: string): Promise<User | null>;
    static findByEmail(email: string): Promise<User | null>;
    static requestBudget(data: BudgetForm): Promise<User>;
    load(data: UserPrisma): void;
    update(data: Partial<User>): Promise<void>;
    updateImage(data: FileUpload): Promise<void>;
    sendBudgetRequestMails(data: BudgetForm): Promise<void>;
    newSearchCache(data: SearchCacheForm): Promise<SearchCache>;
    getCachedSearch(): Promise<{
        resales: Resale[];
        customer_resales: CustomerSearchResult[];
    }>;
    getManagedCustomers(resale_id: string): Promise<Customer[]>;
    acceptInvitation(user_system_id: string, system_type: "resale" | "customer"): Promise<void>;
    changeSystemAccess(user_system_id: string, system_type: "resale" | "customer", can_access: boolean): Promise<void>;
    deleteSystemAccess(user_system_id: string, system_type: "resale" | "customer"): Promise<void>;
}
