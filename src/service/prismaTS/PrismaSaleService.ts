import IEnvironment from "../../environments/IEnvironment";
import ISaleRepository from "../../repositories/ISaleRepository";
import ISaleService from "../ISaleService";

export default class PrismaSaleService implements ISaleService {
    environment: IEnvironment;
    repository: ISaleRepository;

    constructor(environment: IEnvironment){
        this.environment = environment
        this.repository = this.environment.saleRepository
    }

    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getSalesByMonth(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getTotalSales(): Promise<any> {
        return await this.repository.getTotalSales()
    }
    getSalesCount(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}