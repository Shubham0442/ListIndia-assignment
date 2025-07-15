const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connect } = require("./config/db");
const { userController } = require("./Controllers/userController");
const { businessController } = require("./controllers/businessController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/business", businessController);

const PORT = process.env.PORT || 5050;

app.listen(PORT, async () => {
  try {
    await connect;
    console.log("app is running on http://localhost:" + PORT);
  } catch (error) {
    console.log("error", error);
  }
});
