import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import productRouter from './src/routes/ProductRoutes';
import channelRouter from './src/routes/ChannelRoutes';
import saleRouter from './src/routes/SaleRoutes';
import storeRouter from './src/routes/StoreRoutes';

async function main() {
	const port = 3000
	const app = express()
	app.use(bodyParser.json())
	app.use(cors())
	

	app.get("/", (req, res) => {res.send("Servidor funcionando ✅")})

	app.use('/products', productRouter)
	app.use('/channels', channelRouter)
	app.use('/sales', saleRouter)
	app.use('/stores', storeRouter)

	//app.listen(port, () => console.log(`http://localhost:${port}`))
	app.listen(port)
}

main().catch(console.error);