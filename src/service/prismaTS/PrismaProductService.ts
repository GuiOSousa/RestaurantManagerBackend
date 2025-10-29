import type IEnvironment from "../../environments/IEnvironment";
import type IProductRepository from "../../repositories/IProductRepository";
import type IProductService from "../IProductService";

export default class PrismaProductService implements IProductService {
    environment: IEnvironment;
    repository: IProductRepository;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.repository = this.environment.productRepository
    }

    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getTopProducts(data: any): Promise<any> {
        let limit = data["limit"]

        if (!limit) {
            limit = 10
        }

        limit = Number(limit)
        return await this.repository.getTopProducts(limit)
    }

    getProductsByName(name: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}