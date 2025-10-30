export default interface ISaleRepository {
    getAll(): Promise<any>
    getSalesByMonth(): Promise<any>
    getTotalSales(): Promise<any>
    getSalesCount(): Promise<any>
}