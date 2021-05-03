const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

const essayRoutes = require('./routes/essays');
const topicRoutes = require('./routes/topics')

app.use(cors());
app.use('/essays', essayRoutes);
app.use('/topics', topicRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`));