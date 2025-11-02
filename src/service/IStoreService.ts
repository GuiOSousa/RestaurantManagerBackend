import IEnvironment from "../environments/IEnvironment"
import IStoreRepository from "../repositories/IStoreRepository"

export default interface IStoreService {
    environment: IEnvironment
    repository: IStoreRepository

    getStoresByState(): Promise<any>
    getStoresOwnership(): Promise<any>
    getStoresByYear(): Promise<any>
    getStoresStatus(): Promise<any>
}