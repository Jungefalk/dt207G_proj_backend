/**
 * Routes för Drink
 */

const express = require("express");
const router = express.Router();
const Drink = require("../models/drinkModel");
const authenticateToken = require("../middleware/authJwt");

//get

router.get("/", async (req, res) => {

    try {
        let result = await Drink.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//post

router.post("/", authenticateToken, async (req, res) => {

    try {
        let result = await Drink.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});

//put

router.put("/:id", authenticateToken, async (req, res) => {

    try {
        let result = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    }

});

//delete

router.delete("/:id", authenticateToken, async (req, res) => {

    try {
        let result = await Drink.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//Exportera routes
module.exports = router;