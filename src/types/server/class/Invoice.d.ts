import { Prisma } from "@prisma/client";
import { OperationNature } from "./OperationNature";
import { Person } from "./Person";
import { Property } from "./Property";
import { Product } from "./Product";
import { TaxRule } from "./TaxRule";
import { WithoutFunctions } from "./helpers";
export declare const invoice_include: {
    extra_shipping_data: true;
    nature: {
        include: {
            tax_rules: {
                include: {
                    cofins_extra: true;
                    from_states: true;
                    icms_extra: true;
                    pis_extra: true;
                    to_states: true;
                    products: true;
                };
            };
        };
    };
    recipient: {
        include: {
            address: true;
        };
    };
    shipper: {
        include: {
            address: true;
        };
    };
    issuer: {
        include: {
            address: true;
        };
    };
};
export type InvoicePrisma = Prisma.InvoiceGetPayload<{
    include: typeof invoice_include;
}>;
export type ExtraShippingDataPrisma = Prisma.ExtraShippingDataGetPayload<{}>;
export interface Installment {
    number: number;
    value: number;
    date: string;
}
export interface InvoiceProduct extends WithoutFunctions<Product> {
    quantity: number;
    unit_value: number;
    total_value: number;
    tax_rule: TaxRule;
    unit_type: string;
}
export declare class ExtraShippingData {
    id: string;
    key: string;
    value: string;
    constructor(data: ExtraShippingDataPrisma);
}
export type ExtraShippingDataForm = Omit<WithoutFunctions<ExtraShippingData>, "id">;
export interface InvoiceMailForm {
    to: string[];
}
export type InvoiceForm = Omit<WithoutFunctions<Invoice>, "id" | "created_at" | "issued_at" | "extra_shipping_data" | "recipient" | "shipper" | "issuer" | "nature" | "in_out_date" | "url_danfe" | "url_xml" | "protocol" | "sefaz_message" | "key" | "referenced_key"> & {
    extra_shipping_data: ExtraShippingDataForm[];
    in_out_date?: string;
    referenced_key?: string | null;
};
export declare class Invoice {
    id: string;
    created_at: string;
    issued_at: string | null;
    series: string | null;
    number: string | null;
    value: string;
    status: string;
    shipping_mode: string;
    extra_shipping_data: ExtraShippingData[];
    payment_mode: string;
    payment_conditions: string;
    discount: string;
    installments: Installment[] | null;
    type: string;
    is_end_consumer: boolean;
    in_out_date: string;
    complementary_information: string | null;
    customer_id: string;
    recipient_id: string;
    recipient: Person;
    shipper_id?: string | null;
    shipper?: Person | null;
    issuer_id: string;
    issuer: Property;
    user_id: string;
    nature_id: string;
    nature: OperationNature;
    products: InvoiceProduct[];
    url_danfe: string | null;
    url_xml: string | null;
    protocol: string | null;
    sefaz_message: string | null;
    key: string | null;
    referenced_key: string | null;
    static new(data: InvoiceForm): Promise<Invoice>;
    constructor(data: string | InvoicePrisma);
    load(data: InvoicePrisma): void;
    init(): Promise<void>;
    update(data: Partial<InvoiceForm> & {
        issued_at?: string;
        url_danfe?: string;
        url_xml?: string;
        protocol?: string;
        sefaz_message?: string;
        key?: string;
    }): Promise<void>;
    emit(): void;
    sendMail(data: InvoiceMailForm): void;
    delete(): Promise<{
        id: string;
        created_at: string;
        issued_at: string | null;
        series: string | null;
        number: string | null;
        value: string;
        status: string;
        is_end_consumer: boolean;
        in_out_date: string;
        complementary_information: string | null;
        type: string;
        shipping_mode: string;
        payment_mode: string;
        payment_conditions: string;
        discount: string;
        installments: Prisma.JsonValue;
        url_danfe: string | null;
        url_xml: string | null;
        protocol: string | null;
        sefaz_message: string | null;
        key: string | null;
        referenced_key: string | null;
        customer_id: string;
        recipient_id: string;
        shipper_id: string | null;
        issuer_id: string;
        user_id: string;
        nature_id: string;
        products: Prisma.JsonValue;
    }>;
}
