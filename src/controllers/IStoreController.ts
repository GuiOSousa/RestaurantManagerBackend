import type { Request, Response } from 'express';

import IEnvironment from "../environments/IEnvironment"
import IStoreService from "../service/IStoreService"

export default interface IStoreController {
    environment: IEnvironment
    service: IStoreService

    getStoresByState(req: Request, res: Response): Promise<any>
    getStoresOwnership(req: Request, res: Response): Promise<any>
    getStoresByYear(req: Request, res: Response): Promise<any>
    getStoresStatus(req: Request, res: Response): Promise<any>
}