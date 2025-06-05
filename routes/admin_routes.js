/**
 * Routes för registrering och inloggning
 */

const express = require("express");
const router = express.Router();
const Admin = require("../models/admin_model")
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Skapa användare
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        //validera input
        if (!username || username.length < 5 || !password || password.length < 5) {
            return res.status(400).json({ error: "Skicka med användarnamn och lösenord som är längre än 5 tecken" })
        };

        //Spara användare vid korrekt input
        const admin = new Admin({ username, password })
        await admin.save();

        res.status(201).json({ message: "Användare tillagd" })

    } catch (error) {
        res.status(500).json({ error: "Det blev ett serverfel" });
    }
});

//Logga in användare

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        //validera input
        if (!username || !password) {
            return res.status(400).json({ error: "Skicka med användarnamn/lösenord" });
        }

        //Kontrollera inloggningsuppgifter
        //Användarnamn
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ error: "Felaktigt användarnamn/lösenord" });
        };

        //Lösenord

        const correctPassword = await admin.checkPassword(password);
        if (!correctPassword) {
            return res.status(401).json({ error: "Felaktigt användarnamn/lösenord" });
        } else {

            //Skapa JWT
            const payload = { username: username }
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            const response = {
                message: "Användare inloggad",
                token: token
            }
            res.status(200).json({ response });
        }

    } catch (error) {
        res.status(500).json({ error: "Det blev ett serverfel" });
    }
});


//exportera route
module.exports = router;