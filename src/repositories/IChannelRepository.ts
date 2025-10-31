export default interface IChannelRepository {
    getAll(): Promise<any>
    getSalesByChannel(): Promise<any>
    getTopChannelBySaleCount(): Promise<any>
    getTopChannelByRevenue(): Promise<any>
}