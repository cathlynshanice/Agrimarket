const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3005;

//middleware
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Server is running on port", port);
})