import { Request, Response } from "express";
import IEnvironment from "../../environments/IEnvironment";
import IStoreService from "../../service/IStoreService";
import IStoreController from "../IStoreController";

export default class PrismaStoreController implements IStoreController {
    environment: IEnvironment;
    service: IStoreService;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.service = this.environment.storeService
    }

    async getStoresByState(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getStoresOwnership(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getStoresByYear(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getStoresStatus(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.service.getStoresStatus()
            return res.status(200).json(data)
        } catch (err) {
            return res.status(400).json(err)
        }
    }

}