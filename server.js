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

/**
 * Schemas
 */

//Gelato schema

const gelatoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Skicka med namn på produkt"],

    },
    ingredients: {
        type: String,
        required: [true, "Skicka med ingredientslista"]
    },
    info: {
        type: String,
        required: [false]
    },
    price: {
        type: Number,
        required: [true, "Skicka med pris på produkt"]
    }
});

//Topping schema

const toppingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Skicka med namn på produkt"]
    },
    price: {
        type: Number,
        required: [true, "Skicka med pris på produkt"]
    }
});

// Schema för dryck

const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Skicka med namn på produkt"]
    },
    price: {
        type: Number,
        required: [true, "Skicka med pris på produkt"]
    }
});

// Schema för kommentar

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Skicka med namn"]
    },
    rating: {
        type: String,
        required: [true, "Skicka med ett betyg"]
    },
    comment: {
        type: String,
        required: [false]
    }
});

//Models
const Gelato = mongoose.model("Gelato", gelatoSchema);
const Topping = mongoose.model("Topping", toppingSchema);
const Drink = mongoose.model("Drink", drinkSchema);
const Comment = mongoose.model("Comment", commentSchema);

//Anslut till MongoDb-databas via atlas med miljövariabel
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Ansluten till databas")
}).catch((error) => {
    console.error("Det gick inte att ansluta till databasen" + error)
});

/**
 * Routes för CRUD-operationer
 */

//get
app.get("/gelato", async (req, res) => {

});

app.get("/topping", async (req, res) => {

});

app.get("/drink", async (req, res) => {

});

app.get("/comment", async (req, res) => {

});

//post
app.post("/gelato", async (req, res) => {

});

app.post("/topping", async (req, res) => {

});

app.post("/drink", async (req, res) => {

});

app.post("/comment", async (req, res) => {

});


//put

app.put("/gelato/:id", async (req, res) => {

});

app.put("/topping/:id", async (req, res) => {

});

app.put("/drink/:id", async (req, res) => {

    
});

//delete

//Starta express-server
app.listen(port, () => {
    console.log("Servern körs på port " + port)
})
