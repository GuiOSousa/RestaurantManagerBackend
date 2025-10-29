import IChannelController from "../controllers/IChannelController";
import type IProductController from "../controllers/IProductController";
import PrismaChannelController from "../controllers/prismaTS/PrismaChannelController";
import PrismaProductController from "../controllers/prismaTS/PrismaProductController";
import IChannelRepository from "../repositories/IChannelRepository";
import type IProductRepository from "../repositories/IProductRepository";
import PrismaChannelRepository from "../repositories/prismaTS/PrismaChannelRepository";
import PrismaProductRepository from "../repositories/prismaTS/PrismaProductRepository";
import IChannelService from "../service/IChannelService";
import type IProductService from "../service/IProductService";
import PrismaChannelService from "../service/prismaTS/PrismaChannelService";
import PrismaProductService from "../service/prismaTS/PrismaProductService";
import type IEnvironment from "./IEnvironment";

export default class PrismaEnvironment implements IEnvironment {
    productRepository: IProductRepository;
    productService: IProductService;
    productController: IProductController;
    channelRepository: IChannelRepository;
    channelService: IChannelService;
    channelController: IChannelController;

    constructor() {
        this.productRepository = new PrismaProductRepository
        this.productService = new PrismaProductService(this)
        this.productController = new PrismaProductController(this)

        this.channelRepository = new PrismaChannelRepository
        this.channelService = new PrismaChannelService(this)
        this.channelController = new PrismaChannelController(this)
    }
    
    
}