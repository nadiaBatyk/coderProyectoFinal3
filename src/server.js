import express from "express";
import routerCart from "./routes/cartRoutes.js";
//import notFoundRouter from "./routes/notFound";
import routerProducts from "./routes/productRoutes.js";
import routerLogin from "./routes/loginRoutes.js";
import verifyToken from "./middlewares/auth.js";
import dotenv from "dotenv";
import routerOrder from "./routes/orderRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos",verifyToken, routerProducts);
app.use("/api/carrito",verifyToken, routerCart);
app.use("/api/orders",verifyToken, routerOrder);
app.use("/", routerLogin);
//app.use('**',notFoundRouter)
app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status).json({ status: err.status, message: err.message });
});

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`conectado al puerto ${PORT}`);
});
server.on("error", (error) => console.log(`error en el servidor ${error}`));
