import { ProductsService, SortType } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(sortType?: SortType, searchTerm?: string): Promise<import(".prisma/client").Product[]>;
    findById(id: string): Promise<import(".prisma/client").Product & {
        reviews: import(".prisma/client").Review[];
    }>;
    findBySlug(slug: string): Promise<import(".prisma/client").Product & {
        reviews: import(".prisma/client").Review[];
    }>;
    findRelatives(id: string): Promise<import(".prisma/client").Product[]>;
}
