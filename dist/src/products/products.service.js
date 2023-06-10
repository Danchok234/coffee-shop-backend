"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(sortType, searchTerm) {
        const sortCategory = sortType === 'newest' || sortType === 'oldest' ? 'createdAt' : 'price';
        const sortVariation = sortType === 'newest' || sortType === 'low-to-high' ? 'desc' : 'asc';
        return this.prisma.product.findMany(searchTerm
            ? {
                where: {
                    OR: [
                        {
                            slug: {
                                contains: searchTerm.toLowerCase() ||
                                    searchTerm ||
                                    searchTerm.toUpperCase(),
                            },
                        },
                        {
                            description: {
                                contains: searchTerm.toLowerCase() ||
                                    searchTerm ||
                                    searchTerm.toUpperCase(),
                            },
                        },
                    ],
                },
                orderBy: {
                    [sortCategory]: sortVariation,
                },
            }
            : {
                orderBy: {
                    [sortCategory]: sortVariation,
                },
            });
    }
    async findBySlug(slug) {
        const product = await this.prisma.product.findUnique({
            where: {
                slug: slug,
            },
            include: {
                reviews: true,
            },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        else
            return product;
    }
    async findById(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: id,
            },
            include: {
                reviews: true,
            },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        else
            return product;
    }
    async findRelatives(id) {
        return this.prisma.product.findMany({
            where: {
                id: {
                    not: id,
                },
            },
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map