const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// IMPORT ROUTES
const authRoute = require('./Routes/auth');
const projetRoute = require('./Routes/Projet');
const dashRoute = require('./Routes/Dashboard')
const inspirationRoute = require('./Routes/Inspirations');
const presentationRoute = require('./Routes/Presentation');
const serviceRoute = require('./Routes/Services');

// ROUTES MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/admin', dashRoute);
app.use('/api/admin/projets', projetRoute);
app.use('/api/admin/inspirations', inspirationRoute);
app.use('/api/admin/presentation', presentationRoute);
app.use('/api/admin/services', serviceRoute);

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION,
{
useNewUrlParser : true,
}, () => console.log('Connected to MongoDB'));

// PORT
app.listen(3001, console.log('Server Running'));