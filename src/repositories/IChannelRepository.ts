export default interface IChannelRepository {
    getAll(): Promise<any>
    getSalesByChannel(): Promise<any>
}