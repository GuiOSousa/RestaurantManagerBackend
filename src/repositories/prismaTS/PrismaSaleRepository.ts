import { PrismaClient } from '@prisma/client';
import ISaleRepository from "../ISaleRepository";

const prisma = new PrismaClient();

export default class PrismaSaleRepository implements ISaleRepository{
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getSalesByMonth(): Promise<{ month: string; totalSales: number }[]> {
        const results: { month: string; totalSales: number }[] = await prisma.$queryRaw`
            SELECT 
            TO_CHAR(DATE_TRUNC('month', "created_at"), 'YYYY-MM') AS month,
            SUM("total_amount")::numeric AS "totalSales"
            FROM "sales"
            GROUP BY DATE_TRUNC('month', "created_at")
            ORDER BY DATE_TRUNC('month', "created_at");
        `;
    
        const formatedResults = results.map(r => ({
            month: new Date(r.month + '-01').toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }),
            totalSales: Number(r.totalSales),
        }));

        return formatedResults
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