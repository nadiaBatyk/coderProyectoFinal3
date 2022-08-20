import { Router } from "express";
import * as daos   from "../daos/index.js";

const routerUsers = Router();



routerUsers.route('/')
.get(daos.productDao.getProducts)
.post(daos.productDao.createProduct)

routerUsers.route('/:id')
.get(daos.productDao.getProducts)
.put(daos.productDao.updateProduct)
.delete(daos.productDao.deleteProduct);


export default routerUsers;