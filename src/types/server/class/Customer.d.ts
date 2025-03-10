import { Prisma } from "@prisma/client";
import { CustomerPermissions, CustomerPermissionsForm } from "./Permissions";
import { Media } from "./Media";
import { Address, AddressForm } from "./Address";
import { FileUpload, WithoutFunctions } from "./helpers";
import { Resale } from "./Resale";
import { User, UserForm } from ".";
import { Access } from "./Access";
import { Pendency, PendencyForm, PendencyText } from "./Pendency";
import forge from "node-forge";
import { Property, PropertyForm } from "./Property";
import { Person, PersonForm } from "./Person";
import { Invoice, InvoiceForm } from "./Invoice";
export declare const customer_include: {
    address: true;
    accesses: true;
    permissions: {
        include: {
            nfePermissions: true;
        };
    };
    profilePic: true;
};
export type CustomerPrisma = Prisma.CustomerGetPayload<{
    include: typeof customer_include;
}>;
export type FunruralType = "paycheck" | "production_value" | null;
export interface CustomerSearchResult {
    resale: Resale & {
        customers: Customer[];
    };
}
export type CustomerForm = Omit<WithoutFunctions<Customer>, "id" | "certificate_file" | "address_id" | "permissionsId" | "managerId" | "profilePicId" | "profilePic" | "address" | "permissions" | "accesses" | "created_at" | "active" | "properties" | "persons" | "invoices"> & {
    certificate_file?: string;
    address: AddressForm;
    permissions: CustomerPermissionsForm;
    manager: UserForm;
    active?: boolean;
};
export declare class Customer {
    id: string;
    active: boolean;
    is_physical_person: boolean;
    contact_name: string;
    contact_cpf: string;
    resale_id: string;
    document: string;
    regime: string;
    name: string;
    business_name: string;
    email: string;
    phone: string;
    created_at: string;
    exempted: boolean;
    discriminate_taxes: boolean;
    send_destinatary_mail: boolean;
    enable_nfe: boolean;
    enable_nfce: boolean;
    funrural: FunruralType;
    certificate_file: string;
    certificate_password: string;
    address_id: number;
    permissionsId: number;
    managerId: string;
    profilePicId: string | null;
    profilePic: Media | null;
    address: Address;
    permissions: CustomerPermissions;
    accesses: Access[];
    ie: string;
    constructor(id: string, data?: CustomerPrisma);
    init(): Promise<void>;
    static new(form: CustomerForm, user_id: string, certificate_file?: FileUpload, profilePic?: FileUpload): Promise<Customer>;
    static list(): Promise<Customer[]>;
    static search(text: string): Promise<CustomerSearchResult[]>;
    static validateAllCerts(): Promise<void>;
    load(data: CustomerPrisma): void;
    update(data: Partial<CustomerForm>, certificate_file?: FileUpload, profilePic?: FileUpload): Promise<string | {
        message: string;
        key: string;
    } | undefined>;
    updateCertificateFile(data: FileUpload): Promise<void>;
    newAccess(user_id: string): Promise<void>;
    getResale(): Promise<Resale>;
    updateProfilePic(image: FileUpload): Promise<void>;
    getManagers(): Promise<User[]>;
    validateCertificate(): Promise<void>;
    checkCertificateExpiration(certificate: forge.pki.Certificate): Promise<void>;
    checkCertificateOwnership(certificate: forge.pki.Certificate): Promise<void>;
    newPendency(data: PendencyForm): Promise<Pendency | null>;
    solvePendencies(data: PendencyText[]): Promise<void>;
    getCertificate(): "certificate_file" | "certificate_password" | forge.pki.Certificate | undefined;
    getUnresolvedPendencies(): Promise<Pendency[]>;
    stillPending(key: PendencyText): Promise<boolean>;
    getCertificateExpiry(): Promise<string | undefined>;
    solvePendency(key: PendencyText): Promise<Pendency | undefined>;
    properties: {
        get: () => Promise<Property[]>;
        find: (property_id: string) => Promise<Property>;
        new: (data: PropertyForm) => Promise<Property>;
        update: (property_id: string, data: Partial<Property>) => Promise<Property>;
    };
    persons: {
        get: () => Promise<Person[]>;
        new: (data: PersonForm) => Promise<Person>;
        update: (person_id: string, data: Partial<Person>) => Promise<Person>;
    };
    invoices: {
        get: () => Promise<Invoice[]>;
        new: (data: InvoiceForm) => Promise<Invoice>;
        delete: () => Promise<Prisma.BatchPayload>;
    };
}
