import { PrismaClient } from "@prisma/client";
import IStoreRepository from "../IStoreRepository";
const prisma = new PrismaClient();

export default class PrismaStoreRepository implements IStoreRepository {
    async getStoresByState() {
        return await prisma.stores.groupBy({
        by: ['state'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } }
        });
    }

    async getStoresOwnership() {
        const own = await prisma.stores.count({ where: { is_own: true } });
        const franchise = await prisma.stores.count({ where: { is_own: false } });
        return { own, franchise };
    }

    async getStoresByYear() {
        const results: [] = await prisma.$queryRaw`
        SELECT 
            EXTRACT(YEAR FROM "creation_date") AS year,
            COUNT(*)::int AS total
        FROM "stores"
        WHERE "creation_date" IS NOT NULL
        GROUP BY year
        ORDER BY year;
        `;

        return results.map((r: any) => ({
        year: Number(r.year),
        total: Number(r.total)
        }));
    }

    async getStoresStatus() {
        const active = await prisma.stores.count({ where: { is_active: true } });
        const inactive = await prisma.stores.count({ where: { is_active: false } });
        return { active, inactive };
    }
};
