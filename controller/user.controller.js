const UserModel = require("../models/user.model");

const addUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = new UserModel(userData);
    await newUser.save();

    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUsersByLocation = async (req, res) => {
  const { location } = req.params;

  try {
    const users = await UserModel.find({ location });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { addUser, getUsersByLocation };
