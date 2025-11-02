import IChannelController from "../controllers/IChannelController";
import type IProductController from "../controllers/IProductController";
import ISaleController from "../controllers/ISaleController";
import IStoreController from "../controllers/IStoreController";
import IChannelRepository from "../repositories/IChannelRepository";
import type IProductRepository from "../repositories/IProductRepository";
import ISaleRepository from "../repositories/ISaleRepository";
import IStoreRepository from "../repositories/IStoreRepository";
import IChannelService from "../service/IChannelService";
import type IProductService from "../service/IProductService";
import ISaleService from "../service/ISaleService";
import IStoreService from "../service/IStoreService";

export default interface IEnvironment {
    productRepository: IProductRepository
    productService: IProductService
    productController: IProductController

    channelRepository: IChannelRepository
    channelService: IChannelService
    channelController: IChannelController

    saleRepository: ISaleRepository
    saleService: ISaleService
    saleController: ISaleController

    storeRepository: IStoreRepository
    storeService: IStoreService
    storeController: IStoreController
}