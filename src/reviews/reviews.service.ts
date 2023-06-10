import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class ReviewsService {
	constructor(private PrismaService: PrismaService) { }

	findReviewsById(id:number) {
		return this.PrismaService.product.findUnique({
			where: {
				id:id
			}
		})
	}
}
