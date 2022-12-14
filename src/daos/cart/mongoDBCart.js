import MongoClass from "../../contenedores/mongoClass.js";
import cartSchema from "../../schemas/cartSchema.js";

class MongoDBCart extends MongoClass {
  constructor() {
    super("Carts", cartSchema);
  }

  createCart = (req, res, next) => {
    let body = req.body;

    super.create(body).then(
      (item) => {
        return res.json(item);
      },
      (error) => next(error)
    );
  };
  deleteCart = (req, res, next) => {
    let { id } = req.params;
    if (id) {
      super.deleteById(id).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
  getAllProductsInCart = (req, res, next) => {
    let { id } = req.params;
    if (id) {
      super.getProductsInCart(id).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
  addProduct = (req, res, next) => {
    let { id } = req.params;
    let body = req.body;
    super.addProductToCart(body, id).then(
      (item) => {
        return res.json(item);
      },
      (error) => next(error)
    );
  };
  deleteProductFromCart = (req, res, next) => {
    let { id: idCart, id_prod: idProduct } = req.params;
    if (idCart) {
      super.deleteProductFromCart(idProduct,idCart).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
  getCarts = (req, res, next) => {
    let { id } = req.params;
    let { userId } = req.query;
 
    if (id) {
      super.getById(id).then(
        (product) => {
          return res.json(product);
        },
        (error) => {
          
          return next(error);
        }
      );
    }else if(userId) {
      console.log(`estoy aca`);
      super.getByField({userId:userId}).then(
        (product) => {
          return res.json(product);
        },
        (error) => {
          
          return next(error);
        }
      );
    
    }
    else {
      super.getAll().then(
        (lista) => {
          return res.json(lista);
        },
        (error) => next(error)
      );
    }
  };
  getCartByUser=(req, res, next)=>{
    
  }
}
export default MongoDBCart;
