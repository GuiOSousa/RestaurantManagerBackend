import IEnvironment from "../../environments/IEnvironment";
import IChannelRepository from "../../repositories/IChannelRepository";
import IChannelService from "../IChannelService";

export default class PrismaChannelService implements IChannelService {
    environment: IEnvironment;
    repository: IChannelRepository;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.repository = this.environment.channelRepository
    }

    async getTopChannelBySaleCount(): Promise<any> {
        return await this.repository.getTopChannelBySaleCount()
    }

    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getSalesByChannel(): Promise<any> {
        return await this.repository.getSalesByChannel()
    }

}