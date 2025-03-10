import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export type PendencyPrisma = Prisma.PendencyGetPayload<{}>;
export type PendencyForm = Omit<WithoutFunctions<Pendency>, "id" | "created_at" | "updated_at">;
export type PendencyText = "certificate_file" | "certificate_password" | "certificate_validity" | "certificate_ownership";
export declare class Pendency {
    id: string;
    description: PendencyText;
    created_at: string;
    updated_at: string;
    resolved?: boolean | null;
    static find(customer_id: string, key: PendencyText, resolved?: boolean): Promise<{
        id: string;
        description: import(".prisma/client").$Enums.PendencyText;
        created_at: string;
        updated_at: string;
        resolved: boolean;
        customerId: string | null;
    } | null>;
    constructor(data: PendencyPrisma);
}
