/**
 * Routes för Topping
 */

const express = require("express");
const router = express.Router();
const Topping = require("../models/toppingModel");
const authenticateToken = require("../middleware/authJwt");

//get

router.get("/", async (req, res) => {

    try {
        let result = await Topping.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});


//post

router.post("/", async (req, res) => {

    try {
        let result = await Topping.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});


//put

router.put("/:id", async (req, res) => {

    try {
        let result = await Topping.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    }

});

//delete

router.delete("/:id", async (req, res) => {

    try {
        let result = await Topping.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//Exportera routes
module.exports = router;