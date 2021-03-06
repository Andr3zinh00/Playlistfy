const express = require("express");
const routes = require("./routes.js");
const cors = require('cors');
const { json } = require("express");

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(3333);