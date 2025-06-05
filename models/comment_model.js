/**
 * Schema och Model för Comment
 */

const mongoose = require("mongoose");

// Schema 
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
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Model
const Comment = mongoose.model("Comment", commentSchema);

//Exportera model
module.exports = Comment;
