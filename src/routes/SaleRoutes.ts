import { Router } from 'express';
import PrismaEnvironment from '../environments/PrismaEnvironment';

const saleRouter = Router();

const environment = new PrismaEnvironment
const controller = environment.saleController

saleRouter.get('/byMonth', (req, res) => controller.getSalesByMonth(req, res))
saleRouter.get('/total', (req, res) => controller.getTotalSales(req, res))

export default saleRouter;