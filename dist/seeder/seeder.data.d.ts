import { Product } from '@prisma/client';
export interface IProductPart extends Pick<Product, 'name' | 'images'> {
}
export declare const products: IProductPart[];
