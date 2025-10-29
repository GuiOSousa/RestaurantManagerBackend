import { PrismaClient } from '@prisma/client';
import type IProductRepository from '../IProductRepository';

const prisma = new PrismaClient();

export default class PrismaProductRepository implements IProductRepository {
  async getAll() {
    return prisma.products.findMany()
  }

  async getTopProducts(limit: number) {
  return await prisma.products.findMany({
    include: {
      _count: {
        select: { product_sales: true }
      }
    },
    orderBy: {
      product_sales: {
        _count: 'desc'
      }
    },
    take: limit
  });
  }

  async getProductsByName(name: string) {
		return await prisma.products.findMany({
			where: {
				name: {
					contains: name,
					mode: 'insensitive'
				},
			}
		});
	}

  async getById(id: string) {
    return prisma.products.findUnique({
      where: { id: Number(id) },
    });
  }
}
