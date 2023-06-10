import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    ProductsModule,
    ReviewsModule,
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: "/uploads"
    }),
  ],
})
export class AppModule {}
