const { Router } = require("express");
const { authentication } = require("../middlewares/authenticatation");
const { Business } = require("../models/businessModel");

const businessController = Router();

businessController.post("/new", authentication, async (req, res) => {
  try {
    const { name, category, location, description } = req.body;

    if (
      name &&
      name !== "" &&
      category &&
      category !== "" &&
      location &&
      location !== "" &&
      description &&
      description !== ""
    ) {
      const newBusiness = new Business({
        name: name?.toLowerCase(),
        category: category?.toLowerCase(),
        location: location?.toLowerCase(),
        description,
        userId: req?.userId
      });
      await newBusiness.save();
      res.status(201).send({ msg: "Business details saved successfully" });
    } else res.status(400).send({ msg: "Please fill all the fields" });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong, please try again!" });
  }
});

businessController.get("/search_business", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || query.trim().length < 1) {
      return res
        .status(400)
        .send({ msg: "Search query must be at least 1 character." });
    }

    const regex = new RegExp(query.trim(), "i");

    const businesses = await Business.find({
      $or: [{ name: regex }, { location: regex }, { category: regex }]
    }).limit(10);

    res.send({ msg: "Search results", response: businesses });
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).send({ msg: "Something went wrong, please try again!" });
  }
});

businessController.get("/get", async (req, res) => {
  try {
    const { search } = req.query;

    let filter = {};

    if (search && search?.trim() !== "") {
      const regex = new RegExp(search?.trim(), "i");
      filter = {
        $or: [{ name: regex }, { location: regex }, { category: regex }]
      };
    }

    const businesses = await Business.find(filter);

    res.send({ msg: "Business results", response: businesses });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ msg: "Something went wrong, please try again!" });
  }
});
