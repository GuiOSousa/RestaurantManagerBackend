export default interface IStoreRepository {
    getStoresByState(): Promise<any>
    getStoresOwnership(): Promise<any>
    getStoresByYear(): Promise<any>
    getStoresStatus(): Promise<any>
}