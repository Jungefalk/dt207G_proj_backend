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

//Registrera användare
adminSchema.statics.registerAdmin = async function (username, password) {
    try {
        const admin = new this({ username, password });
        await admin.save();
        return admin;
    } catch (error) {
        throw error;
    };
};

//Kontrollera hashat lösenord
adminSchema.methods.checkPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);

    } catch (error) {
        throw error;
    }
};
