import { Router } from 'express';
import PrismaEnvironment from '../environments/PrismaEnvironment';

const channelRouter = Router();

const environment = new PrismaEnvironment
const controller = environment.channelController

channelRouter.get('/', (req, res) => controller.getSalesByChannel(req, res))
channelRouter.get('/topChannelBySaleCount', (req, res) => controller.getTopChannelBySaleCount(req, res))

export default channelRouter;