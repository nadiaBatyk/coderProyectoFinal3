import MongoClass from "../../contenedores/mongoClass.js";
import userSchema from "../../schemas/userSchema.js";

class MongoDBUsers extends MongoClass {
  constructor() {
    super("Users", userSchema);
  }

  getUsers = (req, res, next) => {
    let { id } = req.params;
    if (id) {
      super.getById(id).then(
        (product) => {
          return res.json(product);
        },
        (error) => {
          console.log(error);
          return next(error);
        }
      );
    } else {
      super.getAll().then(
        (lista) => {
          return res.json(lista);
        },
        (error) => next(error)
      );
    }
  };
  createUser = (req, res, next) => {
    let body = req.body;

    super.create(body).then(
      (item) => {
        return res.json(item);
      },
      (error) => next(error)
    );
  };

  updateUser = (req, res, next) => {
    let { id } = req.params;
    let body = req.body;
    if (id) {
      super.update(body).then(
        (item) => {
          return res.status(200).json(item);
        },
        (error) => next(error)
      );
    }
  };
  deleteUser = (req, res, next) => {
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
}
export default MongoDBUsers;
