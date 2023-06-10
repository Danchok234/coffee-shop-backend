import { PrismaService } from 'src/prisma.service';
export declare class ReviewsService {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    findReviewsById(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
