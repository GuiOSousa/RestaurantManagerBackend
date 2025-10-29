import IChannelController from "../controllers/IChannelController";
import type IProductController from "../controllers/IProductController";
import IChannelRepository from "../repositories/IChannelRepository";
import type IProductRepository from "../repositories/IProductRepository";
import IChannelService from "../service/IChannelService";
import type IProductService from "../service/IProductService";

export default interface IEnvironment {
    productRepository: IProductRepository
    productService: IProductService
    productController: IProductController

    channelRepository: IChannelRepository
    channelService: IChannelService
    channelController: IChannelController
}