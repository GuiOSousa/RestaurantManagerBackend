import type { Request, Response } from 'express';

import type IEnvironment from "../environments/IEnvironment"
import type IProductService from "../service/IProductService"

export default interface IProductController {
    environment: IEnvironment
    service: IProductService
    
    getAll(req: Request, res: Response): Promise<any>
    getTopProducts(req: Request, res: Response): Promise<any>
    getProductsByName(req: Request, res: Response): Promise<any>
    getById(req: Request, res: Response): Promise<any>
}