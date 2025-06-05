/**
 * Schema och Model för Drink
 */

const mongoose = require("mongoose");

//Schema

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

//Model
const Drink = mongoose.model("Drink", drinkSchema);

//Exportera model
module.exports = Drink;
