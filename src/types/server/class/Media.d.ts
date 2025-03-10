import { Prisma } from "@prisma/client";
type MediaPrisma = Prisma.MediaGetPayload<{}>;
export type MediaType = "image" | "document";
export declare class Media {
    id: string;
    url: string;
    name: string;
    type: MediaType;
    constructor(data: MediaPrisma);
    static updateUrl(id: string, url: string): Promise<void>;
    static list(): Promise<Media[]>;
}
export {};
