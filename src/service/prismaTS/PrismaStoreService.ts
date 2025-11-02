import IEnvironment from "../../environments/IEnvironment";
import IStoreRepository from "../../repositories/IStoreRepository";
import IStoreService from "../IStoreService";

export default class PrismaStoreService implements IStoreService {
    environment: IEnvironment;
    repository: IStoreRepository;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.repository = this.environment.storeRepository
    }

    getStoresByState(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getStoresOwnership(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getStoresByYear(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getStoresStatus(): Promise<any> {
        return await this.repository.getStoresStatus()
    }
}