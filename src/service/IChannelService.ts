import IEnvironment from "../environments/IEnvironment";
import IChannelRepository from "../repositories/IChannelRepository";

export default interface IChannelService {
    environment: IEnvironment
    repository: IChannelRepository

    getAll(): Promise<any>
    getSalesByChannel(): Promise<any>
    getTopChannelBySaleCount(): Promise<any>
}