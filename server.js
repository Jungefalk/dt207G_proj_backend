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