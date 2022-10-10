import express from "express";
import fs from "fs";

const shippingStatusRouterWrapper = (fileLocation) => {
  const shippingStatusRouter = express.Router();
  
  shippingStatusRouter.get('/', async (req, res) => {
    fs.readFile(fileLocation, 'utf8', function(err, data) {
      if (err) throw err;
      fs.writeFile(fileLocation, "Pending", err => {
        if (err) { console.error(err); return }
        console.log('Write is successful After Read')
      })
      res.send(JSON.stringify({ status: data.toString() }));
    });
  })

  return shippingStatusRouter
}


export default shippingStatusRouterWrapper;