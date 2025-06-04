/**
 * Routes för registrering och inloggning
 */

const express = require("express");
const router = express.Router();

// Skapa användare
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        //validera input
        if (!username || username.length < 5 || !password || password.length < 5) {
            return res.status(400).json({ error: "Skicka med användarnamn och lösenord som är längre än 5 tecken" })
        };

        res.status(201).json({ message: "Användare tillagd" })

    } catch (error) {
        res.status(500).json({ error: "Det blev ett serverfel" });
    }
});

//exportera route
module.exports = router;