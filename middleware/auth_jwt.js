/**
 * Middleware för validering av JWT token
 */

const jwt = require("jsonwebtoken");
require("dotenv").config();


//Validera token

function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) res.status(401).json({ message: "Ej Behörig för denna route - token saknas" });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if (err) {
            return res.status(403).json({ message: "Ogiltig JWT token" });
        }

        req.username = username;
        next();
    })
};

//exportera middleware
module.exports = authenticateToken;