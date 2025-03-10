import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
import { SettingListResult } from "../types/shared/SettingListResult";
export type ProductPrisma = Prisma.ProductGetPayload<{}>;
export type ProductForm = Omit<WithoutFunctions<Product>, "id" | "created_at">;
export declare class Product {
    id: string;
    name: string;
    ncm: string;
    sku: string;
    active: boolean;
    icms_origin: number;
    created_at: string;
    customer_id: string | null;
    resale_id: string | null;
    static get(product_id: string): Promise<Product>;
    static getList(resale_id?: string, customer_id?: string): Promise<SettingListResult<Product>>;
    static new(data: ProductForm): Promise<Product>;
    constructor(data: ProductPrisma);
    load(data: ProductPrisma): void;
    update(data: Partial<ProductForm>): Promise<void>;
    delete(): Promise<boolean>;
}
