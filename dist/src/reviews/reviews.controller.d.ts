import { Request } from 'express';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    findReviewsById(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
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
    createReview(req: Request, createReviewDto: CreateReviewDto): Promise<import(".prisma/client").Review>;
}
