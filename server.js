/**
 * Webbtjänst för glasscafe -
 * Utvecklad med MogoDb och express
 * 
 * Projektuppgift i backendbaserad - webbutveckling
 * Av: Caroline Jungefalk Palmgren 
 */

//Importera paket
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//initiera express
const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());


//Anslut till MongoDb-databas via atlas med miljövariabel
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Ansluten till databas")
}).catch((error) => {
    console.error("Det gick inte att ansluta till databasen" + error)
});

/**
 * Routes för CRUD-operationer
 */


/**
 * GET - ROUTES
 */

//get gelato
app.get("/gelato", async (req, res) => {

    try {
        let result = await Gelato.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});

//get topping
app.get("/topping", async (req, res) => {

    try {
        let result = await Topping.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});

//get drink
app.get("/drink", async (req, res) => {

    try {
        let result = await Drink.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//get comment
app.get("/comment", async (req, res) => {

    try {
        let result = await Comment.find({});
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }
});


/**
 * POST - ROUTES
 */

//post gelato
app.post("/gelato", async (req, res) => {

    try {
        let result = await Gelato.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});

//post topping
app.post("/topping", async (req, res) => {

    try {
        let result = await Topping.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});

//post drink
app.post("/drink", async (req, res) => {

    try {
        let result = await Drink.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});

//post comment
app.post("/comment", async (req, res) => {

    try {
        let result = await Comment.create(req.body);
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    };

});


/**
 * PUT - ROUTES
 */

//put gelato
app.put("/gelato/:id", async (req, res) => {

    try {
        let result = await Gelato.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    }

});

//put topping
app.put("/topping/:id", async (req, res) => {

    try {
        let result = await Topping.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    }

});

//put drink
app.put("/drink/:id", async (req, res) => {

    try {
        let result = await Drink.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(result);

    } catch (error) {
        return res.status(400).json(error);
    }

});

/**
 * DELETE - ROUTES
 */

app.delete("/gelato/:id", async (req, res) => {

    try {
        let result = await Gelato.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

app.delete("/topping/:id", async (req, res) => {

    try {
        let result = await Topping.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

app.delete("/drink/:id", async (req, res) => {

    try {
        let result = await Drink.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

app.delete("/comment/:id", async (req, res) => {

    try {
        let result = await Comment.findByIdAndDelete(req.params.id);
        return res.json(result);

    } catch (error) {
        return res.status(500).json(error);
    }

});

//Starta express-server
app.listen(port, () => {
    console.log("Servern körs på port " + port)
});
