"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
const seeder_data_1 = require("./seeder.data");
const prisma = new client_1.PrismaClient();
const toSlug = (text) => {
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
const fakerProduct = (product) => {
    return {
        name: product.name,
        images: product.images,
        description: faker_1.faker.commerce.productDescription(),
        slug: toSlug(product.name),
        price: faker_1.faker.number.int({ min: 4, max: 10 }),
        reviews: {
            createMany: {
                data: Array.from({ length: faker_1.faker.number.int({ min: 1, max: 5 }) }).map(() => ({
                    rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                    reviewText: faker_1.faker.lorem.paragraph(),
                })),
            },
        },
    };
};
async function main() {
    dotenv.config();
    console.log('Seeding...');
    await Promise.all(seeder_data_1.products.map(async (product) => {
        await prisma.product.create({ data: fakerProduct(product) });
    }));
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map