import { Prisma } from "@prisma/client";
import { TaxRule, TaxRuleForm } from "./TaxRule";
import { SettingListResult } from "../types/shared/SettingListResult";
export declare const operation_nature_include: {
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
export type OperationNaturePrisma = Prisma.OperationNatureGetPayload<{
    include: typeof operation_nature_include;
}>;
export interface OperationNatureForm {
    operation: string;
    type: string;
    purpose: string;
    motive: string;
    tax_rules: TaxRuleForm[];
    customer_id?: string;
    resale_id?: string;
}
export declare class OperationNature {
    id: string;
    active: boolean;
    created_at: string;
    operation: string;
    type: string;
    purpose: string;
    motive: string;
    tax_rules: TaxRule[];
    customer_id: string | null;
    resale_id: string | null;
    static get(operation_nature_id: string): Promise<OperationNature>;
    static getList(resale_id?: string, customer_id?: string): Promise<SettingListResult<OperationNature>>;
    static new(data: OperationNatureForm): Promise<OperationNature>;
    constructor(data: OperationNaturePrisma);
    load(data: OperationNaturePrisma): void;
    createTaxRule(data: TaxRuleForm): Promise<TaxRule>;
    update(data: Partial<OperationNature>): Promise<this>;
    delete(): Promise<boolean>;
}
