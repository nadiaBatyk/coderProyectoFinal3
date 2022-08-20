import { Router } from "express";
import * as daos   from "../daos/index.js";

const routerUsers = Router();



routerUsers.route('/register')
.post(daos.userDao.createUser)

routerUsers.route('/login')
.post(daos.userDao.logUser);


export default routerUsers;