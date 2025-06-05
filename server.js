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
require("dotenv").config();

//initiera express
const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Anslut till MongoDb-databas via atlas med miljövariabel
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Ansluten till databas")
}).catch((error) => {
    console.error("Det gick inte att ansluta till databasen" + error)
});

//Routes
const gelatoRoutes = require("./routes/gelato_routes");
const toppingRoutes = require("./routes/topping_routes");
const drinkRoutes = require("./routes/drink_routes");
const commentRoutes = require("./routes/comment_routes");
const adminRoutes = require("./routes/admin_routes");

app.use("/api/gelato", gelatoRoutes);
app.use("/api/topping", toppingRoutes);
app.use("/api/drink", drinkRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/admin", adminRoutes);

//Starta express-server
app.listen(port, () => {
    console.log("Servern körs på port " + port)
});
