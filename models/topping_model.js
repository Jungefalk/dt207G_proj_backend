/**
 * Schema och Model för Topping
 */

const mongoose = require("mongoose");

//Schema

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

//Model
const Topping = mongoose.model("Topping", toppingSchema);

//Exportera model
module.exports = Topping;
