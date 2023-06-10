import { PrismaService } from 'src/prisma.service';
export type SortType = 'newest' | 'oldest' | 'high-to-low' | 'low-to-high';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(sortType?: SortType, searchTerm?: string): Promise<import(".prisma/client").Product[]>;
    findBySlug(slug: string): Promise<import(".prisma/client").Product & {
        reviews: import(".prisma/client").Review[];
    }>;
    findById(id: number): Promise<import(".prisma/client").Product & {
        reviews: import(".prisma/client").Review[];
    }>;
    findRelatives(id: number): Promise<import(".prisma/client").Product[]>;
}
