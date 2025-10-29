import type { Request, Response } from 'express';

import type IEnvironment from "../../environments/IEnvironment";
import type IProductService from "../../service/IProductService";
import type IProductController from "../IProductController";

export default class PrismaProductController implements IProductController {
    environment: IEnvironment;
    service: IProductService;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.service = this.environment.productService
    }

    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async getTopProducts(req: Request, res: Response): Promise<any> {
		try {
			const products = await this.service.getTopProducts(req.query);
			return res.status(201).json(products);
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
	}
    getProductsByName(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getById(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}