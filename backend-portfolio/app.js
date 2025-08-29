const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require('./routes/auth');
const projectsRoutes = require('./routes/projects');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(() => console.log('Connexion à MongoDB échouée'));

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://lucasdubeau.dev'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);

module.exports = app;
