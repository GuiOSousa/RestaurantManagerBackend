import type { Request, Response } from 'express';

import IEnvironment from "../environments/IEnvironment";
import IChannelService from "../service/IChannelService";

export default interface IChannelController {
    environment: IEnvironment
    service: IChannelService

    getSalesByChannel(req: Request, res: Response): Promise<any>
}