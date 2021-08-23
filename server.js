const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const UserRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

const PORT = process.env.PORT || 5000;

app.use("/users", UserRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

mongoose.connect(
  process.env.MONGO_ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log(`mongoose connected`);
  }
);
