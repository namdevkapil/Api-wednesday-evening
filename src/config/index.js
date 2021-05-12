const express = require('express');
const app = express();
const PORT = 3080;

// database connection
require('./database');

app.listen(3080, console.log(`Server running on port ${PORT}`));