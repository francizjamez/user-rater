const express = require("express");
const {
  addUser,
  getUsersByLocation,
} = require("../controller/user.controller");

const UserRouter = express.Router();

UserRouter.post("/", addUser);
UserRouter.get("/:location", getUsersByLocation);

module.exports = UserRouter;
