const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) res.status(401).send({ msg: "Unauthorised" });
    else {
      jwt.verify(token, process.env.SECRET, async function (err, decoded) {
        if (err) res.status(401).send({ msg: "Unauthorised" });
        else {
          req.userId = decoded?.userId;
          next();
        }
      });
    }
  } catch (error) {
    res.status(401).send({ msg: "Unauthorised" });
  }
};

module.exports = { authentication };
