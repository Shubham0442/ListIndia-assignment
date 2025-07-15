const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userController = Router();

userController.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    console.log(firstname, lastname, email, password);

    if (
      !firstname ||
      firstname === "" ||
      !lastname ||
      lastname === "" ||
      !email ||
      email === "" ||
      !password ||
      password === ""
    ) {
      res.status(400).send({ msg: "Please fill all the fields correctly" });
    }

    const user = await User.find({ email: email });

    if (user && user?.length !== 0)
      res.status(429).send({ msg: "User already exist!" });
    else {
      bcrypt.hash(password, 8, async (error, hashedPassword) => {
        if (error)
          res
            .status(500)
            .send({ msg: "Something went wrong, please try again!" });
        else {
          const payload = {
            firstname,
            lastname,
            email,
            password: hashedPassword
          };

          const newUser = new User(payload);
          await newUser.save();
          res.status(201).send({ msg: "Registered Successfully!" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong, please try again!" });
  }
});

userController.post("/login", async (req, res) => {
  console.log("hello from login---------------------");
  try {
    const { email, password } = req.body;

    if (email && password && email !== "" && password !== "") {
      const user = await User.findOne({ email: email });

      // console.log(user);

      if (!user) {
        res.status(401).send({ error: "Invalid email or password" });
      } else {
        bcrypt.compare(password, user?.password, async (error, result) => {
          if (error) {
            res.status(401).send({ error: "Invalid email or password" });
          } else {
            if (result === true) {
              const token = jwt.sign({ userId: user._id }, process.env.SECRET);

              res.status(200).send({
                msg: "Login Successful!",
                user: {
                  _id: user._id,
                  firstname: user.firstname,
                  lastname: user.lastname,
                  email: user.email,
                  mobile: user.mobile
                },
                token: token
              });
            } else {
              res.status(401).send({ error: "Invalid email or password" });
            }
          }
        });
      }
    } else {
      return res
        .status(400)
        .send({ error: "email, and password are required." });
    }
  } catch (error) {
    res.status(401).send({ error: "Invalid email or password" });
  }
});

module.exports = { userController };
