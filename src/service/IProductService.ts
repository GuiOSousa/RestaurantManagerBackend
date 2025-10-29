import type IEnvironment from "../environments/IEnvironment"
import type IProductRepository from "../repositories/IProductRepository"

export default interface IProductService {
    repository: IProductRepository
    environment: IEnvironment
    
    getAll(): Promise<any>
    getTopProducts(limit: any): Promise<any>
    getProductsByName(name: any): Promise<any>
    getById(id: any): Promise<any>
}