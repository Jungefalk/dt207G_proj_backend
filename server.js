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
const mongoose  = require("mongoose");

//initiera express
const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());