import { Prisma } from "@prisma/client";
import { WithoutFunctions } from "./helpers";
export type SearchCachePrisma = Prisma.SearchCacheGetPayload<{}>;
export type SearchCacheForm = Omit<WithoutFunctions<SearchCache>, "id" | "datetime">;
export declare class SearchCache {
    id: number;
    user_id: string;
    datetime: string;
    resale_id?: string | null;
    customer_id?: string | null;
    constructor(data: SearchCachePrisma);
}
