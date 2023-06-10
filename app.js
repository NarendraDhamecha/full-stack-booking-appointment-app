const express  = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const cors = require('cors');

const bookingRoutes = require('./routes/bookingRoute');

app.use(cors());

app.use(bodyParser.json({extended: false}));

app.use('/booking', bookingRoutes);

sequelize.sync()
.then(() => app.listen(3000))
.catch(err => console.log(err));

