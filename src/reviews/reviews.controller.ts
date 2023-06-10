import { Controller, Get, Param } from '@nestjs/common'
import { ReviewsService } from './reviews.service'

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) { }
  
  @Get("/reviews/:id")
  findReviewsById(@Param("id") id: string) {
    this.reviewsService.findReviewsById(+id)
  }

}
