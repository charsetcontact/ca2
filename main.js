require('dotenv').config();
const express = require('express');
const cors = require("cors");
const mongoConnect = require('./util/database').MongoConnect;

const crudRoutes = require('./routes/crud');

const app = express();

app.use(cors());

app.use(express.json());

app.use(crudRoutes);

mongoConnect(() => {
    app.listen( process.env.PORT || 3000);
});