import type { Request, Response } from 'express';

import IEnvironment from "../environments/IEnvironment";
import ISaleService from "../service/ISaleService";

export default interface ISaleController {
    environment: IEnvironment
    service: ISaleService

    getAll(req: Request, res: Response): Promise<any>
    getSalesByMonth(req: Request, res: Response): Promise<any>
    getTotalSales(req: Request, res: Response): Promise<any>
    getSalesCount(req: Request, res: Response): Promise<any>
}