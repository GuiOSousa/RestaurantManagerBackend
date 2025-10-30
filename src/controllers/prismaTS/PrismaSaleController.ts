import { Request, Response } from "express";
import IEnvironment from "../../environments/IEnvironment";
import ISaleService from "../../service/ISaleService";
import ISaleController from "../ISaleController";

export default class PrismaSaleController implements ISaleController {
    environment: IEnvironment;
    service: ISaleService;

    constructor(environment: IEnvironment){
        this.environment = environment
        this.service = environment.saleService
    }

    getAll(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getSalesByMonth(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getTotalSales(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.service.getTotalSales()
            return res.status(201).json(data)
        } catch(err) {
            return res.status(400).json(err)
        }
    }

    getSalesCount(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
}