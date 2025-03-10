import { Prisma } from "@prisma/client";
export type AccessPrisma = Prisma.AccessGetPayload<{}>;
export declare class Access {
    id: number;
    datetime: string;
    customer_id: string;
    user_id: string;
    constructor(data: AccessPrisma);
}
