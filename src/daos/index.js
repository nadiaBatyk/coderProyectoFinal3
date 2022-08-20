import MongoDBProducts from "./products/MongoDBProducts.js";
import MongoDBCart from "./cart/mongoDBCart.js";
import MongoDBUsers from "./user/mongoDBUser.js";

let productDao, cartDao, userDao;

productDao = new MongoDBProducts();
cartDao = new MongoDBCart();
userDao = new MongoDBUsers();

export { productDao, cartDao, userDao };
