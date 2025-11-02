import { Router } from 'express';
import PrismaEnvironment from '../environments/PrismaEnvironment';

const storeRouter = Router();

const environment = new PrismaEnvironment
const controller = environment.storeController

storeRouter.get('/state', (req, res) => controller.getStoresByState(req, res))
storeRouter.get('/year', (req, res) => controller.getStoresByYear(req, res))
storeRouter.get('/ownership', (req, res) => controller.getStoresOwnership(req, res))
storeRouter.get('/status', (req, res) => controller.getStoresStatus(req, res))

export default storeRouter;