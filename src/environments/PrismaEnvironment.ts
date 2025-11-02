import IChannelController from "../controllers/IChannelController";
import type IProductController from "../controllers/IProductController";
import ISaleController from "../controllers/ISaleController";
import IStoreController from "../controllers/IStoreController";
import PrismaChannelController from "../controllers/prismaTS/PrismaChannelController";
import PrismaProductController from "../controllers/prismaTS/PrismaProductController";
import PrismaSaleController from "../controllers/prismaTS/PrismaSaleController";
import PrismaStoreController from "../controllers/prismaTS/PrismaStoreController";
import IChannelRepository from "../repositories/IChannelRepository";
import type IProductRepository from "../repositories/IProductRepository";
import ISaleRepository from "../repositories/ISaleRepository";
import IStoreRepository from "../repositories/IStoreRepository";
import PrismaChannelRepository from "../repositories/prismaTS/PrismaChannelRepository";
import PrismaProductRepository from "../repositories/prismaTS/PrismaProductRepository";
import PrismaSaleRepository from "../repositories/prismaTS/PrismaSaleRepository";
import PrismaStoreRepository from "../repositories/prismaTS/PrismaStoreRepository";
import IChannelService from "../service/IChannelService";
import type IProductService from "../service/IProductService";
import ISaleService from "../service/ISaleService";
import IStoreService from "../service/IStoreService";
import PrismaChannelService from "../service/prismaTS/PrismaChannelService";
import PrismaProductService from "../service/prismaTS/PrismaProductService";
import PrismaSaleService from "../service/prismaTS/PrismaSaleService";
import PrismaStoreService from "../service/prismaTS/PrismaStoreService";
import type IEnvironment from "./IEnvironment";

export default class PrismaEnvironment implements IEnvironment {
    productRepository: IProductRepository;
    productService: IProductService;
    productController: IProductController;

    channelRepository: IChannelRepository;
    channelService: IChannelService;
    channelController: IChannelController;

    saleRepository: ISaleRepository;
    saleService: ISaleService;
    saleController: ISaleController;

    storeRepository: IStoreRepository;
    storeService: IStoreService;
    storeController: IStoreController;

    constructor() {
        this.productRepository = new PrismaProductRepository
        this.productService = new PrismaProductService(this)
        this.productController = new PrismaProductController(this)

        this.channelRepository = new PrismaChannelRepository
        this.channelService = new PrismaChannelService(this)
        this.channelController = new PrismaChannelController(this)

        this.saleRepository = new PrismaSaleRepository
        this.saleService = new PrismaSaleService(this)
        this.saleController = new PrismaSaleController(this)

        this.storeRepository = new PrismaStoreRepository
        this.storeService = new PrismaStoreService(this)
        this.storeController = new PrismaStoreController(this)
    }
   
    
    
    
}