import { faker } from '@faker-js/faker';
import { Prisma, PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { IProductPart, products } from './seeder.data';
const prisma = new PrismaClient();

const toSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};


const fakerProduct = (product: IProductPart): Prisma.ProductCreateInput => {
  return {
    name: product.name,
    images: product.images,
    description: faker.commerce.productDescription(),
    slug: toSlug(product.name),
    price: faker.number.int({ min: 4, max: 10 }),
    reviews: {
      createMany: {
        data: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(
          () => ({
            rating: faker.number.int({ min: 1, max: 5 }),
            reviewText: faker.lorem.paragraph(),
          }),
        ),
      },
    },
  };
};

async function main() {
  dotenv.config();
  console.log('Seeding...');
  await Promise.all(
    products.map(async (product) => {
      await prisma.product.create({ data: fakerProduct(product) });
    }),
  );
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
