import { Router } from 'express';
import PrismaEnvironment from '../environments/PrismaEnvironment';

const productRouter = Router();

const environment = new PrismaEnvironment
const controller = environment.productController

productRouter.get('/', (req, res) => controller.getTopProducts(req, res))

export default productRouter;