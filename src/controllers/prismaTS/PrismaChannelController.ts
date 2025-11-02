import { Request, Response } from "express";
import IEnvironment from "../../environments/IEnvironment";
import IChannelService from "../../service/IChannelService";
import IChannelController from "../IChannelController";

export default class PrismaChannelController implements IChannelController {
    environment: IEnvironment;
    service: IChannelService;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.service = this.environment.channelService
    }

    async getTopChannelBySaleCount(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.service.getTopChannelBySaleCount()
            return res.status(200).json(data)
        } catch(err) {
            return res.status(400).json(err)
        }
    }

    async getSalesByChannel(req: Request, res: Response): Promise<any> {
        try {
			const data = await this.service.getSalesByChannel()
			return res.status(200).json(data)
		} catch (error: any) {
			return res.status(400).json({ message: error.message });
		}
    }

}