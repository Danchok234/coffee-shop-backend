import { PrismaService } from 'src/prisma.service';
export declare class ReviewsService {
    private PrismaService;
    constructor(PrismaService: PrismaService);
    findReviewsById(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        reviews: {
            rating: number;
            reviewText: string;
            user: {
                id: number;
                username: string;
                email: string;
            };
            productId: number;
        }[];
    }, never>;
    createReview(userId: number, productId: number, rating: number, reviewText?: string): Promise<import(".prisma/client").Review>;
}
