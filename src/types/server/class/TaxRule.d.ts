import { Prisma } from "@prisma/client";
import { Product } from "./Product";
export declare const tax_rule_include: {
    cofins_extra: true;
    from_states: true;
    icms_extra: true;
    pis_extra: true;
    to_states: true;
    products: true;
};
export type TaxRulePrisma = Prisma.TaxRuleGetPayload<{
    include: typeof tax_rule_include;
}>;
export type ExtraTaxDataPrisma = Prisma.ExtraTaxDataGetPayload<{}>;
export type TaxStatePrisma = Prisma.TaxStateGetPayload<{}>;
export interface TaxStateForm {
    value: string;
}
export declare class TaxState {
    id: string;
    value: string;
    constructor(data: TaxStatePrisma);
}
export interface ExtraTaxDataForm {
    key: string;
    value: string;
}
export declare class ExtraTaxData {
    id: string;
    key: string;
    value: string;
    constructor(data: ExtraTaxDataPrisma);
}
export type TaxRulePatchForm = Partial<Omit<TaxRule, "icms_extra" | "pis_extra" | "cofins_extra">> & {
    id: string;
    icms_extra: ExtraTaxDataForm[];
    pis_extra: ExtraTaxDataForm[];
    cofins_extra: ExtraTaxDataForm[];
};
export interface TaxRuleForm {
    operation_nature_id: string;
    cfop: string;
    icms: string;
    complement: string;
    pis: string;
    cofins: string;
    icms_extra: ExtraTaxDataForm[];
    pis_extra: ExtraTaxDataForm[];
    cofins_extra: ExtraTaxDataForm[];
    products: {
        id: string;
    }[];
    from_states: TaxStateForm[];
    to_states: TaxStateForm[];
}
export declare class TaxRule {
    id: string;
    active: boolean;
    created_at: string;
    operation_nature_id: string;
    cfop: string;
    icms: string;
    complement: string;
    pis: string;
    cofins: string;
    icms_extra: ExtraTaxData[];
    pis_extra: ExtraTaxData[];
    cofins_extra: ExtraTaxData[];
    products: Product[];
    from_states: TaxState[];
    to_states: TaxState[];
    static get(id: string): Promise<TaxRule>;
    static new(data: TaxRuleForm): Promise<TaxRule>;
    constructor(data: TaxRulePrisma);
    load(data: TaxRulePrisma): void;
    update(data: TaxRulePatchForm): Promise<void>;
    delete(): Promise<boolean>;
}
