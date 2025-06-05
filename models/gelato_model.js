/**
 * Schema och Model för Gelato
 */

const mongoose = require("mongoose");

//Schema
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

//Model
const Gelato = mongoose.model("Gelato", gelatoSchema);

//Exportera model
module.exports = Gelato;
