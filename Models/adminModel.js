/**
 * Schema och Model för Admin
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Schema
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

//Hasha lösenord innan användare sparas
adminSchema.pre("save", async function (next) {

    try {
        if (this.isNew || this.isModified("password")) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();

    } catch (error) {
        next(error)
    }
});