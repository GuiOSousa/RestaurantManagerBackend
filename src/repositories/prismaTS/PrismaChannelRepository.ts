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

}