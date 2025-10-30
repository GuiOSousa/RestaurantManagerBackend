import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import productRouter from './src/routes/ProductRoutes';
import channelRouter from './src/routes/ChannelRoutes';
import saleRouter from './src/routes/SaleService';

async function main() {
	const port = 3000
	const app = express()
	app.use(bodyParser.json())
	app.use(cors())
	

	app.get("/", (req, res) => {
		res.send("Servidor funcionando ✅");
		});

	app.use('/products', productRouter);
	app.use('/channels', channelRouter)
	app.use('/sales', saleRouter)

	app.listen(port, () => console.log(`http://localhost:${port}`));
}

main().catch(console.error);