import IChannelRepository from "../IChannelRepository";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class PrismaChannelRepository implements IChannelRepository {
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    async getSalesByChannel() {
        return await prisma.channels.findMany({
            include: {
                _count: {
                    select: { sales: true }
                }
            },
            orderBy: {
                sales: {
                    _count: 'desc'
                }
            }
        });
    }

    async getTopChannelBySaleCount(): Promise<any> {
        return await prisma.channels.findFirst({
            orderBy: {
                sales: {
                    _count: 'desc'
                }
            }
        })
    }

    getTopChannelByRevenue(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}