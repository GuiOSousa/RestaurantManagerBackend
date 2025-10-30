import { PrismaClient } from '@prisma/client';
import ISaleRepository from "../ISaleRepository";

const prisma = new PrismaClient();

export default class PrismaSaleRepository implements ISaleRepository{
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getSalesByMonth(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getTotalSales(): Promise<any> {
        const result = await prisma.sales.aggregate({
            _sum: { total_amount: true }
        });
        return result._sum.total_amount || 0;
    }
    
    getSalesCount(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}