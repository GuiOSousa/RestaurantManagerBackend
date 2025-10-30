import IEnvironment from "../environments/IEnvironment"
import ISaleRepository from "../repositories/ISaleRepository"

export default interface ISaleService {
    environment: IEnvironment
    repository: ISaleRepository
    
    getAll(): Promise<any>
    getSalesByMonth(): Promise<any>
    getTotalSales(): Promise<any>
    getSalesCount(): Promise<any>
} 