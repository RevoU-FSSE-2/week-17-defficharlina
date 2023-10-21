const { Router } = require('express');
const {
    getAllBook,
    createBook,
    editBook,
    deleteBook,
  } = require("../controller/userController");

const {
    adminAuthorization,
    superadminAuthorization,
  } = require("../middleware/authenticationMiddleware");

const userRouter = Router();

userRouter.get("/", superadminAuthorization, getAllBook);
userRouter.post('/', adminAuthorization, createBook)
userRouter.put('/:id', adminAuthorization, editBook)
userRouter.delete('/:id', adminAuthorization, deleteBook)

module.exports = userRouter;


 