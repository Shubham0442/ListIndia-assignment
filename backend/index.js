const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { userController } = require("./controllers/userController");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userController);

const PORT = process.env.PORT || 5050;

app.listen(PORT, async () => {
  try {
    await connect;
    console.log("app is running on http:localhost:" + PORT);
  } catch (error) {}
});
