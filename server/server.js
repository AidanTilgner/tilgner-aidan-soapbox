const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

const essayRoutes = require('./routes/essays');

app.use(cors());
app.use('/essays', essayRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));