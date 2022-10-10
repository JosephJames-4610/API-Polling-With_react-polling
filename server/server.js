import fs from "fs";
import cors from "cors";
import path from 'path';
import express from "express";
import { fileURLToPath } from 'url';
import shippingStatusRouterWrapper from './routers/shippingStatusRouterWrapper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*"
  })
)

app.use('/shop-now-order/shipping-status', shippingStatusRouterWrapper(path.resolve(`${__dirname}/status.txt`)));

app.listen(4000, () => console.log('Shop Now Shipping Tracker'));

function updateStatus() {
  fs.writeFile(path.resolve(`${__dirname}/status.txt`), "Success", err => {
    if (err) { console.error(err); return }
    console.log('Write is successful')
  })
}

setInterval(updateStatus, 8000);