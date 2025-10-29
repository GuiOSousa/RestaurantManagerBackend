export default interface IProductRepository {
    getAll(): Promise<any>
    getTopProducts(limit: number): Promise<any>
    getProductsByName(name: string): Promise<any>
    getById(id: string): Promise<any>
}