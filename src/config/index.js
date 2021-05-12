require('dotenv').config();
const express = require('express');
const app = express();

// database connection
require('./database');

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));