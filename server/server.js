const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT;

const essayRoutes = require('./routes/essays');
const topicRoutes = require('./routes/topics');
const userRoutes = require('./routes/users');

app.use(cors());
app.use('/', express.static('public'));
app.use('/essays', essayRoutes);
app.use('/topics', topicRoutes)
app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`Running on port ${PORT}`));