const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const routerwork = require("../Backend/routerwork");
// const connectdb = require("../backend/config/db");
const mongoose = require("mongoose");
const connectString = "mongodb+srv://vedang:vedang123@cluster0.q10gsfp.mongodb.net/mern?retryWrites=true&w=majority";


mongoose.connect(connectString)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to our db and listening on ${port} port `);
        })

    })
    .catch((error) => {
        console.log(error);
    })

// connectdb();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/work', routerwork);