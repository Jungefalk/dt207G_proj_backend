/**
 * Routes för Comment
 */

const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");
const authenticateToken = require("../middleware/authJwt");

//get
router.get("/", async (req, res) => {

    try {
        let result = await Comment.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});


//post

router.post("/", async (req, res) => {

    try {
        let result = await Comment.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});


//delete

router.delete("/:id", authenticateToken, async (req, res) => {

    try {
        let result = await Comment.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//Exportera routes
module.exports = router;